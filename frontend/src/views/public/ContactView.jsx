import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

const ContactView = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        senderName: '', senderEmail: '', subject: '', content: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/messages', formData);
            setStatus('Message Sent!');
            setFormData({ senderName: '', senderEmail: '', subject: '', content: '' });
        } catch (err) {
            setStatus('Error sending message.');
        }
    };

    return (
        <div className="contact-card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.senderName}
                    onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                    required
                />
                <textarea
                    placeholder="Message"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    required
                />
                <button className="pastel-button" type="submit">Submit</button>
                {status && <p className="status-msg">{status}</p>}
            </form>
        </div>
    );
};

export default ContactView;