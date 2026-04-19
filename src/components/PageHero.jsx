import FadeIn from './FadeIn';

export default function PageHero({ eyebrow, title, accent, intro, children }) {
  return (
    <section className="relative overflow-hidden hero-bg hero-grain pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="container-x relative text-center text-white">
        {eyebrow && (
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-blush mb-6">
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={120}>
          <h1 className="display-font text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-wide">
            {title} {accent && <span className="gold-text">{accent}</span>}
          </h1>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="gold-rule mx-auto w-40 mt-8" />
        </FadeIn>
        {intro && (
          <FadeIn delay={320}>
            <p className="mx-auto mt-8 max-w-3xl font-serif italic text-lg sm:text-xl text-white/85 leading-relaxed">
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
