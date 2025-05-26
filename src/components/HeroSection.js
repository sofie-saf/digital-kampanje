import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Herosection.css';
import heroImage from '../assets/images/Logo.avif';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section
      className="hero"
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <button className="hero-button" onClick={() => navigate('/quiz')}>
            {t('hero.buttonText')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
