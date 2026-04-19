import FadeIn from './FadeIn';

export default function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  children,
  tone = 'ink',
}) {
  const bg = {
    ink: 'hero-ink text-white',
    blush: 'hero-blush text-ink',
    teal: 'hero-teal text-white',
  }[tone];

  return (
    <section className={`relative overflow-hidden ${bg} pt-36 pb-24 sm:pt-40 sm:pb-28 grain`}>
      <div className="container-x relative text-center">
        {eyebrow && (
          <FadeIn>
            <p className={`text-[11px] uppercase tracking-[0.38em] mb-6 ${tone === 'blush' ? 'text-magenta' : 'text-blush'}`}>
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={120}>
          <h1 className="h-hero">
            {title} {accent && <span className="gold-text">{accent}</span>}
          </h1>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="gold-rule mx-auto w-40 mt-8" />
        </FadeIn>
        {intro && (
          <FadeIn delay={320}>
            <p className={`mx-auto mt-8 max-w-3xl font-serif italic text-lg sm:text-xl leading-relaxed ${tone === 'blush' ? 'text-ink/75' : 'text-white/85'}`}>
              {intro}
            </p>
          </FadeIn>
        )}
        {children && (
          <FadeIn delay={420}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
