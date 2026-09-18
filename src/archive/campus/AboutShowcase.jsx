import React from 'react';
import { ArrowUpRight, Shield, Layers, Users, Zap } from 'lucide-react';

export default function AboutShowcase({ onOpenWaitlist }) {
  const pillars = [
    {
      step: '01',
      title: 'Peer-to-Peer Campus Exchange',
      description: 'Hostel rooms are stuffed with textbooks, monitors, induction hotplates, and cycles that seniors don\'t need anymore. Jugarr turns dormant campus resources into an instant, fair peer economy.',
      icon: Layers,
      tag: 'Zero Commission'
    },
    {
      step: '02',
      title: 'Campus Opportunity Radar',
      description: 'Need a co-founder for an E-Cell venture, a teammate for Smart India Hackathon, or a peer tutor for multivariable calculus? Discover vetted talent studying 500 meters from your dorm room.',
      icon: Zap,
      tag: 'Student Gigs & Collabs'
    },
    {
      step: '03',
      title: '100% Institutional Trust',
      description: 'No commercial drop-shippers. No anonymous scam handles. Every account connects to an authentic university domain (.edu or college ID) so campus transactions remain safe and direct.',
      icon: Shield,
      tag: 'Verified Identity'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Headline */}
      <div className="max-w-3xl space-y-4 mb-16">
        <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
          [ 03 // WHAT IS JUGARR? ]
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-ink leading-tight">
          Campus life is full of useful things. Finding them shouldn’t be a full-time job.
        </h2>
        <p className="text-base sm:text-xl text-charcoal-600 font-normal leading-relaxed pt-2">
          Jugarr is the digital nervous system for university campuses—bringing students together to discover, exchange, collaborate, and grow with zero friction.
        </p>
      </div>

      {/* Blueprint Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.step}
              className="p-8 rounded-3xl border border-charcoal-300 bg-surface shadow-tactile flex flex-col justify-between group hover:-translate-y-1 hover:shadow-tactile-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background blueprint line */}
              <div className="absolute top-0 right-0 p-6 font-mono text-5xl font-black text-charcoal-100 group-hover:text-charcoal-200 transition-colors pointer-events-none">
                {pillar.step}
              </div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-charcoal-100 flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-charcoal-100 text-charcoal-700 font-medium">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal-200 flex items-center justify-between font-mono text-xs text-charcoal-500">
                <span>MODULE // {pillar.step}</span>
                <span className="text-ink font-semibold group-hover:text-accent flex items-center gap-1 transition-colors">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Pull Quote Banner */}
      <div className="mt-12 sm:mt-16 p-8 sm:p-12 rounded-3xl bg-ink text-white shadow-tactile-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-semibold tracking-widest">
            CAMPUS PHILOSOPHY
          </div>
          <p className="text-xl sm:text-3xl font-display font-bold leading-snug">
            "Everything a student needs is already sitting within a 1-kilometer radius of their hostel room."
          </p>
        </div>

        <button
          onClick={onOpenWaitlist}
          className="px-6 py-3.5 bg-white text-ink hover:bg-accent hover:text-white rounded-full font-display font-bold text-sm transition-all duration-200 shrink-0 flex items-center gap-2 shadow-sm"
        >
          <span>Get Early Access</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
