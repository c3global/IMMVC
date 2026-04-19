import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS, MISSION, TOPICS } from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Movement"
        title="Not just a conference."
        accent="A movement."
        intro="Mamas and Mentors International is the home base for a global sisterhood — celebrating motherhood and otherhood at every stage of life."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
          Register Free
        </a>
        <Link to="/community" className="btn-ghost">Join the Community</Link>
      </PageHero>

      {/* WHAT WE ARE */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">What We Are</p>
            <h2 className="h-serif mt-4">
              The home base of a
              <span className="gold-text"> faith-led sisterhood.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              <strong>Mamas and Mentors International</strong> is a nonprofit
              organization, a movement, and a year-round community for women
              navigating every chapter of motherhood and otherhood — from the
              first positive test to the empty nest, from the longing to the
              loss, from the calling to the carrying.
            </p>
            <p>
              We exist because the women who hold everyone else together rarely
              get a place to be held. We are that place. Faith-led. Globally
              minded. Refreshingly real.
            </p>
            <p>
              Our flagship gathering, the International Mamas &amp; Mentors
              Virtual Conference (IMMVC), unites thousands of women across the
              world for two days of teaching, prayer, storytelling, and
              celebration — and our community keeps the conversation going all
              year long.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MISSION */}
      <section className="section bg-luxe-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative text-center max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-blush">The Mission</p>
            <h2 className="display-font text-5xl sm:text-6xl mt-4 leading-[1.05]">
              Celebrating motherhood and
              <span className="gold-text"> otherhood</span> at every stage of life.
            </h2>
            <GoldDivider className="mt-10" />
            <p className="mt-8 font-serif italic text-xl text-white/85 leading-relaxed">
              {MISSION}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TOPICS WE HOLD SPACE FOR */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">The Topics We Hold Space For</p>
            <h2 className="h-serif mt-4">
              Every chapter.
              <span className="gold-text"> Every woman.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <p className="mt-6 font-serif italic text-ink/70 text-lg">
              No topic is too tender. No story is too unfinished. If it’s real
              for you, it’s welcome here.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 50}>
                <div className="glam-card h-full text-center">
                  <span className="text-4xl">{t.emoji}</span>
                  <div className="gold-rule mx-auto mt-4 w-10" />
                  <h3 className="font-serif text-lg mt-4 text-ink/85">
                    {t.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MEET DR. CK */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border bg-gradient-to-br from-magenta via-coral to-teal shadow-luxe">
              <div className="absolute inset-0 bg-magenta-glow opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center">
                <span className="display-font text-9xl gold-text leading-none">CK</span>
                <div className="gold-rule mt-6 w-32" />
                <p className="font-serif italic text-xl mt-6 max-w-xs">
                  “When mamas and mentors unite, we build bridges.”
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 space-y-6">
            <p className="eyebrow">Meet The Founder</p>
            <h2 className="h-serif">
              Dr. Charity C. Campbell-Kapela,
              <span className="gold-text"> DM</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.22em] text-magenta font-bold">
              Global Leadership Expert · Cultural Intelligence Consultant ·
              Mama · Mentor · Motivator
            </p>
            <div className="gold-rule w-24" />
            <div className="space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Dr. CK is a powerhouse educator, speaker, and global connector
                who has lived and worked in over <strong>30 countries</strong>.
                With a doctorate in Global Leadership and 20+ years teaching
                and mentoring across cultures, she has built her life’s work
                on a single conviction: women were never meant to do this
                alone.
              </p>
              <p>
                She is the founder of <strong>Mamas and Mentors
                International</strong> and the host of the <strong>Beyond
                Borders</strong> podcast — a faith-driven, globally-minded
                space for women navigating leadership, identity, and legacy.
              </p>
              <p>
                Above all, Dr. CK is a proud wife, mother, and spiritual
                leader. Her heart is for women — and her life is the proof.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a href={LINKS.PODCAST} target="_blank" rel="noreferrer" className="btn-dark">
                Listen to Beyond Borders →
              </a>
              <Link to="/connect" className="btn-ghost text-ink border-ink/30 hover:border-gold">
                Book Dr. CK
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden py-24 sm:py-28 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="display-font text-5xl sm:text-7xl leading-[1.05]">
              This isn’t just a conference —
              <span className="block gold-text">it’s a movement.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ghost">Explore IMMVC 2026 →</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
