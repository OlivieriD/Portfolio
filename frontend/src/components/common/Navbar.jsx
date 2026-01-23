import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const { toggleLanguage, currentLang } = useLanguage();
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <nav className="navbar">
            <div className="nav-brand">PORTFOLIO</div>
            <div className="nav-links">
                <a href="#projects">{t('nav_projects')}</a>
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