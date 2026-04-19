import { Link } from 'react-router-dom';
import Wordmark from './Wordmark';
import { LINKS } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 gold-rule opacity-80" />

      <div className="container-x relative grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Wordmark tone="light" />
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            A faith-led nonprofit celebrating motherhood and otherhood at every
            stage of life.
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 pt-2">
            Logo asset to be provided
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-blush mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/immvc" className="hover:text-gold transition">IMMVC 2026</Link></li>
            <li><Link to="/community" className="hover:text-gold transition">Community</Link></li>
            <li><Link to="/resources" className="hover:text-gold transition">Resource Hub</Link></li>
            <li><Link to="/connect" className="hover:text-gold transition">Connect</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-blush mb-4">Get Involved</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href={LINKS.REGISTER} className="hover:text-gold transition" target="_blank" rel="noreferrer">
                Register Free
              </a>
            </li>
            <li>
              <a href={LINKS.VIP} className="hover:text-gold transition" target="_blank" rel="noreferrer">
                Go VIP — $147
              </a>
            </li>
            <li>
              <a href={LINKS.ASSESSMENT} className="hover:text-gold transition" target="_blank" rel="noreferrer">
                Take the Assessment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-blush mb-4">Stay Close</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href={LINKS.EMAIL} className="hover:text-gold transition">hello@mamasandmentors.com</a></li>
            <li><a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold transition">Instagram · @immvc2026</a></li>
            <li><a href={LINKS.TIKTOK} target="_blank" rel="noreferrer" className="hover:text-gold transition">TikTok · @immvc2026</a></li>
            <li><a href={LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-gold transition">Facebook · Dr. Charity TV</a></li>
            <li><a href={LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="hover:text-gold transition">YouTube · Dr. Charity TV</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-8 text-xs uppercase tracking-[0.22em] text-white/50 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mamas and Mentors International — All Rights Reserved</p>
        <p className="text-blush/80">Founded by Dr. Charity C. Campbell-Kapela</p>
      </div>
    </footer>
  );
}
