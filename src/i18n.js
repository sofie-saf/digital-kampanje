// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations manually
import enCommon from './locales/en/common.json';
import noCommon from './locales/no/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    no: { common: noCommon },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  ns: ['common'], // we're using only the "common" namespace
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
