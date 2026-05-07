// Shared layout for all four topic pages. Receives a topic config from
// content.js (TOPIC_PAGES) plus a stock photo + accent palette.

import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import Photo from './Photo';
import QuoteCard from './QuoteCard';
import { LINKS } from '../data/content';

export default function TopicPage({ topic, photo, accent = 'magenta' }) {
  const heroBg =
    accent === 'teal' ? 'bg-stage-teal' : 'bg-stage-pink';

  return (
    <>
      {/* HERO — color-blocked */}
      <section className={`relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 ${heroBg} text-white`}>
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow text-white/85 mb-5">{topic.eyebrow}</p>
            <h1 className="h-hero">
              {topic.title}
              {topic.accent && (
                <>
                  {' '}<span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                    {topic.accent}
                  </span>
                </>
              )}
            </h1>
            <div className="gold-line w-40 mt-8" />
            <p className="mt-8 max-w-xl editorial italic text-lg sm:text-xl text-white/95 leading-relaxed">
              {topic.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
                Register Free
              </a>
              <Link to="/community-lounges" className="btn-ghost-light">
                Find Your Lounge →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <Photo
              photo={photo}
              alt={`${topic.eyebrow} — brand photography`}
              ratio="4/5"
              tone={accent === 'teal' ? 'magenta' : 'teal'}
            />
          </FadeIn>
        </div>
      </section>

      {/* QUOTE CARD — gold-framed signature element */}
      <section className="bg-white -mt-14 relative z-10">
        <div className="container-x">
          <FadeIn>
            <QuoteCard
              quote={topic.quote}
              attribution="Mamas & Mentors International"
              accent={accent === 'teal' ? 'magenta' : 'teal'}
              className="mx-auto max-w-3xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* SECTIONS — each sub-topic */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12">
            {topic.sections.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <FadeIn key={s.title} delay={i * 80}>
                  <div className={`grid lg:grid-cols-12 gap-10 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <div className="lg:col-span-5">
                      <span
                        className="display-font text-7xl block leading-none"
                        style={{
                          color: accent === 'teal' ? 'var(--c-teal)' : 'var(--c-magenta)',
                        }}
                      >
                        {s.eyebrow}
                      </span>
                      <div className="gold-line w-20 mt-4" />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <h2 className="h-section">{s.title}</h2>
                      <p className="text-lg leading-relaxed text-ink/80">{s.body}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — saturated block with gold trim */}
      <section className={`relative overflow-hidden py-20 sm:py-24 ${accent === 'teal' ? 'bg-stage-pink' : 'bg-stage-teal'} text-white`}>
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <p className="eyebrow text-white/85">Your Seat Is Waiting</p>
            <h2 className="h-display mt-4">Real Women. Real Stories. Real Support.</h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
                Register Free
              </a>
              <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost-light">
                Go VIP — $147
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
