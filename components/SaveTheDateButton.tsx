import React from 'react';
import { WEDDING_DATE, GROOM_NAME, BRIDE_NAME } from '../constants';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
    </svg>
);

export const SaveTheDateButton: React.FC = () => {
    const formatGoogleCalendarDate = (date: Date): string => {
        return date.toISOString().replace(/-|:|\.\d{3}/g, '');
    };

    const generateGoogleCalendarUrl = () => {
        const eventTitle = `Wedding: ${GROOM_NAME} & ${BRIDE_NAME}`;
        
        const startTime = WEDDING_DATE;
        const endTime = new Date(startTime.getTime() + 6 * 60 * 60 * 1000); // Add 6 hours

        const startDate = formatGoogleCalendarDate(startTime);
        const endDate = formatGoogleCalendarDate(endTime);

        const eventDetails = `Join us for the wedding of ${GROOM_NAME} and ${BRIDE_NAME}. Visit our website for more details.`;
        const eventLocation = 'Cebu Metropolitan Cathedral, Cebu City, Philippines';

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: eventTitle,
            dates: `${startDate}/${endDate}`,
            details: eventDetails,
            location: eventLocation
        });

        return `https://www.google.com/calendar/render?${params.toString()}`;
    };
    
    return (
        <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-8 py-3 bg-[#F0B429] text-[#6D4C41] font-semibold rounded-full shadow-lg hover:bg-[#D4A225] transition-transform transform hover:scale-105 duration-300"
        >
            <CalendarIcon />
            Save the Date
        </a>
    );
};