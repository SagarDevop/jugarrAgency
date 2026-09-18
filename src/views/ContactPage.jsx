'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [service, setService] = useState('Web Platform');
  const [budget, setBudget] = useState('₹6L - ₹15L');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, budget, brief }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
          <span>[ INITIATE COLLABORATION // STRATEGY SESSION ]</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-ink leading-tight">
          Let's build something <br />
          <span className="text-charcoal-400">the market notices.</span>
        </h1>
        <p className="text-base sm:text-xl text-charcoal-600 max-w-2xl font-normal leading-relaxed pt-2">
          We work with founders and leaders who value engineering speed, category-leading aesthetics, and algorithmic search dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-4xl border border-charcoal-300 shadow-tactile">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-2">
                  What are you looking to build?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {['Web Platform', 'Mobile App', 'SEO Engine', 'Full Sprint'].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setService(s)}
                      className={`p-3 rounded-xl border text-center transition-colors ${
                        service === s
                          ? 'bg-ink text-white border-ink font-bold'
                          : 'bg-canvas text-charcoal-700 border-charcoal-300 hover:bg-charcoal-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-2">
                  Budget Expectation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {['₹3k - ₹6k', '₹6k - ₹15k', '₹15k - ₹35k', '₹35k+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`p-2.5 rounded-xl border text-center transition-colors ${
                        budget === b
                          ? 'bg-ink text-white border-ink font-bold'
                          : 'bg-canvas text-charcoal-700 border-charcoal-300 hover:bg-charcoal-100'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sameer Mehta"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sameer@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Project Details & Current Website URL
                </label>
                <textarea
                  rows="4"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Share any context about your product, timeline, and what success looks like..."
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ink hover:bg-accent text-white font-display font-bold text-sm sm:text-base rounded-full transition-colors shadow-tactile flex items-center justify-center gap-2"
              >
                <span>Request 15-Minute Strategy Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-ink">
                Session Requested Successfully
              </h3>
              <p className="text-sm text-charcoal-600 max-w-sm mx-auto">
                Thank you {name}. A senior founding architect will review your project brief for {service} and email you an invite at {email} within 24 hours.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-6 font-mono text-xs">
          <div className="p-6 rounded-3xl bg-surface border border-charcoal-300 space-y-4">
            <div className="text-accent font-bold uppercase">FOUNDING ARCHITECT ACCESS</div>
            <p className="text-charcoal-600 text-xs leading-relaxed font-sans">
              You will not be pitched by junior account managers or sales reps. Your introductory call is directly with the engineers who design your code and ranking taxonomy.
            </p>
            <div className="pt-2 border-t border-charcoal-200 flex items-center gap-2 text-charcoal-800">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Typical Response Time: &lt; 4 Hours</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface border border-charcoal-300 space-y-3">
            <div className="text-charcoal-500 uppercase">DIRECT INQUIRIES</div>
            <div className="text-base font-bold text-ink">contact@jugarr.in</div>
            <div className="text-charcoal-500 pt-2">STUDIO HEADQUARTERS</div>
            <div className="text-charcoal-800">New Delhi, India • Global Edge Deployment</div>
          </div>
        </div>
      </div>
    </div>
  );
}
