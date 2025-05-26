// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/images/hvit.png';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-center">
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/Info">{t('nav.info')}</Link></li>
            <li><Link to="/quiz">{t('nav.quiz')}</Link></li>
            <li><Link to="/stats">{t('nav.stats')}</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <button onClick={handleLanguageChange} className="lang-switch">
            {i18n.language === 'en' ? 'Norsk' : 'English'}
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-privacy">
          <Link to="#">{t('footer.privacy')}</Link>
        </div>
        <div className="footer-socials">
          <span>{t('footer.follow')}</span>
          <a href="https://www.facebook.com/Medietilsynet/" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/medietilsynet/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/user/Medietilsynet" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
