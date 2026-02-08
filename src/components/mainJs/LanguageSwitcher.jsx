import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const buttonStyle = {
  margin: '0 0.25rem',
  padding: '0.35rem 0.6rem',
  fontSize: '0.85rem',
  cursor: 'pointer',
  border: '2px solid rgba(255,255,255,0.8)',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: 'white',
  transition: 'background-color 0.3s, color 0.3s'
};

const buttonActiveStyle = {
  ...buttonStyle,
  backgroundColor: 'rgba(255,255,255,0.3)',
  color: 'white'
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      <button
        type="button"
        style={hoveredLanguage === 'en' || i18n.language === 'en' ? buttonActiveStyle : buttonStyle}
        onClick={() => changeLanguage('en')}
        onMouseEnter={() => setHoveredLanguage('en')}
        onMouseLeave={() => setHoveredLanguage(null)}
      >
        EN
      </button>
      <button
        type="button"
        style={hoveredLanguage === 'vi' || i18n.language === 'vi' ? buttonActiveStyle : buttonStyle}
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
