import React from 'react';
import { AGENCY_MARQUEE } from '../data/agencyData';

export default function AgencyMarquee() {
  return (
    <div className="border-y border-charcoal-300 bg-surface py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...AGENCY_MARQUEE, ...AGENCY_MARQUEE].map((evt, idx) => (
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
