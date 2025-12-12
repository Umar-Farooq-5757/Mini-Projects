import React from "react";

/**
 * Custom React Hook to generate a simple key-click sound using the Web Audio API.
 * @returns {function} A function to call to play the sound.
 */
const useClickSound = () => {
  // Use a ref to hold the AudioContext instance across renders
  const audioContextRef = React.useRef(null);

  // Initialize the AudioContext only once
  const initializeAudioContext = () => {
    // Check if the context is already initialized
    if (!audioContextRef.current) {
      // Browsers may prefix the AudioContext
      const AudioContextClass =
        window.AudioContext || Window.webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      } else {
        console.error("Web Audio API is not supported in this browser.");
      }
    }
  };

  React.useEffect(() => {
    initializeAudioContext();
  }, []); // Initialize on mount

  /**
   * Generates and plays a short, high-frequency sound (a click).
   */
  const playClickSound = React.useCallback(() => {
    const context = audioContextRef.current;

    if (!context) return;

    // A common best practice: resume the context if it's suspended
    if (context.state === "suspended") {
      context.resume();
    }

    // --- Define parameters for a crisp click ---
    const clickDuration = 0.02; // Total time in seconds (very short)
    const startFrequency = 3500; // High-frequency start for crispness
    const peakVolume = 0.35;
    const initialVolume = 0.0001; // Start from near silence

    // --- 1. Create the Oscillator (the source of the sound wave) ---
    const oscillator = context.createOscillator();
    // 'square' or 'sawtooth' often sounds brighter/crisper than 'triangle'
    oscillator.type = "square";

    // Set a high frequency for the "click" pitch
    oscillator.frequency.setValueAtTime(startFrequency, context.currentTime);

    // Optional: Add a quick, high-frequency drop to mimic key impact and release
    oscillator.frequency.exponentialRampToValueAtTime(
      1500,
      context.currentTime + clickDuration
    );

    // --- 2. Create the Gain Node (controls the volume envelope) ---
    const gainNode = context.createGain();

    // Start from silence
    gainNode.gain.setValueAtTime(initialVolume, context.currentTime);

    // Attack phase: quickly ramp up to peak volume (0.001s)
    gainNode.gain.exponentialRampToValueAtTime(
      peakVolume,
      context.currentTime + 0.001
    );

    // Decay/Release phase: quickly ramp down to silence (0.02s total duration)
    gainNode.gain.exponentialRampToValueAtTime(
      initialVolume,
      context.currentTime + clickDuration
    );

    // --- 3. Connect the Nodes ---
    // Oscillator -> Gain Node -> Speakers (Destination)
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    // --- 4. Start and Stop the Sound ---
    oscillator.start(context.currentTime); // Start immediately
    // Stop after the total duration to clean up resources
    oscillator.stop(context.currentTime + clickDuration + 0.001); // Add a small buffer

    // Clean up the nodes after the sound has completely finished
    setTimeout(() => {
      oscillator.disconnect();
      gainNode.disconnect();
    }, clickDuration * 1000 + 10); // Wait for the sound to finish plus a small margin
  }, []); // End of useCallback

  return playClickSound;
};

export default useClickSound;
