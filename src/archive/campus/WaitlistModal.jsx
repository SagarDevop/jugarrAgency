'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [campus, setCampus] = useState('IIT Bombay');
  const [customCampus, setCustomCampus] = useState('');
  const [role, setRole] = useState('Undergraduate Student');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-surface border border-charcoal-300 shadow-2xl p-6 sm:p-8 overflow-hidden">
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
              <span>EARLY ACCESS WAITLIST</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
              Claim your campus handle.
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
              Join the priority cohort. We unlock nodes once 100 students from your university verify.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campus Select */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Select University
                </label>
                <select
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-sans"
                >
                  <option value="IIT Bombay">IIT Bombay (Powai)</option>
                  <option value="BITS Pilani">BITS Pilani (Pilani / Goa / Hyd)</option>
                  <option value="Delhi University">Delhi University (North / South)</option>
                  <option value="IIT Delhi">IIT Delhi (Hauz Khas)</option>
                  <option value="IIIT Hyderabad">IIIT Hyderabad</option>
                  <option value="NIT Trichy">NIT Trichy</option>
                  <option value="Other">Other University</option>
                </select>
              </div>

              {campus === 'Other' && (
                <div>
                  <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                    Your College Name
                  </label>
                  <input
                    type="text"
                    required
                    value={customCampus}
                    onChange={(e) => setCustomCampus(e.target.value)}
                    placeholder="e.g. Manipal Institute of Technology"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent"
                  />
                </div>
              )}

              {/* Student Role */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Your Role
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {['Undergrad Student', 'Postgrad / PhD', 'Campus Club Lead', 'Hostel Warden / TA'].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`p-2.5 rounded-xl border text-center transition-colors ${
                        role === r
                          ? 'bg-ink text-white border-ink font-bold'
                          : 'bg-canvas text-charcoal-700 border-charcoal-300 hover:bg-charcoal-100'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* College Email */}
              <div>
                <label className="block font-mono text-xs font-bold text-charcoal-700 uppercase mb-1.5">
                  Institutional Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@campus.edu or college domain"
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-charcoal-300 text-sm text-ink focus:outline-none focus:border-accent font-mono"
                />
                <span className="text-[11px] font-mono text-charcoal-400 mt-1 block">
                  🔒 We never share your email with third parties.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-ink hover:bg-accent text-white font-display font-bold text-sm rounded-full transition-colors shadow-tactile flex items-center justify-center gap-2 mt-4"
              >
                <span>Request Early Access Invite</span>
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
              You're in the queue!
            </h3>

            <p className="text-sm text-charcoal-600 max-w-sm mx-auto">
              We added <span className="font-mono font-bold text-ink">{email}</span> to the <span className="font-semibold text-accent">{campus === 'Other' ? customCampus : campus}</span> priority cohort.
            </p>

            <div className="p-4 rounded-2xl bg-canvas-card border border-charcoal-200 font-mono text-xs text-left space-y-1 max-w-xs mx-auto">
              <div className="text-charcoal-500">QUEUE POSITION</div>
              <div className="text-xl font-bold text-ink">#048 OF 100 REQUIRED</div>
              <div className="text-[10px] text-emerald-600 font-semibold">
                ✓ 52 MORE STUDENTS NEEDED TO UNLOCK NODE
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-ink text-white hover:bg-charcoal-800 rounded-full font-display font-bold text-xs"
            >
              Back to Jugarr
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
