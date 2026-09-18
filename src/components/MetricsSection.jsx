import React from 'react';
import { FOUNDER_STANDARDS } from '../data/agencyData';
import { ShieldCheck, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';

export default function MetricsSection({ onOpenBooking }) {
  return (
    <section id="telemetry" className="bg-charcoal-950 text-white py-24 sm:py-36 px-4 sm:px-8 relative overflow-hidden border-y border-charcoal-800">
      {/* Dark Blueprint Grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large Brand Statement */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>[ 06 // FOUNDER STANDARDS & PRINCIPLES ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-[1.05]">
            Hand-crafted digital products, <br />
            <span className="text-charcoal-400">built with purpose.</span>
          </h2>
          <p className="text-base sm:text-xl text-charcoal-300 font-normal max-w-2xl pt-2">
            Every website and application is developed with attention to clean code, usability, and direct founder accountability.
          </p>
        </div>

        {/* 4 Standards Cards (Replacing fake unverified numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FOUNDER_STANDARDS.map((std, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-charcoal-900/90 border border-charcoal-800 hover:border-charcoal-700 transition-all group flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-charcoal-500 mb-6 flex justify-between items-center">
                <span>0{i + 1} // STANDARD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-terminal-green transition-colors" />
              </div>

              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-charcoal-800 text-charcoal-300 mb-3">
                  {std.tag}
                </span>
                <div className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors">
                  {std.title}
                </div>
                <div className="font-sans text-xs text-charcoal-400 mt-2 leading-relaxed">
                  {std.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tactile Certification & Technical Guarantee Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-900/60 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-white">
                The Jugarr Authenticity Commitment
              </div>
              <div className="font-mono text-xs text-charcoal-400">
                100% custom code hand-written by Sagar. No fabricated scale, no fake reviews, no bloated templates.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-white text-ink hover:bg-accent hover:text-white rounded-full font-display font-bold text-sm transition-all duration-200 flex items-center gap-2 shrink-0"
            >
              <span>Work With Sagar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
