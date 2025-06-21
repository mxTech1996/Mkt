'use client';

import Benefits from '@/components/organisms/Benefits';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import IntroSection from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductCarousel from '@/components/organisms/Products';
import AgencyOfferings from '@/components/organisms/Services';
import TestimonialGrid from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <HeroSection />
      <IntroSection />
      <AgencyOfferings />
      <ProductCarousel />
      <Benefits />
      <TestimonialGrid />
      <Footer />
    </main>
  );
}
