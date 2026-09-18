'use client';

import React from 'react';
import { useBooking } from '../components/ClientLayout';
import Hero from '../components/Hero';
import AgencyMarquee from '../components/AgencyMarquee';
import WorkShowcase from '../components/WorkShowcase';
import ServicesSection from '../components/ServicesSection';
import ProblemSection from '../components/ProblemSection';
import ProcessSection from '../components/ProcessSection';
import MetricsSection from '../components/MetricsSection';
import EasterEggSection from '../components/EasterEggSection';
import CommunityVoices from '../components/CommunityVoices';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onOpenBooking }) {
  const { openBooking } = useBooking();
  const handleBooking = onOpenBooking || openBooking;
  return (
    <div>
      <Hero onOpenBooking={handleBooking} />
      <AgencyMarquee />
      <WorkShowcase onOpenBooking={handleBooking} />
      <ServicesSection onOpenBooking={handleBooking} />
      <ProblemSection />
      <ProcessSection onOpenBooking={handleBooking} />
      <MetricsSection onOpenBooking={handleBooking} />
      <EasterEggSection />
      <CommunityVoices onOpenBooking={handleBooking} />
      <FAQSection />
      <FinalCTA onOpenBooking={handleBooking} />
    </div>
  );
}
