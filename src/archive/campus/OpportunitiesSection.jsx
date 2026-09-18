import React from 'react';
import { OPPORTUNITIES } from '../data/campusData';
import { Briefcase, ArrowUpRight, Clock, MapPin, DollarSign, Users, Award } from 'lucide-react';

export default function OpportunitiesSection({ onOpenWaitlist }) {
  return (
    <section id="ecosystem" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            [ 05 // OPPORTUNITY RADAR & ECOSYSTEM ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Gigs, research, & hackathon squads.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600">
            Beyond physical trades, Jugarr unlocks peer tutoring, student startups, and lab collaborations across your campus network.
          </p>
        </div>

        <button
          onClick={onOpenWaitlist}
          className="mt-4 md:mt-0 px-5 py-2.5 bg-surface border border-charcoal-300 hover:bg-charcoal-100 rounded-full font-mono text-xs font-bold text-ink transition-colors flex items-center gap-2"
        >
          <Briefcase className="w-4 h-4 text-accent" />
          <span>Post Campus Gig</span>
        </button>
      </div>

      {/* Opportunities Card Deck */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OPPORTUNITIES.map((opp) => (
          <div
            key={opp.id}
            className="p-6 sm:p-8 rounded-3xl border border-charcoal-300 bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Type */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-md bg-charcoal-100 text-charcoal-800 font-mono text-xs font-semibold">
                  {opp.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-xs font-bold">
                  {opp.badge}
                </span>
              </div>

              {/* Title & Requester */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-2">
                {opp.role}
              </h3>

              <div className="flex items-center gap-3 font-mono text-xs text-charcoal-500 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {opp.campus}
                </span>
                <span>•</span>
                <span>{opp.requester}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                {opp.description}
              </p>
            </div>

            {/* Compensation & Action */}
            <div className="pt-4 border-t border-charcoal-200 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="font-mono text-xs text-charcoal-400">COMPENSATION</div>
                <div className="font-display font-bold text-base text-emerald-700">
                  {opp.compensation}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenWaitlist}
                  className="px-5 py-2.5 bg-ink text-white hover:bg-accent text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 group"
                >
                  <span>Connect with Lead</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
