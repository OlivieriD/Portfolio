import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BarChart3, Zap, Lock, Palette, FileText, Upload, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { ResumeService } from '../../services/ResumeService';
import '../../styles/AdminDashboard.css';

const AppManagement = () => {
    const { user } = useAuth0();
    const [resumeData, setResumeData] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchResumeInfo();
    }, []);

    const fetchResumeInfo = async () => {
        try {
            const res = await ResumeService.getInfo();
            setResumeData(res.data);
        } catch (err) {
            setResumeData(null);
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setIsUploading(true);
        setMessage({ type: '', text: '' });

        try {
            await ResumeService.upload(formData);
            setMessage({ type: 'success', text: 'Resume uploaded successfully!' });
            // Add a slight delay to allow the DB to flush before reloading
            setTimeout(() => {
                fetchResumeInfo();
            }, 500);
        } catch (err) {
            setMessage({ type: 'error', text: 'Failed to upload resume.' });
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete the current resume?')) return;

        try {
            await ResumeService.delete();
            setResumeData(null);
            setMessage({ type: 'success', text: 'Resume deleted successfully.' });
        } catch (err) {
            setMessage({ type: 'error', text: 'Failed to delete resume.' });
        }
    };

    return (
        <div className="app-management">
            <div className="welcome-card">
                <h1 className="welcome-title">Welcome, Admin!</h1>
                <p className="welcome-subtitle">
                    You are logged in as <strong>{user?.email}</strong>
                </p>
            </div>

            <div className="resume-management-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <FileText size={32} color="#457B9D" />
                    <h2 style={{ margin: 0 }}>Resume Management</h2>
                </div>

                {message.text && (
                    <div style={{ 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        marginBottom: '1rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        backgroundColor: message.type === 'success' ? '#E1F5FE' : '#FFEBEE',
                        color: message.type === 'success' ? '#01579B' : '#B71C1C'
                    }}>
                        {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        {message.text}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {resumeData ? (
                        <div style={{ padding: '1rem', border: '1px solid #E8ECEF', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>Current Resume:</p>
                                <p style={{ margin: 0, color: '#666' }}>{resumeData.filename} ({resumeData.fileType})</p>
                            </div>
                            <button 
                                onClick={handleDelete}
                                className="delete-button"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFEBEE', color: '#B71C1C', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                            >
                                <Trash2 size={18} /> Delete
                            </button>
                        </div>
                    ) : (
                        <p style={{ fontStyle: 'italic', color: '#888' }}>No resume uploaded yet.</p>
                    )}

                    <div style={{ marginTop: '1rem' }}>
                        <label className="pastel-button" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Upload size={18} />
                            {isUploading ? 'Uploading...' : 'Upload New Resume'}
                            <input 
                                type="file" 
                                accept=".pdf,.doc,.docx" 
                                onChange={handleUpload} 
                                style={{ display: 'none' }} 
                                disabled={isUploading}
                            />
                        </label>
                        <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>Suported formats: PDF, DOC, DOCX</p>
                    </div>
                </div>
            </div>

            <div className="management-grid">
                <div className="info-card">
                    <div className="card-icon">
                        <BarChart3 size={32} strokeWidth={1.5} />
                    </div>
                    <h3>Portfolio Management</h3>
                    <p>Use the sidebar to manage different sections of your portfolio:</p>
                    <ul className="feature-list">
                        <li>✓ Projects - Add and showcase your work</li>
                        <li>✓ Skills - Display your technical abilities</li>
                        <li>✓ Experience - Share your career journey</li>
                        <li>✓ Education - Highlight your academic background</li>
                        <li>✓ Hobbies - Show your interests</li>
                        <li>✓ Testimonials - Manage client feedback</li>
                    </ul>
                </div>

                <div className="info-card">
                    <div className="card-icon">
                        <Zap size={32} strokeWidth={1.5} />
                    </div>
                    <h3>Quick Actions</h3>
                    <p>All changes you make will:</p>
                    <ul className="feature-list">
                        <li>✓ Update instantly on the public website</li>
                        <li>✓ Support both English and French</li>
                        <li>✓ Be saved automatically</li>
                        <li>✓ Maintain responsive design</li>
                    </ul>
                </div>

                <div className="info-card">
                    <div className="card-icon">
                        <Lock size={32} strokeWidth={1.5} />
                    </div>
                    <h3>Security</h3>
                    <p>Your admin account is protected:</p>
                    <ul className="feature-list">
                        <li>✓ Secured by Auth0 authentication</li>
                        <li>✓ JWT token-based authorization</li>
                        <li>✓ No public signup allowed</li>
                        <li>✓ Admin-only access control</li>
                    </ul>
                </div>

                <div className="info-card">
                    <div className="card-icon">
                        <Palette size={32} strokeWidth={1.5} />
                    </div>
                    <h3>Design Theme</h3>
                    <p>Consistent pale color aesthetic:</p>
                    <ul className="feature-list">
                        <li>✓ White background (#FFFFFF)</li>
                        <li>✓ Pale blue accents (#A8DADC)</li>
                        <li>✓ Light gray elements (#E8ECEF)</li>
                        <li>✓ Professional typography</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppManagement;
