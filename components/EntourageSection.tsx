
import React from 'react';
import { 
    PARENTS,
    PRINCIPAL_SPONSORS,
    SECONDARY_SPONSORS,
    BEST_WOMAN,
    MAN_OF_HONOR,
    GROOMSMEN,
    BRIDESMAIDS,
    CEREMONIAL_ROLES,
    OFFERTORY,
 } from '../constants';

const addSponsorPrefix = (name: string, isMale: boolean): string => {
    if (name.startsWith('Dr ')) return name;
    return isMale ? `Mr. ${name}` : `Ms. ${name}`;
};

const getLastName = (name: string): string => name.split(' ').pop() || name;

export const EntourageSection: React.FC = () => {
  return (
    <section id="entourage" className="py-20 md:py-28 bg-[#F5F1EE]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-[#6D4C41]">Wedding Entourage</h2>
        
        {/* Parents */}
        <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-serif text-gray-800 mb-8">Parents of the Couple</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-3">Groom's Parents</h4>
                    <p className="text-lg text-gray-700">{PARENTS.groom.father}</p>
                    <p className="text-lg text-gray-700">{PARENTS.groom.mother}</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-3">Bride's Parents</h4>
                    <p className="text-lg text-gray-700">{PARENTS.bride.father}</p>
                    <p className="text-lg text-gray-700">{PARENTS.bride.mother}</p>
                </div>
            </div>
        </div>

        {/* Principal Sponsors */}
        <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-3xl font-serif text-gray-800 mb-8">Principal Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-2">
                    {PRINCIPAL_SPONSORS.male.map((name, index) => <p key={index} className="text-lg text-gray-700">{addSponsorPrefix(name, true)}</p>)}
                </div>
                 <div className="space-y-2">
                    {PRINCIPAL_SPONSORS.female.map((name, index) => <p key={index} className="text-lg text-gray-700">{addSponsorPrefix(name, false)}</p>)}
                </div>
            </div>
        </div>

        {/* Secondary Sponsors */}
        <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-serif text-gray-800 mb-8">Secondary Sponsors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                    <p className="font-semibold text-lg text-gray-800">Mr. & Mrs. {getLastName(SECONDARY_SPONSORS.candle[0])}</p>
                    <p className="text-gray-600 text-md">{SECONDARY_SPONSORS.candle.join(' & ')}</p>
                    <p className="text-gray-500 text-lg mt-1">Candle</p>
                </div>
                <div>
                    <p className="font-semibold text-lg text-gray-800">Mr. & Mrs. {getLastName(SECONDARY_SPONSORS.veil[0])}</p>
                    <p className="text-gray-600 text-md">{SECONDARY_SPONSORS.veil.join(' & ')}</p>
                    <p className="text-gray-500 text-lg mt-1">Veil</p>
                </div>
                <div>
                    <p className="font-semibold text-lg text-gray-800">Mr. & Mrs. {getLastName(SECONDARY_SPONSORS.cord[0])}</p>
                    <p className="text-gray-600 text-md">{SECONDARY_SPONSORS.cord.join(' & ')}</p>
                    <p className="text-gray-500 text-lg mt-1">Cord</p>
                </div>
            </div>
        </div>

        {/* Wedding Party */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-5xl mx-auto border-t border-gray-200 pt-16 mb-16">
            <div className="text-center">
                <h3 className="text-2xl font-serif text-gray-700 mb-6">The Groom's Party</h3>
                <div className="space-y-3">
                    <div>
                        <p className="font-semibold text-lg text-gray-800">{BEST_WOMAN}</p>
                        <p className="text-gray-500">Best Woman</p>
                    </div>
                    {GROOMSMEN.map((name, index) => (
                        <div key={index}>
                            <p className="font-semibold text-lg text-gray-800">{name}</p>
                            <p className="text-gray-500">Groomsman</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-serif text-gray-700 mb-6">The Bride's Party</h3>
                <div className="space-y-3">
                    <div>
                        <p className="font-semibold text-lg text-gray-800">{MAN_OF_HONOR}</p>
                        <p className="text-gray-500">Man of Honor</p>
                    </div>
                    {BRIDESMAIDS.map((name, index) => (
                        <div key={index}>
                            <p className="font-semibold text-lg text-gray-800">{name}</p>
                            <p className="text-gray-500">Bridesmaid</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Ceremonial & Offertory */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-4">With Special Participation</h4>
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold text-lg text-gray-800">{CEREMONIAL_ROLES.rings}</p>
                            <p className="text-gray-500">Ring Bearer</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg text-gray-800">{CEREMONIAL_ROLES.arrhae}</p>
                            <p className="text-gray-500">Arrhae Bearer</p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg text-gray-800">{CEREMONIAL_ROLES.bible}</p>
                            <p className="text-gray-500">Bible Bearer</p>
                        </div>
                    </div>
                </div>
                 <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-4">Offertory</h4>
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold text-lg text-gray-800">Mr. & Mrs. {getLastName(OFFERTORY.breadAndWine[0])}</p>
                            <p className="text-gray-600 text-md">{OFFERTORY.breadAndWine.join(' & ')}</p>
                             <p className="text-gray-500 text-lg mt-1">Bread & Wine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};