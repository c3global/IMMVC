import FadeIn from './FadeIn';
import { LINKS } from '../data/content';

const WIDGET_SRC = 'https://emb.fouita.com/widget/0x576085/ftwczt0v5';

const FOLLOW = [
  { label: 'Instagram', href: LINKS.INSTAGRAM },
  { label: 'TikTok', href: LINKS.TIKTOK },
  { label: 'Facebook', href: LINKS.FACEBOOK },
  { label: 'YouTube', href: LINKS.YOUTUBE },
];

export default function SocialWall() {
  return (
    <section className="section bg-blush-soft">
      <div className="container-x">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="eyebrow-magenta">Stay Close</p>
          <h2 className="h-serif mt-4 text-ink">
            Follow along
            <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> with us.</span>
          </h2>
          <p className="mt-5 text-ink/75 leading-relaxed">
            See what we are sharing right now, and come say hello. We would love to have you in the conversation.
          </p>
          <div className="gold-line mx-auto w-40 mt-8" />
        </FadeIn>

        <FadeIn delay={100}>
          <div
            className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl bg-white shadow-glam"
            style={{ border: '2px solid var(--c-gold)' }}
          >
            <iframe
              src={WIDGET_SRC}
              title="Mamas and Mentors social feed"
              width="100%"
              height="760"
              loading="lazy"
              style={{ border: 0, display: 'block' }}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {FOLLOW.map((f) => (
              <a
                key={f.label}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[var(--c-gold)] bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-[var(--c-gold)]"
              >
                {f.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
