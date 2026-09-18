'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Terminal,
  Film,
  RotateCcw,
  Smartphone,
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

  // Founder Video State
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

  // Real Work Proof Highlights
  const workProofHighlights = [
    {
      id: 1,
      image: '/assets/projects/bandamart/grocery_hero.png',
      title: 'Bandamart Grocery Storefront',
      category: 'Client E-Commerce',
      tag: 'React • Node.js',
      description: 'Local grocery delivery platform engineered with catalog browsing, shopping cart workflows, and responsive checkout.',
      url: 'https://bandamart.com',
    },
    {
      id: 2,
      image: '/assets/projects/4lotus/after.png',
      title: '4 Lotus Interior Redesign',
      category: 'Client Renovation',
      tag: 'Next.js 15 • Tailwind',
      description: 'Complete UI/UX renovation of legacy interior design website using existing business content and portfolio data.',
      url: 'https://4lotusinterior.in',
    },
    {
      id: 3,
      image: '/assets/projects/4lotus/before.png',
      title: 'Pre-Renovation Project State',
      category: 'Renovation Comparison',
      tag: 'Before / After Proof',
      description: 'Original site state documented before executing modern typography, layout restructuring, and component architecture.',
      url: 'https://4lotusinterior.in',
    },
    {
      id: 4,
      image: '/assets/projects/dhobidrop/hero.png',
      title: 'DhobiDrop Service Platform',
      category: 'Personal Project',
      tag: 'React • PWA',
      description: 'On-demand laundry and dry-cleaning scheduling interface exploring service tier selection and responsive time slots.',
      url: '#',
    },
    {
      id: 5,
      image: '/assets/projects/bandamart/vegetables_basket.png',
      title: 'Produce & Catalog Assets',
      category: 'Product Experience',
      tag: 'E-Commerce UX',
      description: 'Visual asset organization and categorization for grocery categories and fresh produce ordering.',
      url: 'https://bandamart.com',
    },
    {
      id: 6,
      image: '/assets/projects/4lotus/luxury_lounge_finished.jpg',
      title: 'Residential Interior Showcase',
      category: 'Gallery Architecture',
      tag: 'Next.js Image Optim',
      description: 'Responsive luxury interior gallery layout designed for high-resolution photography without layout shift.',
      url: 'https://4lotusinterior.in',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
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

      {/* Header Section with Authentic Founder Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 pb-14 border-b border-charcoal-300">
        {/* Profile Image Column */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden bg-charcoal-950 border border-charcoal-400 shadow-tactile-lg group flex items-center justify-center">
            <img
              src={FOUNDER_INFO.photo}
              alt="Sagar Singh Rajawat — Founder & Developer of Jugarr"
              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
            />
            {/* Overlay Status Pill */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 p-2.5 rounded-xl bg-charcoal-950/85 backdrop-blur-md border border-charcoal-800 text-white font-mono text-xs flex items-center justify-between shadow-tactile">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-[11px] text-white">SAGAR S. RAJAWAT</span>
              </div>
              <span className="text-charcoal-400 text-[10px]">FOUNDER</span>
            </div>
          </div>
        </div>

        {/* Bio Column */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent font-bold tracking-widest uppercase">
            <span>[ ABOUT ME // FOUNDER & DEVELOPER ]</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-ink leading-[1.08]">
            Hi, I'm Sagar — <br />
            <span className="text-charcoal-400">founder and developer behind Jugarr.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 font-normal leading-relaxed pt-2">
            I design and build modern websites, e-commerce experiences, and custom web applications for businesses. I focus on combining practical functionality with thoughtful UI/UX to create digital products that are useful, clear, and built around real requirements.
          </p>

          {/* Social Links & Handles */}
          <div className="flex flex-wrap items-center gap-3 pt-3 font-mono text-xs">
            <a
              href={FOUNDER_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-surface border border-charcoal-300 text-ink hover:bg-ink hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>Instagram</span>
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
          </div>
        </div>
      </div>

      {/* FOUNDER VIDEOS SECTION (Using authentic videos from founder folder) */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 border-b border-charcoal-200 gap-3">
          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AUTHENTIC FOUNDER MEDIA // DIRECT RECORDINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mt-1">
              Founder Video Showcase
            </h2>
          </div>

          {/* Video Selector Tabs */}
          <div className="flex items-center gap-2 bg-charcoal-100 p-1 rounded-2xl border border-charcoal-200">
            {founderVideos.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => setActiveVideoIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
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

        {/* Video Player Card */}
        <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player Box */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl bg-charcoal-950 overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-tactile group flex items-center justify-center">
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

                {/* CRT Scanline Overlay */}
                <div className="crt-screen absolute inset-0 pointer-events-none opacity-30" />

                {/* Big Play / Pause Overlay Button */}
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

                {/* Bottom Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent flex items-center justify-between font-mono text-xs text-white z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-charcoal-300">
                      {currentVideo?.badge || 'FOUNDER VIDEO'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={restartVideo}
                      className="p-1.5 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-white transition-colors"
                      aria-label="Restart video"
                      title="Restart"
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
                      className="p-1.5 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-white transition-colors"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Context Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-100 text-charcoal-800 font-mono text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>AUTHENTIC RECORDING</span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                  {currentVideo?.title}
                </h3>
                <p className="font-mono text-xs text-charcoal-500 mt-1">
                  {currentVideo?.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-canvas-card border border-charcoal-200 text-xs font-mono text-charcoal-600 space-y-2">
                <div>
                  <span className="font-bold text-charcoal-800">SPEAKER:</span> Sagar Singh Rajawat
                </div>
                <div>
                  <span className="font-bold text-charcoal-800">ROLE:</span> Founder & Developer, Jugarr
                </div>
                <div>
                  <span className="font-bold text-charcoal-800">SOURCE:</span> /public/assets/founder/
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={toggleVideo}
                  className="px-5 py-2.5 bg-ink text-white hover:bg-accent rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
                </button>

                <button
                  onClick={() => setActiveVideoIndex(activeVideoIndex === 0 ? 1 : 0)}
                  className="px-4 py-2.5 bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-ink rounded-full font-bold text-xs transition-colors text-center"
                >
                  Switch to Video {activeVideoIndex === 0 ? '02' : '01'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OPTION 1: OFFICIAL INSTAGRAM REELS INTEGRATION */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-charcoal-200 gap-3">
          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase flex items-center gap-2">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>INSTAGRAM OPTION 1 // DIRECT EMBED FEED</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink mt-1">
              Instagram Reels & Development Journal
            </h2>
          </div>

          <a
            href={FOUNDER_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-charcoal-700 hover:text-accent font-semibold flex items-center gap-1.5 transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>Follow {INSTAGRAM_CONFIG.handle} on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Reel Cards Grid (Option 1 Official Integration) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_CONFIG.reels.map((reel) => (
            <div
              key={reel.id}
              className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile overflow-hidden flex flex-col justify-between hover:shadow-tactile-lg transition-shadow"
            >
              {/* Card Header */}
              <div className="p-4 bg-charcoal-50 border-b border-charcoal-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shrink-0">
                    <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4 text-pink-600" />
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-ink">
                      {INSTAGRAM_CONFIG.handle}
                    </div>
                    <div className="font-mono text-[10px] text-charcoal-500">
                      Official Reel • {reel.date}
                    </div>
                  </div>
                </div>

                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-white border border-charcoal-300 hover:border-accent text-ink hover:text-accent rounded-full font-mono text-[10px] font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Open on IG</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Reel Preview / Official Embed Frame */}
              <div className="relative w-full h-[480px] bg-charcoal-950 flex items-center justify-center overflow-hidden">
                {/* Official Instagram Embed iframe */}
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

              {/* Reel Content & Project Context */}
              <div className="p-4 bg-surface flex flex-col justify-between flex-1 border-t border-charcoal-200">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-pink-600 uppercase tracking-wide">
                      AUTHENTIC WORK LOG
                    </span>
                    <span className="font-mono text-[10px] text-charcoal-500">
                      {reel.date}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-sm text-ink leading-snug">
                    {reel.title}
                  </h4>

                  <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                    {reel.caption}
                  </p>
                </div>

                {/* Reel Footer: Tags & Direct Action */}
                <div className="pt-3 mt-3 border-t border-charcoal-100 flex items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex flex-wrap gap-1 overflow-hidden max-h-5">
                    {reel.tags.map((tag, idx) => (
                      <span key={idx} className="text-charcoal-500 text-[10px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 font-bold text-[11px] shrink-0"
                  >
                    <span>Watch Reel</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REAL WORK PROOF & PROJECT SNAPSHOTS GALLERY */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-8 border-b border-charcoal-200">
          <div>
            <div className="font-mono text-xs text-accent font-bold uppercase">
              PROJECT PROOF // DELIVERED WORK & ASSETS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink mt-1">
              Demonstrable Builds & Client Deliverables
            </h2>
          </div>

          <span className="mt-2 sm:mt-0 font-mono text-xs text-charcoal-500">
            Real codebases, real screenshots
          </span>
        </div>

        {/* 6-Grid Authentic Work Proof Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workProofHighlights.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-charcoal-300 bg-surface shadow-tactile hover:shadow-tactile-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-charcoal-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-ink/85 text-white font-mono text-[10px] font-bold uppercase backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] font-bold text-accent uppercase mb-1">
                    {item.category}
                  </div>
                  <h4 className="font-display font-bold text-base text-ink mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-charcoal-200 flex items-center justify-between font-mono text-xs">
                  {item.url !== '#' ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-charcoal-400">Self-Initiated</span>
                  )}
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Approach & Values */}
      <div className="p-8 sm:p-14 rounded-4xl bg-ink text-white shadow-tactile-lg border border-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            HOW I WORK WITH CLIENTS
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight leading-snug">
            "A website should be clear, fast, and built around real requirements—not bloated with unnecessary code."
          </h3>

          <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
            When you hire Jugarr, you work directly with me. I don't use multi-layered agency processes or outsourced contractors. From initial requirement discussions to production deployment, you have a direct line to the person writing your code.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleBooking}
              className="px-7 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-display font-bold text-sm transition-all flex items-center gap-2 shadow-md"
            >
              <span>Work Directly with Sagar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
