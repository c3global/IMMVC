import { Link } from 'react-router-dom';
import Logo from './Logo';
import { LINKS, NAV_PRIMARY, NAV_SECONDARY } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 gold-line" />

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Logo variant="white" height={64} />
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            A faith-led community celebrating motherhood and otherhood at every
            stage of life — the good, the bad, the messy, the pretty, and
            everything in between.
          </p>
          <p className="font-serif italic text-base text-blush">
            Push, pour, and prosper together.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow-blush mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {NAV_PRIMARY.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-[var(--c-gold-light)] transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="eyebrow-blush mb-4">More</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {NAV_SECONDARY.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-[var(--c-gold-light)] transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow-blush mb-4">Stay Close</h4>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href={LINKS.EMAIL} className="hover:text-[var(--c-gold-light)] transition">hello@mamasandmentors.com</a></li>
            <li><a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-[var(--c-gold-light)] transition">Instagram · @immvc2026</a></li>
            <li><a href={LINKS.TIKTOK} target="_blank" rel="noreferrer" className="hover:text-[var(--c-gold-light)] transition">TikTok · @immvc2026</a></li>
            <li><a href={LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-[var(--c-gold-light)] transition">Facebook · Dr. Charity TV</a></li>
            <li><a href={LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-[var(--c-gold-light)] transition">YouTube · Dr. Charity TV</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6 text-[11px] uppercase tracking-[0.22em] text-white/55 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mamas and Mentors International — All Rights Reserved</p>
        <p className="text-blush/85">Founded by Dr. Charity C. Campbell-Kapela, DM</p>
      </div>
    </footer>
  );
}
