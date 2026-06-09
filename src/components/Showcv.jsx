import cvImage from '../assets/img/CV_Vu_Trung_Nghia_Software.png';
import NavBar from './NavBar';
import { useContext } from 'react';
import { ThemContext } from './context/ThemProvider';

const Show_CV = () => {
  const { theme } = useContext(ThemContext);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <NavBar />
      <main className="mx-auto flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <section className={`w-full max-w-5xl rounded-[2rem] p-6 shadow-2xl sm:p-8 ${theme === 'dark' ? 'border-slate-800 bg-slate-900 text-white shadow-black/40' : 'border-zinc-100 bg-white text-slate-950 shadow-zinc-200/50'}`}>
          <div className={`mb-6 flex items-center justify-between gap-4 rounded-[1.75rem] p-6 shadow-inner ${theme === 'dark' ? 'bg-slate-950 text-white shadow-slate-900/40' : 'bg-zinc-50 text-slate-950 shadow-zinc-200/40'}`}>
            <div>
              <p className={`text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Curriculum Vitae</p>
              <h1 className="mt-3 text-3xl font-semibold">Vu Trung Nghia</h1>
              <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Software Engineer</p>
            </div>
            <div className={`inline-flex items-center gap-3 rounded-3xl px-4 py-3 text-sm shadow-lg ${theme === 'dark' ? 'bg-slate-800 text-white shadow-slate-900/40' : 'bg-zinc-100 text-slate-950 shadow-zinc-200/40'}`}>
              <span>{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
            </div>
          </div>

          <img src={cvImage} alt="CV" className={`mx-auto w-full rounded-[1.75rem] border p-4 shadow-2xl ${theme === 'dark' ? 'border-slate-800 bg-slate-950 shadow-slate-900/40' : 'border-slate-200 bg-slate-100 shadow-slate-200/40'}`} />
        </section>
      </main>
    </div>
  );
};

export default Show_CV;
