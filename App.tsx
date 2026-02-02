
import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { CoupleSection } from './components/CoupleSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { DressCodeSection } from './components/DressCodeSection';
import { GiftRegistrySection } from './components/GiftRegistrySection';
import { RSVPSection } from './components/RSVPSection';
import { EntourageSection } from './components/EntourageSection';
import { Footer } from './components/Footer';
import WeddingAppreciationWallSection from './components/AppreciationSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDF8F5] text-gray-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <CoupleSection />
        <EventDetailsSection />
        <DressCodeSection />
        <GiftRegistrySection />
        {/* <RSVPSection /> */} 
        <EntourageSection />
        <WeddingAppreciationWallSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;