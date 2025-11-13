import React, { useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import OurServices from '../components/sections/OurServices';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CallToAction from '../components/sections/CallToAction';
import { properties } from '../data/properties';


const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Inmo-visión | Tu hogar ideal';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedProperties properties={properties} />
      <OurServices />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;