import React, { useState, useRef } from 'react';
import { AUTHENTIC_TESTIMONIAL } from '../data/agencyData';
import { Play, Pause, Volume2, VolumeX, CheckCircle2, ExternalLink, ShieldCheck, Film } from 'lucide-react';

export default function CommunityVoices({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="voices" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-charcoal-200">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>[ 07 // AUTHENTIC CLIENT FEEDBACK ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-ink">
            Real feedback from real work.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600">
            No fabricated written reviews or invented star ratings. Authentic client video recording from our work with Bandamart.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-charcoal-600 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>VERIFIED CLIENT ASSET</span>
        </div>
      </div>

      {/* Featured Video Testimonial Card */}
      <div className="rounded-3xl border border-charcoal-300 bg-surface shadow-tactile-lg overflow-hidden p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Video Player Column - 9:16 Vertical Reel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-charcoal-950 overflow-hidden aspect-[9/16] shadow-tactile group flex items-center justify-center border border-charcoal-800">
              {!hasError ? (
                <video
                  ref={videoRef}
                  src={AUTHENTIC_TESTIMONIAL.videoSrc}
                  poster={AUTHENTIC_TESTIMONIAL.poster}
                  preload="metadata"
                  playsInline
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setHasError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-8 text-center text-charcoal-300 font-mono text-xs space-y-3">
                  <Film className="w-10 h-10 mx-auto text-charcoal-500" />
                  <p>Bandamart Client Video Testimonial</p>
                  <p className="text-charcoal-500 text-[11px]">
                    Video file located at: {AUTHENTIC_TESTIMONIAL.videoSrc}
                  </p>
                </div>
              )}

              {/* Play / Pause Overlay Button */}
              {!hasError && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 hover:bg-accent text-white flex items-center justify-center transition-all duration-200 shadow-tactile ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100 scale-95' : 'opacity-100 scale-100'
                  }`}
                  aria-label={isPlaying ? 'Pause video' : 'Play client video'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>
              )}

              {/* Video Bottom Controls */}
              {!hasError && (
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent flex items-center justify-between font-mono text-xs text-white z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-charcoal-300">
                      BANDAMART // CLIENT VIDEO
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-white transition-colors"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Context & Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONFIRMED CLIENT PROJECT</span>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                {AUTHENTIC_TESTIMONIAL.businessName}
              </h3>
              <p className="font-mono text-xs text-charcoal-500 mt-1">
                {AUTHENTIC_TESTIMONIAL.projectContext}
              </p>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              "Bandamart is a local grocery delivery platform built as a smaller-scale alternative to quick-commerce experiences such as Blinkit, designed for local grocery delivery."
            </p>

            <div className="p-4 rounded-2xl bg-canvas-card border border-charcoal-200 text-xs font-mono text-charcoal-600 space-y-1.5">
              <div>
                <span className="font-bold text-charcoal-800">DEVELOPER:</span> Sagar Singh Rajawat (Jugarr)
              </div>
              <div>
                <span className="font-bold text-charcoal-800">SCOPE:</span> Full-Stack Web App, Catalog & Ordering
              </div>
              <div>
                <span className="font-bold text-charcoal-800">STATUS:</span> Live Production Deployment
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={AUTHENTIC_TESTIMONIAL.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-ink text-white hover:bg-accent rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Visit Bandamart.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-surface border border-charcoal-300 hover:bg-charcoal-100 text-ink rounded-full font-bold text-xs transition-colors"
              >
                <span>Discuss Your Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
