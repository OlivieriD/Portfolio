import { useState } from 'react';
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
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand" onClick={closeMenu}>ODufort</Link>
            
            <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={menuOpen ? 'hamburger open' : 'hamburger'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            
            <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
                <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_home')}</Link>
                <Link to="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_projects')}</Link>
                <Link to="/skills" className={isActive('/skills') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_skills')}</Link>
                <Link to="/experience" className={isActive('/experience') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_experience')}</Link>
                <Link to="/education" className={isActive('/education') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_education')}</Link>
                <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_contact')}</Link>
                <Link to="/testimonials" className={isActive('/testimonials') ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>{t('nav_testimonials')}</Link>
                {isAuthenticated && (
                    <Link
                        to="/admin/app-management"
                        className={isActive('/admin/app-management') ? 'nav-link active' : 'nav-link'}
                        onClick={closeMenu}
                    >
                        {t('nav_app_management')}
                    </Link>
                )}
                <button className="lang-toggle" onClick={() => { toggleLanguage(); closeMenu(); }}>
                    {currentLang.toUpperCase()}
                </button>
                {isAuthenticated ? (
                    <button className="admin-pill" onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }); closeMenu(); }}>Logout</button>
                ) : (
                    <button className="admin-pill" onClick={() => { loginWithRedirect(); closeMenu(); }}>Login</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;