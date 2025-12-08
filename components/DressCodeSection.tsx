
import React from 'react';


const ColorSwatch: React.FC<{ color: string, name: string }> = ({ color, name }) => (
  <div className="flex flex-col items-center">
    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md border-4 border-white`} style={{ backgroundColor: color }}></div>
    <span className="text-xs mt-2 text-gray-600 capitalize">{name}</span>
  </div>
);

export const DressCodeSection: React.FC = () => {
  const colors = [
    { name: 'butter yellow', hex: '#FCE883' },
    { name: 'cream', hex: '#FCECD4' },
    { name: 'brown', hex: '#5D4037' },
    { name: 'forest green', hex: '#228B22' },
  ];

  return (
    <section id="dress-code" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#6D4C41]">Attire</h2>
        <p className="text-2xl font-serif text-gray-500 mb-8">Formal Attire</p>
        
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <img 
                src={new URL('../images/ladies-attire.jpg', import.meta.url).href}
                alt="Women's Attire Moodboard" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <p className="text-center mt-2 text-gray-600 font-serif">For the Ladies</p>
            </div>
            <div>
              <img 
                src={new URL('../images/mens-attire.jpg', import.meta.url).href} 
                alt="Men's Attire Moodboard" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <p className="text-center mt-2 text-gray-600 font-serif">For the Gentlemen</p>
            </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          We kindly request your presence in formal wear. We'd be delighted if you would join us by dressing in shades inspired by our wedding color palette. Please refrain from wearing white.
        </p>
        <div className="flex justify-center items-center space-x-4 md:space-x-6">
          {colors.map(color => <ColorSwatch key={color.name} color={color.hex} name={color.name} />)}
        </div>
      </div>
    </section>
  );
};
