
import React from 'react';
import { GROOM_FIRST_NAME, BRIDE_FIRST_NAME } from '../constants';

const SectionWrapper: React.FC<{id: string; title: string; children: React.ReactNode;}> = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#6D4C41]">{title}</h2>
      {children}
    </div>
  </section>
);


export const CoupleSection: React.FC = () => {
  return (
    <SectionWrapper id="our-story" title="Our Story">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg shadow-xl overflow-hidden group">
          <img src={new URL('../images/couple.jpg', import.meta.url).href} />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-serif text-gray-700 mb-4">{`${GROOM_FIRST_NAME} & ${BRIDE_FIRST_NAME}`}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Through shared laughter, quiet moments, and countless adventures, our friendship blossomed into a deep and unwavering love. We discovered that home wasn't a place, but a feeling we found in each other.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Now, we're taking the next step in our beautiful journey together. We are overjoyed to invite you to witness our union and celebrate the beginning of our forever. Your presence will make our special day complete.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};