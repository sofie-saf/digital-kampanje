import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from '../assets/images/hvit.png';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Digital Kampanje Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">{t('navbar.home')}</Link></li>
        <li><Link to="/Info">{t('navbar.info')}</Link></li>
        <li><Link to="/quiz">{t('navbar.quiz')}</Link></li>
        <li><Link to="/stats">{t('navbar.stats')}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
