import FadeIn from './FadeIn';

// Color-blocked talk-show hero used across secondary pages.
// tone: 'magenta' | 'teal' | 'ink' — picks the saturated background.
export default function PageHero({ eyebrow, title, accent, intro, children, tone = 'magenta' }) {
  const bg = {
    magenta: 'bg-stage-pink',
    teal: 'bg-stage-teal',
    ink: 'bg-ink',
  }[tone];

  return (
    <section className={`relative overflow-hidden ${bg} text-white pt-32 pb-24 sm:pt-40 sm:pb-28`}>
      <span className="gold-vert-line" style={{ left: '8%' }} />
      <span className="gold-vert-line" style={{ right: '8%' }} />

      <div className="container-x relative text-center">
        {eyebrow && (
          <FadeIn>
            <p className="eyebrow text-white/85 mb-6">{eyebrow}</p>
          </FadeIn>
        )}
        <FadeIn delay={120}>
          <h1 className="h-hero">
            {title}
            {accent && (
              <>
                {' '}<span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                  {accent}
                </span>
              </>
            )}
          </h1>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="gold-line mx-auto w-40 mt-8" />
        </FadeIn>
        {intro && (
          <FadeIn delay={320}>
            <p className="mx-auto mt-8 max-w-3xl editorial italic text-lg sm:text-xl text-white/95 leading-relaxed">
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
