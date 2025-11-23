
import React from 'react';
import { GROOM_FIRST_NAME, BRIDE_FIRST_NAME, GROOM_LAST_NAME, BRIDE_LAST_NAME } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#6D4C41] text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif mb-2">Thank You</h2>
                <p className="mb-4">We can't wait to celebrate with you!</p>
                <p className="text-4xl font-serif text-amber-100">{`${GROOM_FIRST_NAME} & ${BRIDE_FIRST_NAME}`}</p>
                <p className="text-sm text-gray-300 mt-8">&copy; 2025 {`${GROOM_LAST_NAME}-${BRIDE_LAST_NAME}`} Wedding. All Rights Reserved.</p>
            </div>
        </footer>
    );
}