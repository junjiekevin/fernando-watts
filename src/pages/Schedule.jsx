import React from 'react';
import SEO from '../components/SEO';

const Schedule = () => {
    const performances = [
        {
            id: 1,
            date: "OCT 15, 2026",
            company: "The Metropolitan Opera",
            production: "Die Zauberflöte",
            role: "Sarastro",
            location: "New York, NY",
            link: "#"
        },
        {
            id: 2,
            date: "NOV 02, 2026",
            company: "The Metropolitan Opera",
            production: "Die Zauberflöte",
            role: "Sarastro",
            location: "New York, NY",
            link: "#"
        },
        {
            id: 3,
            date: "DEC 12, 2026",
            company: "Barbados National Chorus",
            production: "Christmas Gala",
            role: "Guest Soloist",
            location: "Bridgetown, Barbados",
            link: "#"
        }
    ];

    return (
        <div className="page-fade-in pt-navbar">
            <SEO
                title="Schedule"
                description="View Fernando Watts' upcoming performance schedule, opera debuts, and recital dates."
            />
            <div className="page-banner" style={{ backgroundImage: `url(/images/banner_schedule.jpeg)` }}></div>

            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">Schedule</h1>
                    <div className="schedule-grid">
                        {performances.map((perf) => (
                            <div key={perf.id} className="performance-card reveal">
                                <div className="card-inner">
                                    <div className="card-date">{perf.date}</div>
                                    <div className="card-production">
                                        <h3>{perf.production}</h3>
                                        <p className="card-role">{perf.company} | {perf.role}</p>
                                    </div>
                                    <div className="card-venue">{perf.location}</div>
                                </div>
                                <div className="card-action">
                                    <a href={perf.link} className="btn btn-outline btn-sm">Tickets</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schedule;
