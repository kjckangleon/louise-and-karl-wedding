
import React, { useState, useEffect } from 'react';
import { RAW_GUEST_DATA } from '../constants';
import Card from './Card';

/**
 * WeddingAppreciationWall Component
 * 
 * A standalone component that can be imported and inserted into any existing site.
 * It uses the butter yellow and sage green theme for Karl & Louise 2026.
 */
export const WeddingAppreciationWall: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  // Filter only guests who provided a real message (not empty, whitespace, or "none")
  const guestsWithMessages = RAW_GUEST_DATA.filter(
    g => g.message && g.message.trim() !== "" && g.message.toLowerCase().trim() !== "none"
  );
  
  const messageCount = guestsWithMessages.length;

  useEffect(() => {
    // Simulate loading for smoother entrance
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wedding-appreciation-root min-h-screen flex flex-col overflow-x-hidden font-sans bg-[#fdfdf0]" id="wedding-appreciation-wall">
      {/* Decorative Header */}
      <header className="relative py-16 md:py-24 px-4 text-center bg-[#FEF9C3] overflow-hidden">
        {/* Subtle decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#8da38b] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8da38b] opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="block uppercase tracking-[0.3em] text-[#5a6b58] text-sm mb-4 animate-fade-in">A Celebration of Love</span>
          <h1 className="text-5xl md:text-8xl text-[#5a6b58] mb-6 font-serif">
            Karl <span className="text-yellow-600">&</span> Louise
          </h1>
          <div className="h-px w-24 bg-[#8da38b] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-4">February 6, 2026</p>
          
          {/* Message Count Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-[#8da38b]/30 bg-white/50 text-[#5a6b58] text-xs tracking-widest uppercase mb-4 shadow-sm">
            <span className="font-bold mr-1">{messageCount}</span> Messages of Love
          </div>
          
          <p className="text-sm tracking-widest text-gray-400 uppercase">Words of Appreciation from Our Loved Ones</p>
        </div>
      </header>

      {/* Main Content: Collage Section */}
      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-[#8da38b] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#5a6b58] font-serif italic">Gathering heartfelt wishes...</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {guestsWithMessages.map((guest, index) => (
              <div key={`${guest.fullName}-${index}`} className="break-inside-avoid">
                <Card guest={guest} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-[#8da38b] py-12 px-4 text-white text-center">
        <div className="max-w-md mx-auto">
          <p className="font-serif italic text-2xl mb-4">"Two souls, one heart."</p>
          <div className="h-px w-12 bg-[#FEF9C3]/30 mx-auto mb-4"></div>
          <p className="text-sm opacity-80 tracking-widest uppercase mb-2">Thank you for being part of our journey</p>
          <p className="text-xs opacity-60">Karl & Louise 2026 • {messageCount} Shared Wishes</p>
        </div>
      </footer> */}

      {/* Background patterns and elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <svg 
            key={i} 
            className="absolute" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: '100px',
              height: '100px'
            }} 
            viewBox="0 0 24 24" fill="#5a6b58"
          >
             <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.17,20C12.42,20 16.31,17.26 18.06,13.26C19.14,10.79 19,8.13 17,8M12,10C12.72,10.15 13.4,10.43 14,10.82C13.56,12.72 12,14.28 10.1,14.72C9.72,14.11 9.44,13.43 9.3,12.71C10.05,12.11 11.03,11.83 12,12M13.25,16.75C12.17,17.43 10.9,17.82 9.5,17.82C9.07,17.82 8.65,17.77 8.24,17.68C8.75,16.27 10.13,15.15 11.8,14.82C12.44,15.65 13.25,16.33 14.18,16.82C13.88,16.82 13.57,16.8 13.25,16.75Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

// Default export for the current app mount point
const WeddingAppreciationWallSection: React.FC = () => {
  return <WeddingAppreciationWall />;
};

export default WeddingAppreciationWallSection;
