import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { LINKS, NAV_PRIMARY } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--c-gold)]/40 shadow-[0_4px_20px_-12px_rgba(20,16,27,0.15)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <Link to="/" aria-label="Mamas & Mentors International home" className="shrink-0">
          <Logo variant="color" height={scrolled ? 44 : 52} className="transition-all duration-500" />
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV_PRIMARY.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 whitespace-nowrap ${
                  isActive ? 'text-magenta' : 'text-ink/75 hover:text-magenta'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 h-[2px] w-6 -translate-x-1/2 transition-opacity duration-300`}
                    style={{
                      background: 'var(--c-gold)',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a
            href={LINKS.REGISTER}
            className="btn-magenta text-[11px]"
            target="_blank"
            rel="noreferrer"
          >
            Register Free
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--c-gold)] text-ink"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3 w-5">
            <span className={`absolute left-0 top-0 h-[2px] w-full bg-ink transition-all ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-[2px] w-full bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-[2px] w-full bg-ink transition-all ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-[var(--c-gold)]/40`}
      >
        <nav className="container-x flex flex-col py-6 gap-1">
          {NAV_PRIMARY.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block py-3 text-base font-bold uppercase tracking-[0.18em] border-b border-ink/5 ${
                  isActive ? 'text-magenta' : 'text-ink/80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={LINKS.REGISTER}
            className="btn-magenta mt-5 self-start"
            target="_blank"
            rel="noreferrer"
          >
            Register Free
          </a>
        </nav>
      </div>
    </header>
  );
}
