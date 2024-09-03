// // src/components/LanguageSwitcher.js
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const buttonStyle = {
//   margin: '0 0.5rem',
//   padding: '0.5rem 1rem',
//   fontSize: '1rem',
//   cursor: 'pointer',
//   border: '2px solid #333',
//   borderRadius: '4px',
//   backgroundColor: '#f0f0f0',
//   color: '#333',
//   transition: 'background-color 0.3s, color 0.3s'
// };

// const buttonHoverStyle = {
//   ...buttonStyle,
//   backgroundColor: '#333',
//   color: '#f0f0f0'
// };

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [hoveredLanguage, setHoveredLanguage] = React.useState(null);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('i18nextLng', lng); // Lưu ngôn ngữ đã chọn vào localStorage
//   };

//   React.useEffect(() => {
//     // Đặt ngôn ngữ từ localStorage khi component được mount
//     const savedLanguage = localStorage.getItem('i18nextLng');
//     if (savedLanguage) {
//       i18n.changeLanguage(savedLanguage);
//     }
//   }, [i18n]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
//       <button
//         style={hoveredLanguage === 'en' ? buttonHoverStyle : buttonStyle}
//         onClick={() => changeLanguage('en')}
//         onMouseEnter={() => setHoveredLanguage('en')}
//         onMouseLeave={() => setHoveredLanguage(null)}
//       >
//         English
//       </button>
//       <button
//         style={hoveredLanguage === 'vi' ? buttonHoverStyle : buttonStyle}
//         onClick={() => changeLanguage('vi')}
//         onMouseEnter={() => setHoveredLanguage('vi')}
//         onMouseLeave={() => setHoveredLanguage(null)}
//       >
//         Vietnamese
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;
