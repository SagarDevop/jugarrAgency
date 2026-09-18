'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, Sparkles, Calendar } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [service, setService] = useState('Web Platform');
  const [budget, setBudget] = useState('₹5L - ₹12L');
  const [timeline, setTimeline] = useState('Within 30 Days');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setBrief('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-surface border border-charcoal-300 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-100 hover:bg-charcoal-200 text-ink transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>COMMISSION A SPRINT // Q1 2026</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              Book a Strategy Call.
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
              Tell us what you're building. A senior founding engineer will review your brief within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Primary Capability Needed
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {['Web Platform', 'Mobile App', 'SEO Engine', 'Full Sprint'].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setService(s)}
                      className={`p-2.5 rounded-xl border text-center transition-colors ${
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

              {/* Budget Range */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Project Budget Bracket
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {['₹3L - ₹6L', '₹6L - ₹15L', '₹15L - ₹35L', '₹35L+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`p-2 rounded-xl border text-center transition-colors ${
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

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Thorne"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-mono"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Project Overview & Current URL (Optional)
                </label>
                <textarea
                  rows="3"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell us about your brand, current challenges, and target milestones..."
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-ink hover:bg-accent text-white font-display font-bold text-sm rounded-full transition-colors shadow-tactile flex items-center justify-center gap-2 mt-4"
              >
                <span>Request 15-Minute Strategy Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-ink">
              Strategy Session Requested!
            </h3>

            <p className="text-sm text-charcoal-600 max-w-sm mx-auto">
              Thanks <span className="font-bold text-ink">{name}</span>. A senior engineer will review your brief for <span className="font-semibold text-accent">{service}</span> and reach out at <span className="font-mono text-ink font-bold">{email}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-canvas-card border border-charcoal-200 font-mono text-xs text-left space-y-1 max-w-xs mx-auto">
              <div className="text-charcoal-500">QUEUE STATUS</div>
              <div className="text-base font-bold text-ink">SLOT RESERVED // Q1 SPRINT</div>
              <div className="text-[10px] text-emerald-600 font-semibold">
                ✓ ZERO SPAM • DIRECT SENIOR ENGINEER ACCESS
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-ink text-white hover:bg-charcoal-800 rounded-full font-display font-bold text-xs"
            >
              Back to Jugarr Agency
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
