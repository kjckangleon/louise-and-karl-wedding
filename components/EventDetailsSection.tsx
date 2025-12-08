
import React from 'react';

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-[#F0B429]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-[#F0B429]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

const DetailCard: React.FC<{ title: string; subtitle: string; time: string; address: string; mapLink: string; imageUrl: string }> = ({ title, subtitle, time, address, mapLink, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="p-8">
            <h3 className="text-3xl font-serif text-[#6D4C41]">{title}</h3>
            <p className="text-lg text-gray-500 mb-6">{subtitle}</p>
            <div className="flex items-start mb-4">
                <ClockIcon />
                <span className="text-gray-700">{time}</span>
            </div>
            <div className="flex items-start">
                <MapPinIcon />
                <div>
                    <p className="text-gray-700">{address}</p>
                    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-[#6D4C41] hover:underline font-semibold mt-1 inline-block">View Map</a>
                </div>
            </div>
        </div>
    </div>
);


export const EventDetailsSection: React.FC = () => {
    return (
        <section id="event-details" className="py-20 md:py-28 bg-[#F5F1EE]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#6D4C41]">The Big Day</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <DetailCard
                        title="The Ceremony"
                        subtitle="Cebu Metropolitan Cathedral"
                        time="2:00 PM - 3:30 PM"
                        address="Cebu Metropolitan Cathedral, Cebu City, Philippines"
                        mapLink="https://www.google.com/maps/search/?api=1&query=Cebu+Metropolitan+Cathedral"
                        imageUrl="https://scontent.fceb6-3.fna.fbcdn.net/v/t1.6435-9/90183989_109017267396167_4811073956679254016_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE1zjjnDLQ8S7O0RSzeS902J3wu_qdm2xMnfC7-p2bbE58GHhjpkPcjYjCF4HapFso&_nc_ohc=s1CzMWiiCygQ7kNvwFZqjx5&_nc_oc=Adl7pKqInsziOOPoZICIgMhS6rfrvqG56770TAodyitiIU9V1R0qsBmCc3prq7DtOpbQslDxeDWu3JphYK5m3Bbe&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=Q4duLrGbZ-JQYPPl2AKwxg&oh=00_AfgV5V5ObZXPFT5BR9Aaj17ewihUVtNyfQu-Vidv8PzyCg&oe=693C0FAC"
                    />
                    <DetailCard
                        title="The Reception"
                        subtitle="Waterfront Cebu City Hotel & Casino"
                        time="5:30 PM onwards"
                        address="Salinas Drive, Lahug, Cebu City, 6000 Cebu"
                        mapLink="https://www.google.com/maps/search/?api=1&query=Waterfront+Cebu+City+Hotel+%26+Casino"
                        imageUrl={new URL('../images/waterfront.jpg', import.meta.url).href}
                    />
                </div>
            </div>
        </section>
    );
};
