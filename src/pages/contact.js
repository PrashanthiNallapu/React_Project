import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                setIsSubmitted(true); // Set the flag to true upon successful submission
            } else {
                setSuccessMessage('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccessMessage('An error occurred.');
        }
    };

    return (
        <div className="contact-form">
            {isSubmitted ? (
                <p className="success-message">{successMessage}</p>
            ) : (
                <>
                    <h2>Write Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Your Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Contact;
