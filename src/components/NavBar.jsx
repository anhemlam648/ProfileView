import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logotechnology from '../assets/img/logo_nav.png';
import navIcon1 from '../assets/img/facebook.png';
import icon_sun from '../assets/img/icon_sun.png';
import icon_moon from '../assets/img/icon-moon.png';
import { useContext } from 'react';
import { ThemContext } from './context/ThemProvider';
import LanguageSwitcher from './mainJs/LanguageSwitcher';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemContext);
  const { t } = useTranslation();

  const navButtonClass = theme === 'dark'
  ? 'border-slate-700 bg-slate-900 text-white hover:bg-slate-800'
  : 'border-slate-200 bg-white text-black hover:bg-slate-100'

  const navSocialClass = theme === 'dark'
    ? 'inline-flex h-11 w-11 items-center justify-center rounded-full border p-2 transition border-blue-900 bg-blue-900'
    : 'inline-flex h-11 w-11 items-center justify-center rounded-full border p-2 transition border-blue-700 bg-blue-700';

  const navLinkClass = (isActive) =>
    theme === 'dark'
      ? `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-slate-800 text-white' : 'text-slate-100 hover:bg-slate-800'}`
      : `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-zinc-100 text-black' : 'text-black hover:bg-zinc-100'}`;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const hidePages = ['/show', '/contact'].includes(location.pathname);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${theme === 'dark' ? 'border-slate-800 bg-slate-950/90 text-slate-100' : 'border-zinc-100 bg-white text-black shadow-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <img src={Logotechnology} alt="Logo" className="h-12 w-auto rounded-2xl object-contain" />
          <span className="text-lg font-semibold tracking-tight">Vu Nghia</span>
        </a>

        <button
          className={`inline-flex items-center justify-center rounded-xl border p-2 transition sm:hidden ${navButtonClass}`}
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current mt-1" />
          <span className="block h-0.5 w-6 bg-current mt-1" />
        </button>

        <nav className={`flex-1 items-center gap-2 sm:flex ${expanded ? 'block' : 'hidden'} sm:block`}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
            <a href="/" className={`rounded-full px-4 py-2 text-sm font-medium transition ${theme === 'dark' ? 'text-slate-100 hover:bg-slate-800' : 'text-black hover:bg-zinc-100'}`}>
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
                <a href="#SpotifyPlaying" className={navLinkClass(location.hash === '#SpotifyPlaying')}>
                  {t('nav.spotifyPlaying')}
                </a>
                <a href="#contactProfile" className={navLinkClass(location.hash === '#contactProfile')}>
                  {t('nav.contact')}
                </a>
              </>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button onClick={toggleTheme} className={`rounded-2xl border p-2 transition ${navButtonClass}`}>
            <img src={theme === 'light' ? icon_moon : icon_sun} alt="Toggle theme" className="h-5 w-auto" />
          </button>
          <a href="https://www.facebook.com/vu.nghia.18062" className={`${navSocialClass}`}>
            <img src={navIcon1} alt="Facebook" className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
