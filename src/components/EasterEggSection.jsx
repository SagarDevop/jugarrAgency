import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function EasterEggSection() {
  const [pressed, setPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  const handleButtonPress = () => {
    setPressed(true);
    setPressCount((prev) => prev + 1);

    // Audio click effect using Web Audio API
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      // Audio not supported or blocked
    }

    // Confetti celebration
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#E53935', '#111110', '#1DA1F2', '#FFB800'],
    });

    setTimeout(() => {
      setPressed(false);
    }, 200);
  };

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-5xl mx-auto text-center">
      {/* Container styled like a retro industrial metal console plate */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-surface border-2 border-charcoal-300 shadow-tactile-lg max-w-2xl mx-auto">
        {/* Metal corner bolts */}
        <div className="absolute top-4 left-4 w-3 h-3 rounded-full border border-charcoal-400 bg-charcoal-200 flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-charcoal-500 transform rotate-45" />
        </div>
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full border border-charcoal-400 bg-charcoal-200 flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-charcoal-500 transform -rotate-12" />
        </div>
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full border border-charcoal-400 bg-charcoal-200 flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-charcoal-500 transform rotate-90" />
        </div>
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full border border-charcoal-400 bg-charcoal-200 flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-charcoal-500" />
        </div>

        {/* Plate Header */}
        <div className="font-mono text-xs text-charcoal-500 uppercase tracking-widest mb-8">
          AGENCY EMERGENCY OVERRIDE // CONSOLE JG-88
        </div>

        {/* The Button Assembly */}
        <div className="relative inline-block my-6">
          {/* Handwritten prompt inspired by reference */}
          <div className="absolute -top-12 -right-16 sm:-right-24 flex items-center gap-1 text-accent font-hand text-2xl font-bold select-none pointer-events-none rotate-6">
            <span>don't press this button.</span>
            <svg className="w-7 h-7 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M4 4c8 2 12 8 14 16M18 20l-4-4M18 20l3-4" />
            </svg>
          </div>

          {/* Arcade Dome Button */}
          <button
            onClick={handleButtonPress}
            className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-red-500 to-accent text-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase flex flex-col items-center justify-center transition-all duration-100 ${
              pressed ? 'shadow-dome-pressed translate-y-3' : 'shadow-dome'
            }`}
          >
            <span className="drop-shadow-md">DO NOT</span>
            <span className="text-xl sm:text-2xl font-black drop-shadow-md">PRESS</span>
          </button>
        </div>

        {/* Press Feedback message */}
        <div className="mt-8 font-mono text-xs text-charcoal-600 min-h-[24px]">
          {pressCount === 0 ? (
            <span>WARNED: PRESSING MAY TRIGGER UNCONTROLLABLE WEB SPEED AND TOP-TIER RANKINGS.</span>
          ) : (
            <div className="text-accent font-bold animate-bounce flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>
                CODE UNLOCKED: "JUGARR-VIP-SPRINT" (10% Priority Sprint Allocation Claimed!)
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-charcoal-200 text-charcoal-400 font-mono text-[11px]">
          HARDWARE LEVEL 1 // DIRECT JUGARR RELAY
        </div>
      </div>
    </section>
  );
}
