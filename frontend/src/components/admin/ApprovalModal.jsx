import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, CheckCircle, Clock, X } from 'lucide-react';
import '../../styles/AdminModal.css';

const ApprovalModal = ({ isOpen, testimonial, onApprove, onReject, onPending, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen || !testimonial) return null;

    const getStatusDisplay = (status) => {
        switch(status) {
            case 'APPROVED':
                return { icon: CheckCircle, label: t('testimonial_status_yes'), color: '#4CAF50' };
            case 'REFUSED':
                return { icon: X, label: t('testimonial_status_refused'), color: '#B71C1C' };
            case 'PENDING':
            default:
                return { icon: Clock, label: t('testimonial_status_pending'), color: '#FF9800' };
        }
    };

    const statusDisplay = getStatusDisplay(testimonial.approvalStatus);
    const StatusIcon = statusDisplay.icon;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
                <div className="modal-header">
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <AlertCircle size={24} color="#457B9D" />
                        {t('testimonial_approve_title')}
                    </h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#F8FBFF', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginBottom: '0.25rem' }}>
                            {t('admin_col_author')}
                        </label>
                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>
                            {testimonial.authorName}
                        </p>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginBottom: '0.25rem' }}>
                            {t('admin_col_content')}
                        </label>
                        <p style={{ 
                            margin: 0, 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            backgroundColor: '#FFFFFF',
                            padding: '1rem',
                            borderRadius: '6px',
                            border: '1px solid #E8ECEF'
                        }}>
                            {testimonial.content}
                        </p>
                    </div>

                    <div style={{
                        padding: '0.75rem',
                        backgroundColor: '#FFFFFF',
                        border: `2px solid ${statusDisplay.color}`,
                        borderRadius: '6px',
                        color: statusDisplay.color,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <StatusIcon size={18} />
                        <span style={{ fontWeight: '500' }}>
                            {t('testimonial_status')}: {statusDisplay.label}
                        </span>
                    </div>
                </div>

                <p style={{ color: '#666', textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {t('testimonial_approve_confirm')}
                </p>

                <div className="modal-actions" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                    <button 
                        onClick={onPending}
                        style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#FFF3E0',
                            color: '#E65100',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Clock size={16} /> {t('testimonial_pending')}
                    </button>
                    <button 
                        onClick={onReject}
                        style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#FFEBEE',
                            color: '#B71C1C',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <X size={16} /> {t('testimonial_refuse')}
                    </button>
                    <button 
                        onClick={onApprove}
                        style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#E8F5E9',
                            color: '#2E7D32',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <CheckCircle size={16} /> {t('testimonial_approve')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApprovalModal;
