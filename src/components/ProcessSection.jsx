import React from 'react';
import { WORK_PROCESS } from '../data/agencyData';
import { ArrowUpRight, Compass, Layers, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const processIcons = {
  '01': Compass,
  '02': Layers,
  '03': Code2,
  '04': Rocket,
};

export default function ProcessSection({ onOpenBooking }) {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ 05 // HOW I WORK & PROJECT PROCESS ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            How I approach every project.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600">
            A practical, structured workflow focused on clear requirements, thoughtful interface craft, and reliable full-stack execution.
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="mt-4 md:mt-0 px-5 py-2.5 bg-surface border border-charcoal-300 hover:bg-charcoal-100 rounded-full font-mono text-xs font-bold text-ink transition-colors flex items-center gap-2"
        >
          <span>Start a Conversation</span>
          <ArrowUpRight className="w-4 h-4 text-accent" />
        </button>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {WORK_PROCESS.map((step) => {
          const Icon = processIcons[step.phase] || Code2;
          return (
            <div
              key={step.phase}
              className="p-8 rounded-3xl border border-charcoal-300 bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-charcoal-100 flex items-center justify-center text-ink font-bold font-mono text-xs">
                      {step.phase}
                    </div>
                    <span className="font-mono text-xs text-charcoal-500 font-bold">
                      {step.duration}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-200 flex flex-wrap gap-2">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-charcoal-100 text-charcoal-700 font-mono text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
