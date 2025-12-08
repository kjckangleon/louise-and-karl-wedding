
import React from 'react';
import { GROOM_NAME, BRIDE_NAME, GROOM_FIRST_NAME, BRIDE_FIRST_NAME } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#6D4C41] text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif mb-2">Thank You</h2>
                <p className="mb-4">We can't wait to celebrate with you!</p>
                <p className="text-4xl font-serif text-amber-100">{`${GROOM_FIRST_NAME} & ${BRIDE_FIRST_NAME}`}</p>
                 <p className="text-sm text-gray-300 mt-8">&copy; {new Date().getFullYear()} {`${GROOM_NAME} & ${BRIDE_NAME}`}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}