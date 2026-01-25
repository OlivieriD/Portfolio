import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/common/Navbar';
import HomeView from './views/public/HomeView';
import ProjectsPage from './views/public/ProjectsPage';
import SkillsPage from './views/public/SkillsPage';
import ExperiencePage from './views/public/ExperiencePage';
import EducationPage from './views/public/EducationPage';
import ContactPage from './views/public/ContactPage';
import TestimonialPage from './views/public/TestimonialPage';
import AdminDashboard from './views/admin/AdminDashboard.clean';
import { useAuth0 } from '@auth0/auth0-react';
import { injectToken } from './api/axiosInstance';

function App() {
    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const tokenInterceptorSet = useRef(false);

    useEffect(() => {
        if (!tokenInterceptorSet.current) {
            injectToken(getAccessTokenSilently);
            tokenInterceptorSet.current = true;
        }
    }, [getAccessTokenSilently]);

    if (isLoading) return <div className="loading-screen">Loading...</div>;

    return (
        <>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomeView />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/testimonials" element={<TestimonialPage />} />

                {/* Protected Admin Routes */}
                <Route
                    path="/admin/*"
                    element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />}
                />

                {/* Fallback for undefined routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;