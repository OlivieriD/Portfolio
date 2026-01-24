import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, Link } from 'react-router-dom';
import '../../styles/NavbarEnhanced.css';

const Navbar = () => {
    const { t } = useTranslation();
    const { toggleLanguage, currentLang } = useLanguage();
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">PORTFOLIO</Link>
            <div className="nav-links">
                <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>{t('nav_home')}</Link>
                <Link to="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>{t('nav_projects')}</Link>
                <Link to="/skills" className={isActive('/skills') ? 'nav-link active' : 'nav-link'}>{t('nav_skills')}</Link>
                <Link to="/experience" className={isActive('/experience') ? 'nav-link active' : 'nav-link'}>{t('nav_experience')}</Link>
                <Link to="/education" className={isActive('/education') ? 'nav-link active' : 'nav-link'}>{t('nav_education')}</Link>
                <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>{t('nav_contact')}</Link>
                <button className="lang-toggle" onClick={toggleLanguage}>
                    {currentLang.toUpperCase()}
                </button>
                {isAuthenticated ? (
                    <button className="admin-pill" onClick={() => logout()}>Logout</button>
                ) : (
                    <button className="admin-pill" onClick={() => loginWithRedirect()}>Admin</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;