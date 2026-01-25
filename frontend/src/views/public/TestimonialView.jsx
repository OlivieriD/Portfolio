import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TestimonialService } from '../../services/TestimonialService';
import { useLanguage } from '../../hooks/useLanguage';

const TestimonialView = () => {
    const [testimonials, setTestimonials] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        TestimonialService.getApproved()
            .then(res => setTestimonials(res.data))
            .catch(err => console.error("Error fetching testimonials:", err));
    }, []);

    return (
        <div className="testimonials-grid">
            {testimonials.length > 0 ? (
                testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-card">
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <div className="testimonial-author">
                            <span className="author-name">— {testimonial.authorName}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty-state-text">{t('testimonials_empty')}</p>
            )}
        </div>
    );
};

export default TestimonialView;
