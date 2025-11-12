import React from 'react';

const GiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto mb-6 text-[#F0B429]"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;

export const GiftRegistrySection: React.FC = () => {
  return (
    <section id="gift-registry" className="py-20 md:py-28 bg-[#F5F1EE]">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <GiftIcon />
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#6D4C41]">Gift Registry</h2>
        <p className="text-gray-600 leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, should you wish to honour us with a gift, a monetary contribution towards our future together would be sincerely appreciated. A wishing well will be available at the reception for your convenience.
        </p>
      </div>
    </section>
  );
};