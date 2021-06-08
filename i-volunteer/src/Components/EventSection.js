import React from 'react';
import EventBackground from './EventBackground';

export default function EventSection() {
    return (
        <>
            <header className="event-header">
                <h1 className="section-header">Welcome to G2E digital</h1>
                <h3 className="section-subheader">Where the global gaming industry comes together</h3>
            </header>
            <EventBackground>
                <section className="event-section">
                    <p>Reunite with the global gaming industry at Global Gaming Expo (G2E). Set in Las Vegas, the heart of gaming, G2E is the premier event for commercial and tribal gaming professionals to reconnect, discover cutting-edge technology, and experience innovative content. Whether in-person or virtually, October 4-7, 2021 (Education: October 4-7 | Expo Hall: October 5-7) will be when G2E unites the community that is shaping the future of gaming.</p>
                    <div className="event-button">
                        <button>Learn more</button>
                        <button>Contact us</button>
                    </div>
                </section>
            </EventBackground>
        </>
    )
}
