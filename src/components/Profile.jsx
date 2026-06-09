import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar';
import Footer from './Footer';
import Copied from '../assets/img/Copied.png';
import Pixel from '../assets/img/Pixel.jpg';
import Image from '../assets/img/Image.jpg';
import SpotifyPlayer from './SpotifyPlayer';
import { useNavigate } from 'react-router-dom';
import { ThemContext } from './context/ThemProvider';

const Profile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { theme } = useContext(ThemContext);

  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const mutedText = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const secondaryText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const badgeStyle = theme === 'dark' ? 'border-slate-700 bg-slate-800 text-white' : 'border-zinc-100 bg-zinc-50 text-slate-700';
  const cardStyle = theme === 'dark' ? 'border-slate-800 bg-slate-900 text-white shadow-black/20' : 'border-slate-200 bg-white shadow-slate-300/20 text-slate-950';
  const infoPanelStyle = theme === 'dark' ? 'bg-slate-950 text-white shadow-slate-900/40' : 'bg-slate-50 text-slate-700 shadow-slate-200/40';
  const heroOverlay = theme === 'dark' ? 'bg-gradient-to-br from-slate-800/60 to-slate-950/80' : 'bg-gradient-to-br from-slate-100/80 to-white/80';

  const [imageVariant, setImageVariant] = useState(1);
  const [heroImage, setHeroImage] = useState(Image);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageVariant((value) => (value === 1 ? 2 : 1));
      setHeroImage((current) => (current === Image ? Pixel : Image));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleCopied = () => {
    const yearEl = document.getElementById('yearold');
    const descEl = document.getElementById('description');
    const locationEl = document.getElementById('location');

    if (!yearEl || !descEl || !locationEl) return;

    const payload = `${t('profile.copyYearLabel')}: ${yearEl.innerText}\n${t('profile.copyDescriptionLabel')}: ${descEl.innerText}\n${t('profile.copyLocationLabel')}: ${locationEl.innerText}`;
    navigator.clipboard.writeText(payload).then(() => {
      alert(t('profile.copyRightAlert'));
    });
  };

  const stats = [
    { label: t('profile.webDeveloper'), value: '5+' },
    { label: t('profile.uiDesigner'), value: '4+' },
    { label: t('profile.uxDesigner'), value: '3+' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <NavBar />
      <main id="IntroductionProfile" className="relative overflow-hidden pt-28">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${badgeStyle}`}>
                <span className={`h-2 w-2 rounded-full ${theme === 'dark' ? 'bg-slate-500' : 'bg-zinc-500'}`} />
                {t('profile.webDeveloper')}
              </div>
              <div className="space-y-4">
                <h1 className={`max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${textColor}`}>
                  {t('profile.typing-text1')}
                  <span className={`block sm:inline sm:ml-3 ${mutedText}`}>{t('profile.typing-text2')}</span>
                </h1>
                <p id="description" className={`max-w-3xl text-base leading-8 sm:text-lg ${mutedText}`}>
                  {t(`profile.description${imageVariant}`)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleNavigate('/show')}
                  className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-500/20 transition hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  {t('profile.exploreMyCv')}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate('/contact')}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${theme === 'dark' ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700' : 'border-zinc-100 bg-white text-slate-900 hover:bg-zinc-50'}`}
                >
                  {t('profile.contactMe')}
                </button>
                <button
                  type="button"
                  onClick={handleCopied}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-lg transition ${theme === 'dark' ? 'bg-slate-800 text-white shadow-black/20 hover:bg-slate-700' : 'bg-slate-100 text-slate-900 shadow-slate-300/20 hover:bg-slate-200'}`}
                  aria-label="Copy profile text"
                >
                  <img src={Copied} alt="Copy" className="h-6 w-6" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className={`rounded-[1.5rem] border p-6 shadow-xl backdrop-blur-sm ${cardStyle}`}>
                    <p className={`text-3xl font-semibold ${textColor}`}>{stat.value}</p>
                    <p className={`mt-2 text-sm uppercase tracking-[0.24em] ${secondaryText}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`absolute -inset-4 rounded-[2.5rem] ${heroOverlay}`} />
              <div className={`relative overflow-hidden rounded-[2rem] border p-4 shadow-2xl ${cardStyle}`}>
                <img src={heroImage} alt="Profile" className="h-full w-full rounded-[1.5rem] object-cover" />
                <div className={`mt-5 rounded-3xl p-4 shadow-inner ${infoPanelStyle}`}>
                  <p id="yearold" className={`text-sm uppercase tracking-[0.28em] ${secondaryText}`}>{t('profile.yearsOld')}</p>
                  <p id="location" className={`mt-2 text-lg font-semibold ${textColor}`}>{t(`profile.location${imageVariant}`)}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="AboutProfile" className="grid gap-6 lg:grid-cols-3">
            <div  className={`rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.aboutMe')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.welcome')}</p>
            </div>
            <div className={`rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.workTogether')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.quote')}</p>
              <button
                type="button"
                onClick={() => handleNavigate('/contact')}
                className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                {t('profile.contactMe')}
              </button>
            </div>
            <div className={`rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.hobbies')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.quoteAuthor')}</p>
            </div>
          </div>

          <div id="SpotifyPlaying" className={`rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
            <h2 className={`text-2xl font-semibold ${textColor}`}>{t('profile.hobbies')}</h2>
            <div className={`mt-8 rounded-[1.75rem] p-6 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
              <SpotifyPlayer />
            </div>
          </div>
          <div id="contactProfile" className={`rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
            <h2 className={`text-2xl font-semibold ${textColor}`}>{t('profile.contactMe')}</h2>
            <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.welcome')}</p>
            <button
              type="button"
              onClick={() => handleNavigate('/contact')}
              className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              {t('profile.contactMe')}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
