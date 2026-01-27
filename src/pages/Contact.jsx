const Contact = () => {
    return (
        <div className="page-fade-in pt-navbar">
            <section className="section">
                <div className="container contact-layout">
                    <div className="contact-form-section">
                        <h1 className="section-title">Get in Touch</h1>
                        <form className="contact-form mt-lg">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="representation-section">
                        <h2 className="section-subtitle">Representation</h2>
                        <div className="rep-item mt-md">
                            <h3>General Management</h3>
                            <p>Agency Name</p>
                            <p>Agent Name</p>
                            <p>Email: agent@agency.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
