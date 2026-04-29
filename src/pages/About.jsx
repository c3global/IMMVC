import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import Photo from '../components/Photo';
import QuoteCard from '../components/QuoteCard';
import {
  LINKS,
  ABOUT_INTRO,
  ABOUT_BODY,
  ABOUT_TAGLINE,
  MISSION,
  STOCK_PHOTOS,
} from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        tone="magenta"
        eyebrow="About"
        title="Not a conference."
        accent="A movement."
        intro="Mamas and Mentors International is the home base for a faith-led, globally-minded community of women — celebrating motherhood and otherhood at every stage of life."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
          Register Free
        </a>
        <Link to="/community-lounges" className="btn-ghost-light">Join the Community →</Link>
      </PageHero>

      {/* WHO WE ARE */}
      <section className="bg-white -mt-14 relative z-10">
        <div className="container-x">
          <FadeIn>
            <QuoteCard
              quote={ABOUT_TAGLINE}
              attribution="Mamas & Mentors International"
              accent="magenta"
              className="mx-auto max-w-3xl"
            />
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow-magenta">Welcome</p>
            <h2 className="h-serif mt-4 text-ink">
              A community that goes
              <span className="block editorial italic" style={{ color: 'var(--c-gold-dark)' }}>
                beyond the highlight reel.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>{ABOUT_INTRO}</p>
            <p>{ABOUT_BODY}</p>
            <p className="editorial italic text-2xl text-magenta">{ABOUT_TAGLINE}</p>
          </FadeIn>
        </div>
      </section>

      {/* MISSION — magenta block */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />

        <div className="container-x relative text-center max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-white/85">The Mission</p>
            <h2 className="h-display mt-4">
              Celebrating motherhood and otherhood
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                at every stage of life.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <p className="mt-8 editorial italic text-xl text-white/95 leading-relaxed">
              {MISSION}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MEET DR. CK */}
      <section className="section bg-blush-soft">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <Photo
              src={STOCK_PHOTOS.drCK}
              ratio="4/5"
              tone="magenta"
              alt="Dr. Charity C. Campbell-Kapela — stock placeholder"
            />
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 space-y-5">
            <p className="eyebrow-magenta">Meet The Founder</p>
            <h2 className="h-display text-ink">
              Dr. Charity C. Campbell-Kapela,
              <span className="editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}> DM</span>
            </h2>
            <p className="text-[11px] uppercase tracking-[0.24em] text-magenta font-bold">
              Global Leadership Expert · Cultural Intelligence Consultant ·
              Mama · Mentor · Motivator
            </p>
            <div className="gold-line w-32" />
            <div className="space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Dr. CK is a powerhouse educator, speaker, and global connector
                who has lived and worked in over <strong>30 countries</strong>.
                She holds a Doctorate in Global Leadership and has spent
                20+ years teaching and mentoring across cultures.
              </p>
              <p>
                She is the founder of Mamas and Mentors International —
                faith-driven, with a deep heart for women. A proud wife,
                mother, and spiritual leader, Dr. CK has built her life’s work
                on a simple conviction: women were never meant to do this
                alone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-ink text-white">
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <h2 className="h-display">
              This isn’t just a conference —
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                it’s a movement.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-magenta">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ghost-light">IMMVC 2026 →</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
