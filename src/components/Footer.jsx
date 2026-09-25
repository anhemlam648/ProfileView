import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemContext } from './context/ThemProvider';

const Footer = () => {
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
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vunghia467' },
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

        <div className="footer-workspace overflow-hidden rounded-[2rem] border p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:p-8">
          <div className="footer-workspace-head">
            <div>
              <h6>{t('footer.workspaceTitle')}</h6>
            </div>
            <span className="footer-workspace-status"><i /> {t('footer.workspaceStatus')}</span>
          </div>
          <div className="footer-workspace-scene" aria-label={t('footer.workspaceTitle')}>
            <div className="footer-grid-lines" />
            <div className="footer-orbit footer-orbit-one" />
            <div className="footer-orbit footer-orbit-two" />
            <div className="footer-node footer-node-one"><b>UI</b><span /></div>
            <div className="footer-node footer-node-two"><b>API</b><span /></div>
            <div className="footer-node footer-node-three"><b>UX</b><span /></div>
            <div className="footer-terminal">
              <div className="footer-terminal-bar"><span /><span /><span /><em>workspace.config</em></div>
              <div className="footer-terminal-code"><p><b>01</b> const product = <strong>'thoughtful'</strong>;</p><p><b>02</b> product.<strong>build</strong>({`{`}</p><p><b>03</b>&nbsp;&nbsp; interface: <strong>'clear'</strong>,</p><p><b>04</b>&nbsp;&nbsp; performance: <strong>'fast'</strong>,</p><p><b>05</b> {`}`});</p></div>
            </div>
            <div className="footer-stack-pill">{t('footer.workspaceStack')}</div>
          </div>
        </div>

        <p className="text-center text-sm text-current/80">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
