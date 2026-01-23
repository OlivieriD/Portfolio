import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomeView from './views/public/HomeView';
import AdminDashboard from './views/admin/AdminDashboard';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div className="loading-screen">Loading...</div>;

    return (
        <>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomeView />} />

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