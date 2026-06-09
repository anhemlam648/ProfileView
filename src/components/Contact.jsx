import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemContext } from './context/ThemProvider';
import NavBar from './NavBar';
import Image from '../assets/img/floating-cyberpunk.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemContext);

  const headingColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const bodyText = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const detailsText = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const cardStyle = theme === 'dark' ? 'border-slate-800 bg-slate-900 text-white shadow-black/20' : 'border-zinc-100 bg-white text-slate-900 shadow-zinc-200/30';
  const imageCardStyle = theme === 'dark' ? 'bg-slate-950 shadow-slate-900/40' : 'bg-slate-50 shadow-slate-200/50';
  const linkStyle = theme === 'dark' ? 'text-slate-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <NavBar />
      <main className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col items-center justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className={`grid w-full gap-10 rounded-[2rem] border p-8 shadow-2xl sm:grid-cols-[0.9fr_1.1fr] ${cardStyle}`}>
          <div className="flex flex-col justify-center gap-6">
            <p className={`text-sm uppercase tracking-[0.4em] ${theme === 'dark' ? 'text-slate-400' : 'text-zinc-500'}`}>{t('contact.title')}</p>
            <h1 className={`text-4xl font-semibold sm:text-5xl ${headingColor}`}>{t('contact.connect')}</h1>
            <p className={`max-w-xl text-base leading-8 ${bodyText}`}>{t('contact.description')}</p>
            <div className={`space-y-4 text-sm ${detailsText}`}>
              <p>
                <span className="font-semibold">{t('contact.email')}:</span> vunghia467@gmail.com
              </p>
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{t('contact.facebook')}:</span>
                <a href="https://www.facebook.com/vu.nghia.18062" target="_blank" rel="noreferrer" className={`${linkStyle} transition`}>
                  VuNghia
                </a>
              </p>
            </div>
          </div>

          <div className={`overflow-hidden rounded-[1.75rem] p-4 shadow-inner ${imageCardStyle}`}>
            <img src={Image} alt="Cyberpunk" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
