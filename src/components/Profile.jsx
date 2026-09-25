import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar';
import Footer from './Footer';
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
  const [workspaceVariant, setWorkspaceVariant] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageVariant((value) => (value === 1 ? 2 : 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWorkspaceVariant((value) => (value + 1) % 3);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const revealFallback = window.setTimeout(() => {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }, 1200);

    return () => {
      window.clearTimeout(revealFallback);
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
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
              <div data-reveal className={`reveal-item inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${badgeStyle}`}>
                <span className={`status-dot h-2 w-2 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-green-500'}`} />
                {t('profile.webDeveloper')}
              </div>
              <div data-reveal className="reveal-item reveal-delay-1 space-y-4">
                <h1 className={`max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${textColor}`}>
                  {t('profile.typing-text1')}
                  <span className={`block sm:inline sm:ml-3 ${mutedText}`}>{t('profile.typing-text2')}</span>
                </h1>
                <p id="description" className={`max-w-3xl text-base leading-7 ${mutedText}`}>
                  {t(`profile.description${imageVariant}`)}
                </p>
              </div>

              <div data-reveal className="reveal-item reveal-delay-3 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className={`rounded-[1.5rem] border p-6 shadow-xl backdrop-blur-sm ${cardStyle}`}>
                    <p className={`text-3xl font-semibold ${textColor}`}>{stat.value}</p>
                    <p className={`mt-2 text-sm uppercase tracking-[0.24em] ${secondaryText}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="reveal-item reveal-delay-2 relative">
              <div className={`absolute -inset-4 rounded-[2.5rem] ${heroOverlay}`} />
              <div className={`web-showcase relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl ${cardStyle}`}>
                <div className="browser-bar flex items-center gap-2 rounded-t-[1.35rem] px-4 py-3">
                  <span className="browser-dot bg-red-400" />
                  <span className="browser-dot bg-amber-400" />
                  <span className="browser-dot bg-emerald-400" />
                  <span className="ml-3 hidden flex-1 rounded-full bg-white/10 px-4 py-1 text-[10px] tracking-[0.18em] text-white/60 sm:block">VUNGHIA.DESIGN / WORKSPACE</span>
                </div>
                <div className="relative overflow-hidden rounded-b-[1.35rem] bg-slate-950">
                  <div className={`hero-workspace hero-workspace-${workspaceVariant}`} aria-label="Rotating web workspace preview">
                    {workspaceVariant === 0 && (
                      <>
                        <div className="visual-topline"><span /> <span /> <span /></div>
                        <div className="visual-balance"><small>Total balance</small><strong>$24,680</strong><i>+12.8%</i></div>
                        <div className="visual-bars"><span /><span /><span /><span /><span /></div>
                        <div className="visual-row"><b /><em /><b /><em /></div>
                      </>
                    )}
                    {workspaceVariant === 1 && (
                      <>
                        <div className="visual-studio-orb" />
                        <div className="visual-studio-copy"><small>NEW COLLECTION</small><strong>Shape<br />your story.</strong><span>Explore the work ↗</span></div>
                        <div className="visual-studio-card"><i /></div>
                      </>
                    )}
                    {workspaceVariant === 2 && (
                      <>
                        <div className="visual-analytics-head"><span /><span /><span /></div>
                        <div className="visual-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                        <div className="visual-metrics"><span /><span /><span /></div>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Selected workspace</p>
                      <p className="mt-1 text-xl font-semibold">{['Finance workspace', 'Creative studio', 'Operations hub'][workspaceVariant]}</p>
                    </div>
                    <span className="rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">Live build</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-3 top-24 rounded-2xl border border-cyan-300/30 bg-slate-950/80 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-cyan-200 shadow-xl backdrop-blur-md">
                  UI system
                </div>
                <div className="pointer-events-none absolute -left-3 bottom-24 rounded-2xl border border-fuchsia-300/30 bg-slate-950/80 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-fuchsia-200 shadow-xl backdrop-blur-md">
                  Responsive
                </div>
                <div className={`mt-3 rounded-2xl p-4 shadow-inner ${infoPanelStyle}`}>
                  <p id="yearold" className={`text-sm uppercase tracking-[0.28em] ${secondaryText}`}>{t('profile.yearsOld')}</p>
                  <p id="location" className={`mt-2 text-lg font-semibold ${textColor}`}>{t(`profile.location${imageVariant}`)}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="AboutProfile" className="grid gap-6 lg:grid-cols-3">
            <div data-reveal className={`reveal-item rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.aboutMe')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.welcome')}</p>
            </div>
            <div data-reveal className={`reveal-item reveal-delay-1 rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.workTogether')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.quote')}</p>
            </div>
            <div data-reveal className={`reveal-item reveal-delay-2 rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
              <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.hobbies')}</h2>
              <p className={`mt-4 leading-7 ${mutedText}`}>{t('profile.quoteAuthor')}</p>
            </div>
          </div>

          <section data-reveal className={`reveal-item capability-panel rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="capability-product" aria-label="Software product dashboard mockup">
                <div className="capability-product-bar">
                  <span className="browser-dot bg-red-400" />
                  <span className="browser-dot bg-amber-400" />
                  <span className="browser-dot bg-emerald-400" />
                  <span className="capability-product-url">product.workspace</span>
                </div>
                <div className="capability-product-body">
                  <aside className="capability-sidebar">
                    <strong>W.</strong>
                    <span className="capability-sidebar-active" />
                    <span />
                    <span />
                    <span />
                  </aside>
                  <div className="capability-dashboard">
                    <div className="capability-dashboard-head"><div><small>PRODUCT OVERVIEW</small><b>Good morning, builder</b></div><i>LIVE</i></div>
                    <div className="capability-metrics"><span><small>Active users</small><b>24.8k</b><em>+18.4%</em></span><span><small>Conversion</small><b>68.2%</b><em>+9.6%</em></span></div>
                    <div className="capability-chart"><small>Growth activity</small><div><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
                    <div className="capability-dashboard-footer"><span /><span /><span /></div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${secondaryText}`}>{t('profile.professionalLabel')}</p>
                  <h2 className={`mt-3 text-2xl font-semibold leading-tight ${textColor}`}>{t('profile.professionalTitle')}</h2>
                  <p className={`mt-4 text-base leading-7 ${mutedText}`}>{t('profile.professionalDescription')}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { mark: 'code', title: t('profile.frontendTitle'), description: t('profile.frontendDesc') },
                  { mark: 'layers', title: t('profile.uiSystemTitle'), description: t('profile.uiSystemDesc') },
                  { mark: 'bolt', title: t('profile.performanceTitle'), description: t('profile.performanceDesc') },
                ].map((skill) => (
                  <div key={skill.title} className={`rounded-2xl border px-4 py-3 ${theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`capability-mark capability-mark-${skill.mark}`} aria-hidden="true" />
                      <div>
                        <h3 className={`text-sm font-semibold ${textColor}`}>{skill.title}</h3>
                        <p className={`mt-1 text-xs leading-5 ${mutedText}`}>{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </section>

          <section id="ProjectsProfile" data-reveal className={`reveal-item rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
            <div>
                  <h2 className={`text-xl font-semibold uppercase tracking-[0.18em] ${textColor}`}>{t('profile.projectsTitle')}</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { label: t('profile.projectOneLabel'), title: t('profile.projectOneTitle'), visual: 'finance' },
                { label: t('profile.projectTwoLabel'), title: t('profile.projectTwoTitle'), visual: 'studio' },
                { label: t('profile.projectThreeLabel'), title: t('profile.projectThreeTitle'), visual: 'analytics' },
              ].map((project) => (
                <article key={project.visual} className={`project-card rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between">
                    <span className="project-label">{project.label}</span>
                    <span className="project-menu">•••</span>
                  </div>
                  <div className={`project-visual project-visual-${project.visual} mt-5`} aria-hidden="true">
                    {project.visual === 'finance' && (
                      <>
                        <div className="visual-topline"><span /> <span /> <span /></div>
                        <div className="visual-balance"><small>Total balance</small><strong>$24,680</strong><i>+12.8%</i></div>
                        <div className="visual-bars"><span /><span /><span /><span /><span /></div>
                        <div className="visual-row"><b /><em /><b /><em /></div>
                      </>
                    )}
                    {project.visual === 'studio' && (
                      <>
                        <div className="visual-studio-orb" />
                        <div className="visual-studio-copy"><small>NEW COLLECTION</small><strong>Shape<br />your story.</strong><span>Explore the work ↗</span></div>
                        <div className="visual-studio-card"><i /></div>
                      </>
                    )}
                    {project.visual === 'analytics' && (
                      <>
                        <div className="visual-analytics-head"><span /><span /><span /></div>
                        <div className="visual-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                        <div className="visual-metrics"><span /><span /><span /></div>
                      </>
                    )}
                  </div>
                  <h3 className={`mt-5 text-base font-semibold ${textColor}`}>{project.title}</h3>
                </article>
              ))}
            </div>
          </section>
          <div id="contactProfile" data-reveal className={`reveal-item reveal-delay-1 rounded-[2rem] border p-8 shadow-xl ${cardStyle}`}>
            <h2 className={`text-xl font-semibold ${textColor}`}>{t('profile.contactMe')}</h2>
            <p className={`mt-4 text-base leading-7 ${mutedText}`}>{t('profile.welcome')}</p>
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
