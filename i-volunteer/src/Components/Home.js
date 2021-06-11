import React from 'react';
import EventSection from './EventSection';
import Registration from './Registration';
import ContactSection from './ContactSection';

export default function Home({addNewShift}) {
    return (
        <> 
            <EventSection />
            <Registration addNewShift={addNewShift} />
            <ContactSection />
        </>
    )
}
