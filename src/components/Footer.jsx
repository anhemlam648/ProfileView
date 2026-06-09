import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemContext } from './context/ThemProvider';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const { theme } = useContext(ThemContext);

  return (
    <footer className={`border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-950 text-slate-200' : 'border-zinc-100 bg-white text-slate-900'} py-12`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h5 className="text-xl font-semibold">{t('footer.contactInfo')}</h5>
            <p className="text-sm leading-7">{t('footer.address')}</p>
            <p className="text-sm leading-7">{t('footer.email')}</p>
          </div>
          <div className="space-y-4">
            <h6 className="text-lg font-semibold">{t('footer.usefulLinks')}</h6>
            <ul className="space-y-2 text-sm text-current">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/vu.nghia.18062' },
                { label: 'GitHub', href: 'https://github.com/anhemlam648' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vũ-nghĩa-9277bb350/' },
                { label: 'Instagram', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-2xl shadow-zinc-200/40 transition-transform duration-300 hover:-translate-y-1">
          <div
            className="overflow-hidden rounded-[1.5rem] transition-transform duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1.0)' }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="260"
              src="https://maps.google.com/maps?q=34/7%2C%20đường.%20Số%201A%2C%20P.%20Long%20Thạnh%20Mỹ%2C%20Q.%20Thủ%20Đức%2C%20TP.HCM&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[260px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-center text-sm text-current/80">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
