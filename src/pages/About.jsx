import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import Photo from '../components/Photo';
import QuoteCard from '../components/QuoteCard';
import {
  LINKS,
  DR_CK_INTRO,
  DR_CK_BIO,
  CONFERENCE_STORY,
  MISSION_DR_CK,
  WELCOME_GORGEOUS,
  PHOTOS,
} from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        tone="magenta"
        eyebrow="About"
        title="A vision God gave me"
        accent="ten years ago."
        intro="The story of Mamas and Mentors International — in Dr. CK’s own words."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
          Register Free
        </a>
        <Link to="/community-lounges" className="btn-ghost-light">Find Your Lounge →</Link>
      </PageHero>

      {/* DR. CK BIO */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <Photo
              photo={PHOTOS.aboutDrCK}
              ratio="4/5"
              tone="magenta"
              alt="Dr. Charity C. Campbell-Kapela"
            />
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 space-y-6">
            <p className="eyebrow-magenta">Meet Dr. CK</p>
            <h2 className="h-display text-ink">
              Dr. Charity
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Campbell-Kapela
              </span>
            </h2>
            <p className="text-[11px] uppercase tracking-[0.24em] text-magenta font-bold">
              Founder &amp; CEO, C3 Global Agency · IMMVC Host ·
              Author · Mama · Mentor
            </p>
            <div className="gold-line w-32" />
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              <p>{DR_CK_INTRO}</p>
              <p>{DR_CK_BIO}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IN HER OWN WORDS — origin story */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">A Little About the Conference</p>
            <h2 className="h-display mt-4 text-ink">
              In Dr. CK’s
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                own words.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-4 lg:sticky lg:top-32">
              <Photo
                photo={PHOTOS.aboutStory}
                ratio="4/5"
                tone="magenta"
                alt="Dr. CK · reflective portrait"
              />
              <div className="mt-6">
                <QuoteCard
                  quote="So welcome, gorgeous. You belong here."
                  attribution="— Dr. CK"
                  accent="magenta"
                />
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-8">
              <div className="space-y-5 text-lg leading-relaxed text-ink/85 editorial-body">
                {CONFERENCE_STORY.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 1
                        ? 'editorial italic text-2xl text-magenta'
                        : ''
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION — DR. CK'S OWN WORDS */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />
        <div className="container-x relative text-center max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-white/85">The Mission</p>
            <h2 className="h-display mt-4">
              A safe space to be mentored —
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                and to mentor others.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <p className="mt-8 editorial italic text-xl text-white/95 leading-relaxed">
              {MISSION_DR_CK}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CLOSING — WELCOME GORGEOUS */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="eyebrow-teal">From Dr. CK</p>
            <h2 className="display-font uppercase mt-4 text-magenta" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '0.02em' }}>
              {WELCOME_GORGEOUS}
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-magenta">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ink">IMMVC 2026 →</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
