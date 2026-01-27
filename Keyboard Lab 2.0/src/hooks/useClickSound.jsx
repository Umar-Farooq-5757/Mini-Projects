import { useEffect, useRef } from "react";

export default function useClickSound(url) {
  const audioCtxRef = useRef(null);
  const bufferRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const audioCtx = new AudioContext();
        audioCtxRef.current = audioCtx;

        // fetch and decode the audio once
        const res = await fetch(url);
        const arrayBuffer = await res.arrayBuffer();
        const decoded = await audioCtx.decodeAudioData(arrayBuffer);
        if (mounted) bufferRef.current = decoded;
      } catch (err) {
        // silent fail — keep console for debugging
        console.error("click sound load failed:", err);
      }
    };

    init();

    return () => {
      mounted = false;
      // close audio context on unmount to free resources (optional)
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [url]);

  const play = (volume = 0.25) => {
    const audioCtx = audioCtxRef.current;
    const buffer = bufferRef.current;
    if (!audioCtx || !buffer) return;

    // resume if suspended (browsers often start suspended until user gesture)
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});

    // create a fresh source node for each play (very cheap)
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;

    const gain = audioCtx.createGain();
    gain.gain.value = volume;

    source.connect(gain).connect(audioCtx.destination);
    source.start(0);

    // cleanup references when finished
    source.onended = () => {
      try {
        source.disconnect();
        gain.disconnect();
      } catch (e) {}
    };
  };

  return { play };
}
