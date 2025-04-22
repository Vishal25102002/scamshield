// Home.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './Hero';
import AboutSection from './About';
import FeaturesSection from './Feature';
import FAQsSection from './FAQ';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <FAQsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;