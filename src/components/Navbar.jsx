import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Wordmark from './Wordmark';
import { LINKS } from '../data/content';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/immvc', label: 'IMMVC' },
  { to: '/community', label: 'Community' },
  { to: '/resources', label: 'Resource Hub' },
  { to: '/connect', label: 'Connect' },
];

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
          ? 'bg-ink/85 backdrop-blur-xl border-b border-gold/30'
          : 'bg-gradient-to-b from-ink/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Mamas & Mentors International home">
          <Wordmark tone="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-gold transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={LINKS.REGISTER}
            className="btn-primary text-[11px]"
            target="_blank"
            rel="noreferrer"
          >
            Register Free
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-white"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-full bg-white transition-all ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-px w-full bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-px w-full bg-white transition-all ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        } bg-ink/95 backdrop-blur-xl border-t border-gold/20`}
      >
        <nav className="container-x flex flex-col py-6 gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block py-3 text-base font-semibold uppercase tracking-[0.18em] border-b border-white/5 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={LINKS.REGISTER}
            className="btn-primary mt-5 self-start"
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
