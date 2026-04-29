import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import Photo from '../components/Photo';
import { LINKS, STOCK_PHOTOS } from '../data/content';

const COMING_SOON = [
  { title: 'Speaker Resources', body: 'Curated tools, slides, and reflections from past IMMVC speakers.' },
  { title: 'Workbooks & Guides', body: 'Printable journals, prayer prompts, and conversation starters built for every season.' },
  { title: 'Blog & Articles', body: 'A growing library of essays from the mamas and mentors of our community.' },
];

export default function ResourceHub() {
  return (
    <>
      <PageHero
        tone="teal"
        eyebrow="Resource Hub"
        title="Resources for"
        accent="every season."
        intro="A growing library of replays, tools, and reflections — for the mama, the mentor, and every woman in between."
      >
        <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-light">
          Take the Assessment
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost-light">
          Unlock the Replay Library
        </a>
      </PageHero>

      {/* REPLAY LIBRARY + ASSESSMENT */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="card-magenta h-full flex flex-col">
              <p className="eyebrow text-white/85">Conference Replay Library</p>
              <h2 className="editorial text-3xl mt-4">
                The full IMMVC archive — yours for a year.
              </h2>
              <div className="gold-line mt-6 w-16" />
              <p className="mt-6 text-white/90 leading-relaxed">
                Instant access to <strong>2022, 2025, and 2026</strong>{' '}
                conference replays as soon as each conference wraps. $200
                value — included free with VIP.
              </p>
              <div className="mt-6">
                <Photo src={STOCK_PHOTOS.conference} ratio="16/9" tone="teal" alt="Replay library mockup — stock placeholder" />
              </div>
              <div className="mt-auto pt-8">
                <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-light w-full">
                  Unlock with VIP →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="card-light h-full flex flex-col">
              <p className="eyebrow-teal">The Assessment</p>
              <h2 className="editorial text-3xl mt-4 text-ink/90">
                Which season of mama or mentor are you in?
              </h2>
              <div className="gold-line mt-6 w-16" />
              <p className="mt-6 text-ink/75 leading-relaxed">
                A free reflection tool to help you name where you are — and
                what you need next.
              </p>
              <div className="mt-6">
                <Photo src={STOCK_PHOTOS.reflection} ratio="16/9" tone="magenta" alt="Assessment preview — stock placeholder" />
              </div>
              <div className="mt-auto pt-8">
                <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-ink w-full">
                  Start the Assessment →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">In the Works</p>
            <h2 className="h-display mt-4 text-ink">
              More resources,
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                on the way.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMING_SOON.map((r, i) => (
              <FadeIn key={r.title} delay={i * 70}>
                <div className="card-light h-full">
                  <div className="flex items-center justify-between">
                    <span className="display-font text-5xl text-magenta leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-magenta font-bold"
                      style={{ border: '2px solid var(--c-gold)' }}
                    >
                      Coming Soon
                    </span>
                  </div>
                  <div className="gold-line mt-5 w-12" />
                  <h3 className="editorial text-2xl mt-5 text-ink/90">{r.title}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <h2 className="h-display">
              Every season has a resource.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                Start here.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
                Register Free
              </a>
              <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-ghost-light">
                Take the Assessment
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
