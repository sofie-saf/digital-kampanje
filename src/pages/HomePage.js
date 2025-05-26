// src/pages/HomePage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

import img1 from '../assets/images/Logo.avif';
import img2 from '../assets/images/Logo.avif';
import img3 from '../assets/images/Logo.avif';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <InfoSection
        title={t('home.deepfakeWhat.title')}
        paragraphs={[
          t('home.deepfakeWhat.paragraph')
        ]}
        image={img1}
      />
      <InfoSection
        title={t('home.deepfakeHow.title')}
        paragraphs={[
          t('home.deepfakeHow.paragraph')
        ]}
        image={img2}
        reverse
      />
      <InfoSection
        title={t('home.deepfakeDanger.title')}
        paragraphs={[
          t('home.deepfakeDanger.paragraph')
        ]}
        image={img3}
      />
      <Footer />
    </>
  );
};

export default HomePage;
