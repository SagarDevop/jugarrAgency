import React from 'react';

export default function CampusMarquee() {
  const events = [
    { tag: 'IIT BOMBAY', text: 'Calculus 8th Ed. handed over at Hostel 12', time: '2m ago' },
    { tag: 'BITS PILANI', text: 'Hero Sprint 21-Speed Cycle claimed', time: '5m ago' },
    { tag: 'DELHI UNIV', text: 'Signals & Systems cheat-sheet bundle reserved', time: '8m ago' },
    { tag: 'IIIT HYD', text: 'Smart India Hackathon frontend slot filled', time: '12m ago' },
    { tag: 'NIT TRICHY', text: 'Prestige Induction hotplate verified & picked up', time: '15m ago' },
    { tag: 'IIT DELHI', text: 'Sony WH-1000XM4 traded with library handshake', time: '19m ago' },
  ];

  return (
    <div className="border-y border-charcoal-300 bg-surface py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...events, ...events].map((evt, idx) => (
          <div key={idx} className="flex items-center space-x-3 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-800 font-bold text-[10px]">
              {evt.tag}
            </span>
            <span className="text-charcoal-700 font-medium">{evt.text}</span>
            <span className="text-charcoal-400 text-[10px]">[{evt.time}]</span>
            <span className="text-charcoal-300">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
