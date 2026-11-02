import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LINKS } from '../data/content';

const KEY = 'mm_release_popup_dismissed';
const DELAY_MS = 5000;

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
  const [mode, setMode] = useState(null); // null | 'side' | 'exit'
  const [gone, setGone] = useState(false);

  // The conference page keeps its own registration focus.
  const suppressed = pathname.startsWith('/immvc');

  useEffect(() => {
    if (suppressed || gone || wasDismissed()) return undefined;
    const t = setTimeout(() => setMode((m) => m || 'side'), DELAY_MS);
    // Exit intent (desktop): the pointer leaves through the top of the window.
    const onOut = (e) => {
      if (e.relatedTarget === null && e.clientY <= 0) setMode('exit');
    };
    document.addEventListener('mouseout', onOut);
    return () => {
      clearTimeout(t);
      document.removeEventListener('mouseout', onOut);
    };
  }, [suppressed, gone]);

  useEffect(() => {
    if (suppressed) setMode(null);
  }, [suppressed]);

  useEffect(() => {
    if (mode !== 'exit') return undefined;
    const onKey = (e) => e.key === 'Escape' && dismiss();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mode]);

  const dismiss = () => {
    rememberDismissed();
    setMode(null);
    setGone(true);
  };

  if (!mode || gone) return null;
  const exit = mode === 'exit';

  const card = (
    <aside
      role="dialog"
      aria-label="The Release app, Early Beta"
      className={
        exit
          ? 'relative w-full max-w-[440px] animate-fadeUp overflow-hidden rounded-2xl bg-ink text-white shadow-luxe'
          : 'fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-[380px] animate-fadeUp overflow-hidden rounded-2xl bg-ink text-white shadow-luxe sm:bottom-6 sm:right-6'
      }
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
        className={`block w-full object-cover object-top ${exit ? "h-[315px]" : "h-[272px]"}`}
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

  if (!exit) return card;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      {card}
    </div>
  );
}
