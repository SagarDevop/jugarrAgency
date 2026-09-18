import React, { useState } from 'react';
import { AGENCY_FAQ } from '../data/agencyData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-32 px-4 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
          [ 08 // CLARITY & FAQ ]
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
          Frequently asked questions.
        </h2>
        <p className="text-sm sm:text-base text-charcoal-600">
          Everything you need to know about our engineering standards, sprint velocity, and technical SEO guarantees.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {AGENCY_FAQ.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-charcoal-300 bg-surface shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-ink hover:text-accent transition-colors"
              >
                <span>{item.q}</span>
                <span className="p-1 rounded-full bg-charcoal-100 text-ink shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-600 leading-relaxed border-t border-charcoal-100">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
