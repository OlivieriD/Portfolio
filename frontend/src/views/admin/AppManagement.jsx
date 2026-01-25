import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/AdminDashboard.css';

const AppManagement = () => {
    const { user } = useAuth0();

    return (
        <div className="app-management">
            <div className="welcome-card">
                <h1 className="welcome-title">Welcome, Admin!</h1>
                <p className="welcome-subtitle">
                    You are logged in as <strong>{user?.email}</strong>
                </p>
            </div>

            <div className="management-grid">
                <div className="info-card">
                    <div className="card-icon">📊</div>
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
                    <div className="card-icon">⚡</div>
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
                    <div className="card-icon">🔒</div>
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
                    <div className="card-icon">🎨</div>
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

            <div className="getting-started">
                <h2>🚀 Getting Started</h2>
                <p>Click any tab in the sidebar to begin managing your portfolio content. All forms support bilingual content (English/French) to reach a wider audience.</p>
            </div>
        </div>
    );
};

export default AppManagement;
