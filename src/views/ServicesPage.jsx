'use client';

import React from 'react';
import ModernServicesShowcase from '../components/ModernServicesShowcase';
import { ArrowUpRight } from 'lucide-react';
import { useBooking } from '../components/ClientLayout';

export default function ServicesPage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;
  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span>[ SERVICES & SCOPES // CORE CAPABILITIES ]</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-tight">
          What Jugarr builds.
        </h1>
        <p className="text-base sm:text-xl text-charcoal-600 font-normal leading-relaxed pt-2">
          From e-commerce solutions to business websites, web applications, and ongoing technical maintenance. Direct development and senior architecture by founder Sagar Singh Rajawat.
        </p>
      </div>

      {/* Modern Interactive Services Showcase & Bento Grid */}
      <div className="mb-16">
        <ModernServicesShowcase onOpenBooking={handleBooking} isPage={true} />
      </div>

      {/* Engagement Note */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-charcoal-300 shadow-tactile flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-xl text-ink">
            Have a project that requires a customized approach?
          </h3>
          <p className="text-sm text-charcoal-600 font-normal">
            I work with founders and businesses to scope requirements realistically and deliver clean solutions.
          </p>
        </div>

        <button
          type="button"
          onClick={handleBooking}
          className="px-6 py-3.5 bg-ink text-white hover:bg-accent rounded-full font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 shrink-0"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
