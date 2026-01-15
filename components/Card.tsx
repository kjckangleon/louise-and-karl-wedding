
import React from 'react';
import { GuestMessage } from '../types';

interface CardProps {
  guest: GuestMessage;
}

const Card: React.FC<CardProps> = ({ guest }) => {
  // Variations for the collage look
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
  const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
  
  if (!guest.message || guest.message.trim() === "") return null;

  return (
    <div className={`bg-white p-6 shadow-md rounded-sm border-t-4 border-sage transition-all hover:scale-105 hover:shadow-xl ${randomRotation} m-2`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-yellow-200 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 17.2091 21.2261 19 19.017 19H17.017C15.356 19 14.017 20.3431 14.017 22L14.017 21ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464718 13 0.017 12.5523 0.017 12V9C0.017 6.79086 1.80786 5 4.017 5H9.017C11.2261 5 13.017 6.79086 13.017 9V15C13.017 17.2091 11.2261 19 9.017 19H7.017C5.356 19 4.017 20.3431 4.017 22L4.017 21Z" />
          </svg>
          <p className="text-gray-700 leading-relaxed italic text-lg serif">
            "{guest.message}"
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="font-semibold text-sage uppercase tracking-wider text-xs">{guest.fullName}</span>
          <span className="text-gray-400 text-[10px]">{new Date(guest.timestamp).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
