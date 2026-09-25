// import { useState, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Logotechnology from '../assets/img/logo_nav.png';
// import navIcon1 from '../assets/img/facebook.png';
// import icon_sun from '../assets/img/icon_sun.png';
// import icon_moon from '../assets/img/icon-moon.png';
// import { ThemContext } from './context/ThemProvider';
// import LanguageSwitcher from './mainJs/LanguageSwitcher';

// const NavBar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const location = useLocation();
//   const { theme, setTheme } = useContext(ThemContext);
//   const { t } = useTranslation();

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   };

//   const hidePages = ['/show', '/contact'].includes(location.pathname);
//   //Check active
//   const navLinkClass = (isActive) =>
//         `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
//           theme === 'dark'
//             ? isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
//             : isActive ? 'bg-zinc-200/80 text-black font-semibold' : 'text-zinc-600 hover:bg-zinc-100 hover:text-black'
//         }`;
//   //Check active home
//   const isHomeActive = location.pathname === '/' && location.hash === '';
//   return (
//     <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800 bg-slate-950/90 text-slate-100' : 'border-zinc-200 bg-white text-black shadow-sm'}`}>
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
//         {/* LOGO */}
//         <a href="/" className="flex items-center gap-2 shrink-0">
//           <img src={Logotechnology} alt="Logo" className="h-10 w-auto object-contain" />
//         </a>

//         {/* MENU DESKTOP */}
//         {/* <nav className="hidden items-center gap-1 sm:flex">
//           <NavLink
//             to="/"
//             end
//             className={navLinkClass(isHomeActive)}
//           >
//             {t('nav.home')}
//           </NavLink> */}
//           <nav className="hidden items-center gap-1 sm:flex">
//           {/* Home*/}
//           <a
//             href="/"
//             className={navLinkClass(isHomeActive)}
//           >
//             {t('nav.home')}
//           </a>
         
//           {!hidePages && (
//             <>
//               <a href="#IntroductionProfile" className={navLinkClass(location.hash === '#IntroductionProfile')}>
//                 {t('nav.introductionMe')}
//               </a>
//               <a href="#AboutProfile" className={navLinkClass(location.hash === '#AboutProfile')}>
//                 {t('nav.aboutMe')}
//               </a>
//               <a href="#ProjectsProfile" className={navLinkClass(location.hash === '#ProjectsProfile')}>
//                 {t('nav.projects')}
//               </a>
//               <a href="#contactProfile" className={navLinkClass(location.hash === '#contactProfile')}>
//                 {t('nav.contact')}
//               </a>
//             </>
//           )}
//         </nav>

//         {/* TOOLBAR */}
//         <div
//           className={`flex items-center gap-2 rounded-2xl border px-2.5 py-1.5 transition-all ${
//             theme === 'dark'
//               ? 'border-slate-800 bg-slate-900/80'
//               : 'border-zinc-200 bg-zinc-50'
//           }`}
//         >
//           <LanguageSwitcher />

//           {/* Theme Button */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="flex h-8 w-8 items-center justify-center rounded-xl transition hover:opacity-80"
//           >
//             <img src={theme === 'light' ? icon_moon : icon_sun} alt="Theme" className="h-4 w-4" />
//           </button>

//           {/* Facebook Icon */}
//           <a
//             href="https://www.facebook.com/vu.nghia.18062"
//             target="_blank"
//             rel="noreferrer"
//             className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-700"
//           >
//             <img src={navIcon1} alt="Facebook" className="h-4 w-4 object-contain brightness-200" />
//           </a>

//           {/* Hamburger Menu  */}
//           <button
//             className={`flex h-8 w-8 items-center justify-center rounded-xl border transition sm:hidden ${
//               theme === 'dark' ? 'border-slate-700 bg-slate-800' : 'border-zinc-300 bg-white'
//             }`}
//             onClick={() => setExpanded(!expanded)}
//             aria-label="Toggle navigation"
//           >
//             <div className="flex flex-col gap-1 w-3.5">
//               <span className="block h-0.5 w-full bg-current rounded-full" />
//               <span className="block h-0.5 w-full bg-current rounded-full" />
//               <span className="block h-0.5 w-full bg-current rounded-full" />
//             </div>
//           </button>
//         </div>

//       </div>

//       {/* MENU DROPDOWN */}
//       {expanded && (
//         <div
//           className={`border-t p-4 sm:hidden ${
//             theme === 'dark' ? 'border-slate-800 bg-slate-950 text-white' : 'border-zinc-200 bg-white text-black'
//           }`}
//         >
//           <div className="flex flex-col gap-2">
//             <a href="/" onClick={() => setExpanded(false)} className={navLinkClass(location.pathname === '/')}>
//               {t('nav.home')}
//             </a>
//             {!hidePages && (
//               <>
//                 <a href="#IntroductionProfile" onClick={() => setExpanded(false)} className={navLinkClass(location.hash === '#IntroductionProfile')}>
//                   {t('nav.introductionMe')}
//                 </a>
//                 <a href="#AboutProfile" onClick={() => setExpanded(false)} className={navLinkClass(location.hash === '#AboutProfile')}>
//                   {t('nav.aboutMe')}
//                 </a>
//                 <a href="#ProjectsProfile" onClick={() => setExpanded(false)} className={navLinkClass(location.hash === '#ProjectsProfile')}>
//                   {t('nav.projects')}
//                 </a>
//                 <a href="#contactProfile" onClick={() => setExpanded(false)} className={navLinkClass(location.hash === '#contactProfile')}>
//                   {t('nav.contact')}
//                 </a>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default NavBar;

import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logotechnology from '../assets/img/logo_nav.png';
import navIcon1 from '../assets/img/facebook.png';
import icon_sun from '../assets/img/icon_sun.png';
import icon_moon from '../assets/img/icon-moon.png';
import { ThemContext } from './context/ThemProvider';
import LanguageSwitcher from './mainJs/LanguageSwitcher';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemContext);
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const hidePages = ['/show', '/contact'].includes(location.pathname);

  // Style Desktop
  const navLinkClass = (isActive) =>
    `whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
      theme === 'dark'
        ? isActive ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
        : isActive ? 'bg-zinc-200 text-black font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100 hover:text-black'
    }`;

  // Style Mobile Dropdown Item
  const mobileNavLinkClass = (isActive) =>
    `group flex items-center justify-between w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
      theme === 'dark'
        ? isActive
          ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/10 text-blue-400 font-semibold border border-blue-500/30 shadow-lg shadow-blue-500/5'
          : 'text-slate-300 hover:bg-slate-900/80 hover:text-white active:scale-[0.98]'
        : isActive
          ? 'bg-blue-50/80 text-blue-600 font-semibold border border-blue-200 shadow-sm'
          : 'text-zinc-700 hover:bg-zinc-100/80 hover:text-black active:scale-[0.98]'
    }`;

  const isHomeActive = location.pathname === '/' && location.hash === '';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800/80 bg-slate-950/90 backdrop-blur-md text-slate-100' : 'border-zinc-200 bg-white/90 backdrop-blur-md text-black shadow-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={Logotechnology} alt="Logo" className="h-9 w-auto object-contain" />
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-1 lg:gap-2 sm:flex">
          <a href="/" className={navLinkClass(isHomeActive)}>
            {t('nav.home')}
          </a>
         
          {!hidePages && (
            <>
              <a href="#IntroductionProfile" className={navLinkClass(location.hash === '#IntroductionProfile')}>
                {t('nav.introductionMe')}
              </a>
              <a href="#AboutProfile" className={navLinkClass(location.hash === '#AboutProfile')}>
                {t('nav.aboutMe')}
              </a>
              <a href="#ProjectsProfile" className={navLinkClass(location.hash === '#ProjectsProfile')}>
                {t('nav.projects')}
              </a>
              <a href="#contactProfile" className={navLinkClass(location.hash === '#contactProfile')}>
                {t('nav.contact')}
              </a>
            </>
          )}
        </nav>

        {/* TOOLBAR */}
        <div
          className={`flex shrink-0 items-center gap-2 rounded-2xl border p-1.5 transition-all ${
            theme === 'dark'
              ? 'border-slate-800 bg-slate-900/80'
              : 'border-zinc-200 bg-zinc-50'
          }`}
        >
          <LanguageSwitcher />

          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all ${
              theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-zinc-200/60'
            }`}
          >
            <img src={theme === 'light' ? icon_moon : icon_sun} alt="Theme" className="h-4 w-4 object-contain" />
          </button>

       
          <a
            href="https://www.facebook.com/vu.nghia.18062"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 transition hover:bg-blue-700 active:scale-95"
          >
            <img src={navIcon1} alt="Facebook" className="h-4 w-4 object-contain brightness-200" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition sm:hidden ${
              theme === 'dark'
                ? 'border-slate-700 bg-slate-800 text-slate-200 active:bg-slate-700'
                : 'border-zinc-300 bg-white text-zinc-700 active:bg-zinc-100'
            }`}
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1 w-3.5 items-center justify-center">
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${expanded ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${expanded ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${expanded ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {expanded && (
        <div
          className={`border-b sm:hidden transition-all duration-300 ease-in-out ${
            theme === 'dark'
              ? 'border-slate-800/80 bg-slate-950/95 backdrop-blur-xl text-white shadow-2xl shadow-blue-950/20'
              : 'border-zinc-200 bg-white/95 backdrop-blur-xl text-black shadow-xl'
          }`}
        >
          <div className="flex flex-col gap-1.5 px-4 py-4">
            
            {/* Home Link */}
            <a
              href="/"
              onClick={() => setExpanded(false)}
              className={mobileNavLinkClass(isHomeActive)}
            >
              <span>{t('nav.home')}</span>
              <span className="text-xs opacity-40 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {!hidePages && (
              <>
                {/* Introduction */}
                <a
                  href="#IntroductionProfile"
                  onClick={() => setExpanded(false)}
                  className={mobileNavLinkClass(location.hash === '#IntroductionProfile')}
                >
                  <span>{t('nav.introductionMe')}</span>
                  <span className="text-xs opacity-40 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* About Me */}
                <a
                  href="#AboutProfile"
                  onClick={() => setExpanded(false)}
                  className={mobileNavLinkClass(location.hash === '#AboutProfile')}
                >
                  <span>{t('nav.aboutMe')}</span>
                  <span className="text-xs opacity-40 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Projects */}
                <a
                  href="#ProjectsProfile"
                  onClick={() => setExpanded(false)}
                  className={mobileNavLinkClass(location.hash === '#ProjectsProfile')}
                >
                  <span>{t('nav.projects')}</span>
                  <span className="text-xs opacity-40 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Contact */}
                <a
                  href="#contactProfile"
                  onClick={() => setExpanded(false)}
                  className={mobileNavLinkClass(location.hash === '#contactProfile')}
                >
                  <span>{t('nav.contact')}</span>
                  <span className="text-xs opacity-40 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;