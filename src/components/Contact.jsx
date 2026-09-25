import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemContext } from './context/ThemProvider';
import NavBar from './NavBar';
import ContactVisual from '../assets/img/contact-img.svg';

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemContext);

  const headingColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const detailsText = theme === 'dark' ? 'text-slate-200' : 'text-slate-800';
  const cardStyle = theme === 'dark' ? 'border-slate-800 bg-slate-900 text-white shadow-black/20' : 'border-slate-200 bg-white text-slate-950 shadow-slate-300/20';
  const mutedPanel = theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <NavBar />
      <main className="contact-page mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <section className={`contact-shell grid w-full overflow-hidden rounded-[2.25rem] border shadow-2xl ${cardStyle}`}>
          <div className="contact-copy flex flex-col justify-between gap-12 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="contact-kicker">{t('contact.title')}</p>
              <h2 className={`mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl ${headingColor}`}>{t('contact.connect')}</h2>
            </div>

            <div className="space-y-4">
              <a href="mailto:vunghia467@gmail.com" className={`contact-link group ${mutedPanel}`}>
                <span className="contact-link-mark">@</span>
                <span className="min-w-0 flex-1">
                  <span className="contact-link-label">{t('contact.email')}</span>
                  <span className={`block truncate text-sm ${detailsText}`}>vunghia467@gmail.com</span>
                </span>
                <span className="contact-link-arrow">-&gt;</span>
              </a>
              <a href="https://www.facebook.com/vu.nghia.18062" target="_blank" rel="noreferrer" className={`contact-link group ${mutedPanel}`}>
                <span className="contact-link-mark">f</span>
                <span className="min-w-0 flex-1">
                  <span className="contact-link-label">{t('contact.facebook')}</span>
                  <span className={`block text-sm ${detailsText}`}>VuNghia</span>
                </span>
                <span className="contact-link-arrow">-&gt;</span>
              </a>
            </div>
          </div>

          <div className="contact-visual relative flex min-h-[28rem] items-end overflow-hidden p-6 sm:p-10">
            <div className="contact-visual-glow" />
            <img src={ContactVisual} alt="Creative workspace illustration" className="contact-illustration" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
