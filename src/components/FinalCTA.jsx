import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-4xl bg-ink text-white p-8 sm:p-16 lg:p-20 shadow-tactile-lg overflow-hidden border border-charcoal-800">
        {/* Dark Blueprint Grid background */}
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-charcoal-700 text-accent font-mono text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>DIRECT COLLABORATION // SAGAR SINGH RAJAWAT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.05] mb-6">
            Have a project in mind? <br />
            <span className="text-charcoal-400">Let's build it together.</span>
          </h2>

          <p className="text-base sm:text-xl text-charcoal-300 font-normal leading-relaxed max-w-xl mb-10">
            Whether you need a custom e-commerce platform, a business website renovation, or a full-stack web application, I'm here to build it cleanly and thoughtfully.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-display font-bold text-sm sm:text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2 shrink-0 group"
            >
              <span>Start a Project Conversation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Micro assurances */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-charcoal-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Direct Founder Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Hand-Crafted Clean Code
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Clear & Honest Scoping
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
