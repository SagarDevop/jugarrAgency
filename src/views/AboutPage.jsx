'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Terminal,
  Zap,
  Code2,
  Lock,
  Layers,
} from 'lucide-react';
import { FOUNDER_INFO, INSTAGRAM_CONFIG } from '../data/agencyData';
import { useBooking } from '../components/ClientLayout';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function AboutPage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;

  // Founder Video Player State
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const founderVideos = FOUNDER_INFO.videos || [];
  const currentVideo = founderVideos[activeVideoIndex] || founderVideos[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      videoRef.current.load();
    }
  }, [activeVideoIndex]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="pt-28 sm:pt-40 pb-32 px-4 sm:px-8 max-w-6xl mx-auto space-y-32 sm:space-y-44">
      {/* Inject Google Person JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: FOUNDER_INFO.name,
            jobTitle: FOUNDER_INFO.role,
            worksFor: {
              '@type': 'Organization',
              name: FOUNDER_INFO.brand,
              url: FOUNDER_INFO.domain,
            },
            url: `${FOUNDER_INFO.domain}/about`,
            sameAs: [FOUNDER_INFO.instagram, FOUNDER_INFO.linkedin, FOUNDER_INFO.github],
            knowsAbout: [
              'Custom Web Development',
              'E-commerce Websites',
              'Full-stack Web Applications',
              'UI/UX Design',
              'React and Next.js',
              'Node.js and MongoDB',
            ],
          }),
        }}
      />

      {/* =========================================================
          PROLOGUE: THE ENGINEER BEHIND THE STUDIO
          ========================================================= */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Authentic Portrait (Natural Organic Framing, No Boxy Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden bg-charcoal-950 shadow-tactile-lg group flex items-center justify-center border border-charcoal-800">
              <img
                src={FOUNDER_INFO.photo}
                alt="Sagar Singh Rajawat — Founder & Developer of Jugarr"
                className="w-full h-full object-cover object-top opacity-95 group-hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />

              {/* Minimal Status Capsule */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-charcoal-950/80 backdrop-blur-md border border-charcoal-800/80 text-white font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-[11px] tracking-wide">SAGAR SINGH RAJAWAT</span>
                </div>
                <span className="text-charcoal-400 text-[10px] uppercase">Founder & Dev</span>
              </div>
            </div>
          </div>

          {/* Narrative Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>[ ABOUT SAGAR // THE FOUNDER PERSPECTIVE ]</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-ink leading-[1.08]">
              I don’t sell templates. <br />
              <span className="text-charcoal-400 font-normal">
                I build the digital foundation your business actually needs.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              I started Jugarr with a straightforward realization: businesses were spending good money on websites that took months to build, only to receive sluggish, template-stuffed sites that broke during basic plugin updates.
            </p>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              I wanted to build differently. As a hands-on developer, I take full personal accountability for every codebase, database model, and interaction state. No offshore passing, no account managers in the middle, and no generic site-builder bloat.
            </p>

            {/* Social Links Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs">
              <a
                href={FOUNDER_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-surface border border-charcoal-300 text-ink hover:bg-ink hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>@sgr_here</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-surface border border-charcoal-300 text-ink hover:bg-ink hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-surface border border-charcoal-300 text-ink hover:bg-ink hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <span className="text-charcoal-400">•</span>

              <span className="text-charcoal-600 font-semibold">
                Direct: <span className="text-ink font-bold">contact@jugarr.in</span>
              </span>
            </div>
          </div>

        </div>

        {/* Minimalist 4-Pillar Principles Strip (Thin Lines, No Heavy Boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-charcoal-300">
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">01 // CRAFT</div>
            <div className="font-display font-extrabold text-2xl text-ink">Hand-Coded</div>
            <div className="text-xs text-charcoal-500 font-mono">Next.js 16 + React 19</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">02 // INTEGRITY</div>
            <div className="font-display font-extrabold text-2xl text-emerald-600">Zero Middlemen</div>
            <div className="text-xs text-charcoal-500 font-mono">1-on-1 with Sagar</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">03 // PROMISE</div>
            <div className="font-display font-extrabold text-2xl text-ink">100% Owned</div>
            <div className="text-xs text-charcoal-500 font-mono">Full Git repo handover</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs text-accent font-bold">04 // RESULTS</div>
            <div className="font-display font-extrabold text-2xl text-ink">&lt; 0.8s LCP</div>
            <div className="text-xs text-charcoal-500 font-mono">Real-world speed</div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 01: THE MILESTONES & TRANSFORMATION
          ========================================================= */}
      <section className="space-y-12 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            CHAPTER 01 // THE JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            From curiosity to full production engineering.
          </h2>
        </div>

        {/* Minimal Timeline (Clean Text & Steppers, No Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          <div className="space-y-3 pb-6 border-b md:border-b-0 md:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-3xl font-extrabold text-accent">2024</div>
            <h3 className="font-display font-extrabold text-xl text-ink">The Foundations</h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Deep dive into full-stack JavaScript: React component state, Node.js server architectures, Express REST controllers, and MongoDB data modeling. Building self-initiated prototypes to explore UX friction points.
            </p>
          </div>

          <div className="space-y-3 pb-6 border-b md:border-b-0 md:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-3xl font-extrabold text-accent">2025</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Real Production Client Work</h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Delivering verified systems: architecting Bandamart's neighborhood quick-commerce storefront to eliminate aggregator cuts, and completely renovating 4 Lotus Interior into a high-credibility editorial experience.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-3xl font-extrabold text-accent">2026</div>
            <h3 className="font-display font-extrabold text-xl text-ink">The Next.js 16 Studio</h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Scaling Jugarr into a dedicated web development studio: deploying sub-second Next.js 16 architectures, server-rendered SEO schemas, and working 1-on-1 with founders on tailored digital products.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 02: THE STUDIO RECORDINGS (FOUNDER VIDEOS)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CHAPTER 02 // DIRECT AUDIOVISUAL ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Inside the developer's mindset.
            </h2>
            <p className="text-base text-charcoal-600">
              Unfiltered video recordings detailing my approach to software, client collaboration, and engineering execution.
            </p>
          </div>

          {/* Minimalist Video Tab Switcher */}
          <div className="flex items-center gap-2 bg-charcoal-100 p-1.5 rounded-full border border-charcoal-300 w-fit">
            {founderVideos.map((vid, idx) => (
              <button
                key={vid.id}
                type="button"
                onClick={() => setActiveVideoIndex(idx)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
                  activeVideoIndex === idx
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-charcoal-700 hover:text-ink'
                }`}
              >
                {vid.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Widescreen Video Player (No Box inside Box) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group">
          {currentVideo && (
            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              playsInline
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain bg-charcoal-950"
            />
          )}

          {/* Subtle CRT Overlay */}
          <div className="crt-screen absolute inset-0 pointer-events-none opacity-20" />

          {/* Play / Pause Center Trigger */}
          <button
            type="button"
            onClick={toggleVideo}
            className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 hover:bg-accent text-white flex items-center justify-center transition-all duration-200 shadow-tactile ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 scale-95' : 'opacity-100 scale-100'
            }`}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Bottom Floating Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent flex items-center justify-between font-mono text-xs text-white z-20">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-xs text-charcoal-200">
                {currentVideo?.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={restartVideo}
                className="p-2 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-white transition-colors"
                title="Restart"
                aria-label="Restart video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-2 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Video Narrative Context */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-charcoal-500 pt-1">
          <div>
            <span className="font-bold text-ink">SPEAKER:</span> Sagar Singh Rajawat • Founder & Developer, Jugarr
          </div>
          <button
            type="button"
            onClick={() => setActiveVideoIndex(activeVideoIndex === 0 ? 1 : 0)}
            className="text-accent font-bold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Switch to {activeVideoIndex === 0 ? 'Video 02 (Development Session)' : 'Video 01 (Founder Intro)'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>


      {/* =========================================================
          CHAPTER 03: THE WORK JOURNAL (INSTAGRAM INTEGRATION)
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CHAPTER 03 // THE DEVELOPMENT JOURNAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
              Follow the journey on Instagram.
            </h2>
            <p className="text-base text-charcoal-600">
              Direct coding reels, behind-the-scenes engineering breakdowns, and project milestones shared on @sgr_here.
            </p>
          </div>

          <a
            href={FOUNDER_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink hover:text-accent font-bold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>Visit @sgr_here on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Seamless Instagram Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTAGRAM_CONFIG.reels.map((reel) => (
            <div key={reel.id} className="space-y-4">
              {/* Embed Container (Clean, Minimal Frame) */}
              <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-800 shadow-tactile flex items-center justify-center">
                <iframe
                  src={`${reel.embedUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
                  title={reel.title}
                  className="w-full h-full border-0"
                  allowTransparency="true"
                  allow="encrypted-media; picture-in-picture"
                  scrolling="no"
                  loading="lazy"
                />
              </div>

              {/* Reel Caption & Narrative */}
              <div className="space-y-1.5 pt-1 font-mono">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="font-bold text-ink">{reel.title}</span>
                  <span>{reel.date}</span>
                </div>
                <p className="text-xs text-charcoal-600 font-sans line-clamp-2 leading-relaxed">
                  {reel.caption}
                </p>
                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline text-xs font-bold pt-1"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================
          CHAPTER 04: THE FOUR PILLARS OF INTEGRITY
          ========================================================= */}
      <section className="space-y-10 border-t border-charcoal-300 pt-16 sm:pt-24">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            CHAPTER 04 // THE CODE OF ETHICS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            How I build with every client.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          <div className="space-y-3 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-xs text-accent font-bold">01 // DIRECT ACCESS</div>
            <h3 className="font-display font-extrabold text-xl text-ink">You Talk to the Builder</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              No junior devs, no customer service middlemen. You brainstorm directly with Sagar, and the code is written directly by Sagar.
            </p>
          </div>

          <div className="space-y-3 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-xs text-accent font-bold">02 // DETERMINISTIC SPEED</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Zero Template Bloat</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Sub-second page loads, zero Cumulative Layout Shift, and hand-tuned responsive CSS that feels instant on smartphones.
            </p>
          </div>

          <div className="space-y-3 pb-6 border-b lg:border-b-0 lg:border-r border-charcoal-300 pr-6">
            <div className="font-mono text-xs text-accent font-bold">03 // INDEPENDENCE</div>
            <h3 className="font-display font-extrabold text-xl text-ink">100% Code Handover</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              You own your source code, database architecture, and domains completely. No proprietary platform monthly rent or hostage data.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-accent font-bold">04 // TRANSPARENCY</div>
            <h3 className="font-display font-extrabold text-xl text-ink">Weekly Sprints</h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Transparent milestones from Day 1. You test live interactive progress in real browsers, with continuous feedback and delivery.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          EPILOGUE: START A CONVERSATION
          ========================================================= */}
      <section className="border-t border-charcoal-300 pt-16 sm:pt-24 pb-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FOUNDER CONSULTATION SESSIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Let's discuss what you want to build.
          </h2>

          <p className="text-base sm:text-xl text-charcoal-700 font-normal leading-relaxed">
            Whether you need a custom e-commerce storefront, an editorial website renovation, or a bespoke web application—I'd be glad to discuss your requirements and outline a realistic sprint.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={handleBooking}
              className="px-8 py-4 bg-ink text-white hover:bg-accent rounded-full font-display font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-tactile"
            >
              <span>Book Strategy Session with Sagar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-surface border border-charcoal-300 hover:border-charcoal-500 text-ink rounded-full font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Direct Intake Form</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
