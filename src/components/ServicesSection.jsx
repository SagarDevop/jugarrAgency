'use client';

import HomeServicesBento from './HomeServicesBento';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Headline */}
      <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
        <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
          [ 03 // CORE CAPABILITIES ]
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-ink leading-tight">
          Services built around real requirements.
        </h2>
        <p className="text-base sm:text-xl text-charcoal-600 font-normal leading-relaxed pt-2">
          From custom storefronts and business websites to full-stack web applications and technical maintenance. Direct development focused on clarity, performance, and usability.
        </p>
      </div>

      {/* Fancy Bento Grid for Home */}
      <HomeServicesBento onOpenBooking={onOpenBooking} />

      {/* Practical Principle Banner */}
      <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-ink text-white shadow-tactile-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
            FOUNDER PRINCIPLE
          </div>
          <p className="text-xl sm:text-2xl font-display font-bold leading-snug">
            "Every website or web application should serve an actual purpose for your business—clearly communicating your offer and making customer actions seamless."
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenBooking}
          className="px-6 py-3.5 bg-white text-ink hover:bg-accent hover:text-white rounded-full font-display font-bold text-sm transition-all duration-200 shrink-0 flex items-center gap-2 shadow-sm"
        >
          <span>Let's Discuss Your Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
