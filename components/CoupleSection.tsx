
import React from 'react';
import { GROOM_FIRST_NAME, BRIDE_FIRST_NAME } from '../constants';

const SectionWrapper: React.FC<{ id: string; title: string; children: React.ReactNode; }> = ({ id, title, children }) => (
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
        <div className="relative h-96 lg:h-[500px] rounded-lg shadow-xl overflow-hidden group">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczNLo2DqlNrpA_6r11rm9ydpUZt6HHTGEtdc4wipgr9ut84V6HfK0MsPYCn33E0vNiRzANju_EUNv3uT7RJV_RIL7l-olHoB139bBk5EYQA3odFbpfcShC6pGxM-Ia6BTdsC68h92XPb6CgO36b-B01CTA=w971-h1295-s-no-gm?authuser=0" alt="The Couple" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-serif text-gray-700 mb-4">{`${GROOM_FIRST_NAME} & ${BRIDE_FIRST_NAME}`}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our story began quietly, almost without us realizing it. What started as a simple hangout with friends slowly became something we both looked forward to. A night of karaoke, shared jokes, and the comfort of each other’s company opened the door to a connection that felt natural and effortless. <br /><br /> From those small moments, our bond grew—first as strangers, then as friends, and eventually as two people who found something deeper than either of us expected. One shared moment turned into many, and little by little, we built a story that felt genuine and right.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Now, we're taking the next step in our beautiful journey together. We are overjoyed to invite you to witness our union and celebrate the beginning of our forever. Your presence will make our special day complete.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};