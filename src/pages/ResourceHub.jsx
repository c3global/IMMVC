import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import ImageSlot from '../components/ImageSlot';
import { LINKS } from '../data/content';

const COMING_SOON = [
  {
    title: 'Speaker Resources',
    body: 'Curated tools, slides, and reflections from past IMMVC speakers — coming soon.',
  },
  {
    title: 'Workbooks & Guides',
    body: 'Printable journals, prayer prompts, and conversation starters built for every season.',
  },
  {
    title: 'Blog & Articles',
    body: 'A growing library of essays from the mamas and mentors of our community.',
  },
];

export default function ResourceHub() {
  return (
    <>
      <PageHero
        tone="teal"
        eyebrow="Resource Hub"
        title="Resources for every"
        accent="season of your journey."
        intro="A growing library of replays, tools, and reflections — for the mama, the mentor, and every woman in between."
      >
        <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-primary">
          Take the Assessment
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
          Unlock the Replay Library
        </a>
      </PageHero>

      {/* REPLAY LIBRARY + ASSESSMENT */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          {/* Replay Library */}
          <FadeIn>
            <div className="luxe-card h-full flex flex-col">
              <p className="eyebrow text-blush">Conference Replay Library</p>
              <h2 className="font-serif text-3xl mt-4">
                The full IMMVC archive — yours for a year.
              </h2>
              <GoldDivider center={false} className="mt-6" />
              <p className="mt-6 text-white/85 leading-relaxed">
                Instant access to <strong>2022, 2025, and 2026</strong>{' '}
                conference replays as soon as each conference wraps. $200
                value — included free with VIP.
              </p>
              <div className="mt-6">
                <ImageSlot
                  tone="dark"
                  ratio="16/9"
                  label="Replay library preview"
                  description="Mockup or screenshot of the replay portal"
                />
              </div>
              <div className="mt-auto pt-8">
                <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-primary w-full">
                  Unlock with VIP →
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Assessment */}
          <FadeIn delay={120}>
            <div className="glam-card h-full flex flex-col">
              <p className="eyebrow">The Assessment</p>
              <h2 className="font-serif text-3xl mt-4 text-ink/90">
                Which season of mama or mentor are you in?
              </h2>
              <GoldDivider center={false} className="mt-6" />
              <p className="mt-6 text-ink/75 leading-relaxed">
                A free reflection tool to help you name where you are — and
                what you need next.
              </p>
              <div className="mt-6">
                <ImageSlot
                  tone="light"
                  ratio="16/9"
                  label="Assessment preview"
                  description="Screenshot or illustration of the assessment experience"
                />
              </div>
              <div className="mt-auto pt-8">
                <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-dark w-full">
                  Start the Assessment →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">In the Works</p>
            <h2 className="h-serif mt-4">
              More resources,
              <span className="gold-text"> on the way.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMING_SOON.map((r, i) => (
              <FadeIn key={r.title} delay={i * 70}>
                <div className="glam-card h-full">
                  <div className="flex items-center justify-between">
                    <ImageSlot
                      tone="light"
                      ratio="1/1"
                      label=""
                      description=""
                      className="w-16 shrink-0"
                    />
                    <span className="rounded-full border border-[#b8913d]/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-magenta">
                      Coming Soon
                    </span>
                  </div>
                  <GoldDivider center={false} className="mt-5" />
                  <h3 className="font-serif text-2xl mt-5 text-ink/90">{r.title}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28 grain">
        <div className="absolute inset-0 hero-ink" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="h-display">
              Every season has a resource.
              <span className="block gold-text">Start here.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Register Free
              </a>
              <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-ghost">
                Take the Assessment
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
