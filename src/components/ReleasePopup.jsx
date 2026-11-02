import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LINKS } from '../data/content';

const KEY = 'mm_release_popup_dismissed';
const DELAY_MS = 14000;

function wasDismissed() {
  try {
    return window.localStorage.getItem(KEY) === '1';
  } catch (e) {
    return false;
  }
}

function rememberDismissed() {
  try {
    window.localStorage.setItem(KEY, '1');
  } catch (e) {
    /* storage unavailable, popup simply shows again next visit */
  }
}

export default function ReleasePopup() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [gone, setGone] = useState(false);

  // The conference page keeps its own registration focus.
  const suppressed = pathname.startsWith('/immvc');

  useEffect(() => {
    if (suppressed || gone || wasDismissed()) return undefined;
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [suppressed, gone]);

  useEffect(() => {
    if (suppressed) setVisible(false);
  }, [suppressed]);

  const dismiss = () => {
    rememberDismissed();
    setVisible(false);
    setGone(true);
  };

  if (!visible || gone) return null;

  return (
    <aside
      role="dialog"
      aria-label="The Release app, Early Beta"
      className="fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-[380px] animate-fadeUp overflow-hidden rounded-2xl bg-ink text-white shadow-luxe sm:bottom-6 sm:right-6"
      style={{ border: '2px solid var(--c-gold)' }}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-lg leading-none text-white backdrop-blur transition hover:bg-magenta"
      >
        ×
      </button>

      <img
        src="/release/release-prayer-card.webp"
        alt="The Release: An honest prayer"
        className="block h-[272px] w-full object-cover object-top"
        loading="lazy"
      />

      <div className="space-y-3 p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blush">
          The Release · Early Beta
        </p>
        <h3 className="font-serif text-2xl leading-tight">
          For everything you have been carrying.
        </h3>
        <p className="text-sm leading-relaxed text-white/80">
          Some days you do not have the words, and that is okay. The Release helps you turn
          what you are holding into honest prayer and hopeful words, so you can set it down
          and keep going. Early Beta access is $7 through November 7.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a href={LINKS.RELEASE} className="btn-magenta text-[11px]" onClick={rememberDismissed}>
            Get Early Beta Access
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
          >
            Maybe later
          </button>
        </div>
      </div>
    </aside>
  );
}
