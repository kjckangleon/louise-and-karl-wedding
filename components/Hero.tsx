
import React, { useState, useEffect } from 'react';
import { WEDDING_DATE, GROOM_FIRST_NAME, BRIDE_FIRST_NAME } from '../constants';
import { SaveTheDateButton } from './SaveTheDateButton';

const calculateDaysLeft = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weddingDay = new Date(WEDDING_DATE);
  weddingDay.setHours(0, 0, 0, 0);
  
  const differenceInTime = weddingDay.getTime() - today.getTime();
  
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
  return differenceInDays;
};

export const Hero: React.FC = () => {
  const dateString = WEDDING_DATE.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    // Update once an hour to catch day change
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60); 

    return () => clearInterval(timer);
  }, []);

  const renderCountdown = () => {
    if (daysLeft > 0) {
      return (
        <p className="text-lg md:text-xl font-light mt-4">
          {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to go before the wedding
        </p>
      );
    }
  
    if (daysLeft === 0) {
      return <p className="text-lg md:text-xl font-light mt-4">Today is the day!</p>;
    }
    
    return null;
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${new URL('../images/banner.jpg', import.meta.url).href})` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h2 className="text-lg md:text-2xl font-light tracking-widest uppercase">
          We're getting married
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif my-4">
          {GROOM_FIRST_NAME} & {BRIDE_FIRST_NAME}
        </h1>
        <p className="text-xl md:text-3xl font-semibold tracking-wider border-y-2 border-white/50 py-3 my-6">
          {dateString}
        </p>
        {renderCountdown()}
        
        <a 
          href="#rsvp" 
          className="mt-8 px-10 py-4 bg-white text-[#6D4C41] font-bold text-lg rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 duration-300 animate-bounce hover:animate-none"
        >
          RSVP NOW
        </a>

        <SaveTheDateButton />
      </div>
    </section>
  );
};
