import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS } from '../data/content';

const COMING_SOON = [
  {
    title: 'Speaker Resources',
    body: 'Curated tools, slides, and reflections from past IMMVC speakers — coming soon.',
    icon: '🎙️',
  },
  {
    title: 'Workbooks & Guides',
    body: 'Printable journals, prayer prompts, and conversation starters built for every season.',
    icon: '📓',
  },
  {
    title: 'Articles & Stories',
    body: 'A growing library of essays from the mamas and mentors of our community.',
    icon: '✍🏽',
  },
];

export default function ResourceHub() {
  return (
    <>
      <PageHero
        eyebrow="Resource Hub"
        title="For every season"
        accent="of your journey."
        intro="A growing library of tools, replays, and reflections to support the mama, the mentor, and the woman in the waiting."
      >
        <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-primary">
          Take the Assessment
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
          Unlock the Replay Library
        </a>
      </PageHero>

      {/* INTRO + ASSESSMENT */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          {/* Replay Library */}
          <FadeIn>
            <div className="luxe-card h-full flex flex-col">
              <p className="eyebrow text-blush">Replay Library</p>
              <h2 className="font-serif text-3xl mt-4">
                The full IMMVC archive — yours for a year.
              </h2>
              <div className="gold-rule mt-6 w-16" />
              <p className="mt-6 text-white/85 leading-relaxed">
                Instant access to <strong>2022, 2025, and 2026</strong>{' '}
                conference replays as soon as the conference wraps. Worth $200.
                Included free with VIP.
              </p>
              <ul className="mt-6 space-y-2 text-white/80 text-sm">
                <li>✦ Watch on your time, in your language, in your living room</li>
                <li>✦ Re-listen to the messages that move you</li>
                <li>✦ Share with your small group, your daughter, your friend</li>
              </ul>
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
              <div className="gold-rule mt-6 w-16" />
              <p className="mt-6 text-ink/75 leading-relaxed">
                A free, soul-honest reflection tool to help you name where you
                are — and what you actually need next. No fluff. No funnel. Just
                clarity, in 5 minutes.
              </p>
              <ul className="mt-6 space-y-2 text-ink/70 text-sm">
                <li>✦ Free forever</li>
                <li>✦ No email gymnastics</li>
                <li>✦ Personalized resource recommendations</li>
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={LINKS.ASSESSMENT}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark w-full"
                >
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
            <p className="mt-6 font-serif italic text-ink/70">
              We’re building this hub the way we build everything — with care.
              Here’s a peek at what’s coming.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMING_SOON.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <div className="glam-card h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{r.icon}</span>
                    <span className="rounded-full border border-gold/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-magenta">
                      Coming Soon
                    </span>
                  </div>
                  <div className="gold-rule mt-5 w-10" />
                  <h3 className="font-serif text-2xl mt-5 text-ink/90">{r.title}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="display-font text-5xl sm:text-6xl leading-[1.05]">
              Don’t walk this season alone.
              <span className="block gold-text">Walk it with us.</span>
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
