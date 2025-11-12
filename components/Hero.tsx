
import React from 'react';
import { WEDDING_DATE, GROOM_FIRST_NAME, BRIDE_FIRST_NAME } from '../constants';
import { SaveTheDateButton } from './SaveTheDateButton';

export const Hero: React.FC = () => {
  const dateString = WEDDING_DATE.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 p-6">
        <h2 className="text-lg md:text-2xl font-light tracking-widest uppercase">
          We're getting married
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif my-4">
          {GROOM_FIRST_NAME} & {BRIDE_FIRST_NAME}
        </h1>
        <p className="text-xl md:text-3xl font-semibold tracking-wider border-y-2 border-white/50 py-3 my-6">
          {dateString}
        </p>
        <SaveTheDateButton />
      </div>
    </section>
  );
};