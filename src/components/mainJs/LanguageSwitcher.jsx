import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemContext } from '../context/ThemProvider';

const baseButtonStyle = {
  margin: '0 0.25rem',
  padding: '0.35rem 0.6rem',
  fontSize: '0.85rem',
  cursor: 'pointer',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s, color 0.3s'
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemContext);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const getButtonStyle = (isActive) => ({
    ...baseButtonStyle,
    color: theme === 'dark' ? 'white' : 'black',
    border: `2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'}`,
    backgroundColor: isActive
      ? theme === 'dark'
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(0, 0, 0, 0.08)'
      : 'transparent'
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      <button
        type="button"
        style={getButtonStyle(hoveredLanguage === 'en' || i18n.language === 'en')}
        onClick={() => changeLanguage('en')}
        onMouseEnter={() => setHoveredLanguage('en')}
        onMouseLeave={() => setHoveredLanguage(null)}
      >
        EN
      </button>
      <button
        type="button"
        style={getButtonStyle(hoveredLanguage === 'vi' || i18n.language === 'vi')}
        onClick={() => changeLanguage('vi')}
        onMouseEnter={() => setHoveredLanguage('vi')}
        onMouseLeave={() => setHoveredLanguage(null)}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
