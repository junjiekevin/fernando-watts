import scheduleBanner from '../assets/images/banner_schedule.jpg';
import SEO from '../components/SEO';

const Schedule = () => {
    return (
        <div className="page-fade-in pt-navbar">
            <SEO
                title="Schedule"
                description="View Fernando Watts' upcoming performance schedule, opera debuts, and recital dates."
            />
            <div className="page-banner" style={{ backgroundImage: `url(${scheduleBanner})` }}></div>
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">Schedule</h1>
                    <div className="schedule-list mt-lg">
                        <div className="schedule-item">
                            <div className="schedule-date">OCT 15, 2026</div>
                            <div className="schedule-info">
                                <h3>The Metropolitan Opera</h3>
                                <p>Role: Sarastro | Die Zauberflöte</p>
                                <p className="venue">New York, NY</p>
                            </div>
                            <div className="schedule-action">
                                <a href="#" className="btn btn-outline btn-sm">Tickets</a>
                            </div>
                        </div>
                        {/* Repeat for more items */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Schedule;
