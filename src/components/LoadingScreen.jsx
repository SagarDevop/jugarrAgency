'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const statuses = [
    'CALIBRATING LIGHTHOUSE 100 ENGINE...',
    'COMPILING 120FPS MOBILE GESTURE KERNEL...',
    'CONNECTING TO GOOGLE SEARCH ENTITY GRAPH...',
    'VERIFYING HEADLESS REACT ARCHITECTURES...',
    'JUGARR STUDIO READY.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 16) + 10;
        return next > 100 ? 100 : next;
      });
    }, 110);

    const statusTimer = setInterval(() => {
      setStatusIdx((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-charcoal-950 text-white p-6 sm:p-12 transition-opacity duration-700 pointer-events-none ${
        isFading ? 'opacity-0 -translate-y-4' : 'opacity-100'
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between font-mono text-xs text-charcoal-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>JUGARR STUDIO // AGENCY PROTOCOL</span>
        </div>
        <span className="hidden sm:inline tracking-wider">WEB • APP • SEO ENGINE</span>
      </div>

      {/* Center typography */}
      <div className="max-w-xl mx-auto text-center space-y-4">
        <div className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
          jugarr<span className="text-accent">.</span>in
        </div>
        <p className="font-mono text-xs sm:text-sm text-charcoal-300 tracking-wider">
          {statuses[statusIdx]}
        </p>
      </div>

      {/* Bottom progress bar */}
      <div className="max-w-md w-full mx-auto space-y-2">
        <div className="flex justify-between font-mono text-xs text-charcoal-400">
          <span>INITIALIZING</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
