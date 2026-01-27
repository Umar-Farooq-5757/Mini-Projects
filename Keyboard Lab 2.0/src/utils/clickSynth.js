// clickSynth.js
export function createClickPlayer() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    console.warn("Web Audio API not supported in this browser.");
    return {
      play: () => {},
      dispose: () => {},
    };
  }

  const audioCtx = new AudioContext();
  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.6; // global volume (tweak)
  masterGain.connect(audioCtx.destination);

  // ensure context resumed on first user interaction
  const ensureRunning = () => {
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  };

  /**
   * Play a click
   * options:
   *  - volume: 0..1 (default 0.2)
   *  - type: "click" | "noise" | "blend" (default "blend")
   *  - pitch: oscillator frequency in Hz (affects "click" / "blend")
   *  - decay: envelope length in seconds (default 0.02)
   */
  function play({ volume = 0.2, type = "blend", pitch = 1200, decay = 0.02 } = {}) {
    ensureRunning();

    const now = audioCtx.currentTime;

    // small gain node for this event
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(volume, now);
    g.connect(masterGain);

    // envelope: quick exponential decay to avoid clicks from abrupt stop
    g.gain.setValueAtTime(volume, now);
    // ramp down to near-zero (don't use 0 for exponential ramp)
    g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

    if (type === "click" || type === "blend") {
      // short oscillator pulse (square or saw gives sharper transient)
      const osc = audioCtx.createOscillator();
      osc.type = "square";
      osc.frequency.setValueAtTime(pitch, now);
      osc.connect(g);
      osc.start(now);
      osc.stop(now + decay + 0.01); // stop shortly after decay
      // cleanup
      osc.onended = () => {
        try { osc.disconnect(); } catch {}
      };
    }

    if (type === "noise" || type === "blend") {
      // short noise burst for "snap" quality
      const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate * (decay + 0.01)));
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      // Fill with white noise shaped by a quick envelope (fade-out)
      for (let i = 0; i < bufferSize; i++) {
        // shape the amplitude to reduce high-frequency hiss as it decays
        const env = Math.pow(1 - i / bufferSize, 2);
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const src = audioCtx.createBufferSource();
      src.buffer = buffer;
      src.connect(g);
      src.start(now);
      src.stop(now + decay + 0.01);
      src.onended = () => {
        try { src.disconnect(); } catch {}
      };
    }

    // cleanup the gain node shortly after sound finishes
    setTimeout(() => {
      try { g.disconnect(); } catch {}
    }, (decay + 0.05) * 1000);
  }

  function dispose() {
    try {
      masterGain.disconnect();
    } catch {}
    // close audio context (optional) — may throw if already closed
    audioCtx.close().catch(() => {});
  }

  return { play, dispose, audioCtx };
}
