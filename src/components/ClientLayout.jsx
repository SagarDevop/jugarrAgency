'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import Lenis from 'lenis';

import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import Footer from './Footer';
import BookingModal from './BookingModal';
import ScrollToTop from './ScrollToTop';

export const BookingContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll in browser
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <ScrollToTop />

      <div className="min-h-screen bg-canvas text-charcoal-900 selection:bg-accent selection:text-white relative flex flex-col justify-between">
        {/* Optional Boot Loading Screen */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {/* Floating Top Navigation */}
        <Navigation onOpenBooking={openBooking} />

        {/* Route Content */}
        <main className="flex-1">{children}</main>

        {/* Global Editorial Footer */}
        <Footer />

        {/* Strategy Session Booking Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </BookingContext.Provider>
  );
}
