import React from 'react';
import EventSection from './EventSection';
import Registration from './Registration';
import Contact from './Contact';

export default function Home({addNewShift}) {
    return (
        <> 
            <EventSection />
            <Registration addNewShift={addNewShift} />
            <Contact />
        </>
    )
}
