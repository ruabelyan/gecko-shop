import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="page-contact">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">Have questions about our geckos, your order, or anything else? We're here to help!</p>

                <div className="contact-content">
                    <div className="contact-info-card">
                        <h2>Get in Touch</h2>

                        <div className="info-section">
                            <h3>📧 Email</h3>
                            <p><a href="mailto:info@geckoshop.com">info@geckoshop.com</a></p>

                            <h3>📞 Phone</h3>
                            <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>

                            <h3>📍 Address</h3>
                            <p>Gecko Shop Headquarters<br />
                                123 Reptile Lane<br />
                                Vivarium City, GC 98765</p>

                            <h3>🕒 Business Hours</h3>
                            <p>Monday - Friday: 9am - 6pm<br />
                                Saturday: 10am - 4pm<br />
                                Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
