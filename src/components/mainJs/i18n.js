import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../language/en/translation.json';
import viTranslation from '../../language/vi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      vi: {
        translation: viTranslation
      }
    },
    lng: localStorage.getItem('i18nextLng') || navigator.language.startsWith('vi') ? 'vi' : 'en', // Tự động chọn ngôn ngữ dựa trên trình duyệt hoặc localStorage
    // lng: "vi", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
