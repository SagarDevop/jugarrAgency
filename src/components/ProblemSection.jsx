import React, { useState } from 'react';
import { PROBLEM_COMPARISON } from '../data/agencyData';
import { CheckCircle2, RefreshCw, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

export default function ProblemSection() {
  const [resolved, setResolved] = useState(false);

  return (
    <section id="problem" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ 04 // THE DEVELOPMENT PROBLEM ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Too many websites suffer from bloated templates and unclear structure.
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm text-charcoal-500 max-w-sm mt-4 md:mt-0">
          Heavy third-party builders, overlooked mobile responsiveness, and fragile codebases that break under basic updates.
        </p>
      </div>

      {/* Interactive Comparison Stage */}
      <div className="relative p-6 sm:p-12 rounded-3xl border border-charcoal-300 bg-surface shadow-tactile transition-all duration-500 overflow-hidden">
        {/* Toggle Protocol Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-charcoal-200 mb-8">
          <div>
            <div className="font-display font-bold text-lg sm:text-xl text-ink">
              {resolved ? 'Jugarr Development Approach: Clean & Maintainable' : 'Common Agency Status Quo: Bloated & Fragile'}
            </div>
            <p className="font-mono text-xs text-charcoal-500 mt-0.5">
              {resolved
                ? 'Hand-crafted React/Next.js/Node.js • Responsive mobile layouts • Direct founder communication'
                : 'Overloaded plugins • Generic look • Clunky mobile rendering • Inconsistent communication'}
            </p>
          </div>

          <button
            onClick={() => setResolved(!resolved)}
            className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
              resolved
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-accent text-white hover:bg-accent-dark animate-pulse'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${resolved ? '' : 'animate-spin'}`} />
            <span>{resolved ? 'RESET TO STATUS QUO' : 'APPLY JUGARR APPROACH'}</span>
          </button>
        </div>

        {/* Dynamic Card Display */}
        {!resolved ? (
          /* Chaotic traditional agency state */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
            {PROBLEM_COMPARISON.traditional.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${item.color} shadow-sm transition-transform duration-300 hover:scale-[1.01] ${
                  idx % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2 opacity-80">
                  <span className="font-semibold uppercase tracking-wider">{item.tag}</span>
                  <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg mb-2 text-charcoal-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white/80 border border-current/20">
                  ⚠️ COMMON ISSUE
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Resolved high-performance Jugarr state */
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-emerald-900">
                    Hand-Crafted Modern Code Standard Active
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Zero template bloat. Every line written for maintainability, speed, and real business functionality.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-white border border-emerald-300 rounded-full font-mono text-xs font-bold text-emerald-800 shrink-0">
                Direct Founder Work
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              {PROBLEM_COMPARISON.jugarrWay.map((pillar, i) => (
                <div key={i} className="p-5 rounded-xl bg-canvas-card border border-charcoal-200 flex flex-col justify-between">
                  <div>
                    <div className="text-accent font-bold mb-1">0{i + 1} // PRINCIPLE</div>
                    <div className="font-display font-bold text-sm text-ink mb-2">
                      {pillar.title}
                    </div>
                    <p className="text-charcoal-600 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal-200 text-emerald-700 font-bold text-xs">
                    FOCUS: {pillar.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom annotation */}
        <div className="mt-8 pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-charcoal-500">
          <span>CODE STANDARD: DIRECT FOUNDER ENGINEERING // SAGAR SINGH RAJAWAT</span>
          <span className="text-accent font-hand text-base font-bold">
            💡 "Useful, clear, and built around real requirements."
          </span>
        </div>
      </div>
    </section>
  );
}
