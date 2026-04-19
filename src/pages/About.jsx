import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import ImageSlot from '../components/ImageSlot';
import { LINKS, MISSION, TOPICS } from '../data/content';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Not a conference."
        accent="A movement."
        intro="Mamas and Mentors International is the organizational home base for a faith-led, globally-minded community of women."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
          Register Free
        </a>
        <Link to="/community" className="btn-ghost">Join the Community</Link>
      </PageHero>

      {/* WHAT IS MAMAS AND MENTORS INTERNATIONAL */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">What Is Mamas &amp; Mentors International?</p>
            <h2 className="h-serif mt-4">
              The nonprofit, the story,
              <span className="gold-text"> and the heart.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Mamas and Mentors International is a faith-led nonprofit and
              year-round community for the mama, the mentor, and every woman
              navigating a season she didn’t choose.
            </p>
            <p>
              We celebrate motherhood and otherhood at every stage of life —
              the good, the bad, the ups, the downs, the messy, the pretty —
              and everything in between.
            </p>
            <p>
              Our flagship gathering, the International Mamas &amp; Mentors
              Virtual Conference (IMMVC), unites women across continents every
              May for two days of teaching, prayer, storytelling, and
              celebration. The community keeps the conversation going all year.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE MISSION */}
      <section className="section bg-blush-fade relative overflow-hidden">
        <div className="container-x relative text-center max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow">The Mission</p>
            <h2 className="h-display mt-4">
              Celebrating motherhood and otherhood
              <span className="gold-text"> at every stage of life.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <p className="mt-8 font-serif italic text-xl text-ink/75 leading-relaxed">
              {MISSION}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE TOPICS WE HOLD SPACE FOR */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">The Topics We Hold Space For</p>
            <h2 className="h-serif mt-4">
              Every chapter.
              <span className="gold-text"> Every woman.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <p className="mt-6 font-serif italic text-ink/70 text-lg">
              No topic is too tender. No story is too unfinished.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 40}>
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
      <section className="section bg-luxe-dark text-white relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <ImageSlot
              tone="dark"
              ratio="4/5"
              label="Dr. CK portrait"
              description="Editorial portrait of Dr. Charity C. Campbell-Kapela · 4:5"
            />
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 space-y-6">
            <p className="eyebrow text-blush">Meet The Founder</p>
            <h2 className="h-display">
              Dr. Charity C. Campbell-Kapela,
              <span className="gold-text"> DM</span>
            </h2>
            <p className="text-[11px] uppercase tracking-[0.24em] text-blush font-bold">
              Global Leadership Expert · Cultural Intelligence Consultant ·
              Mama · Mentor · Motivator
            </p>
            <GoldDivider center={false} className="mt-2" />
            <div className="space-y-4 text-lg leading-relaxed text-white/85">
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
      <section className="relative overflow-hidden py-24 sm:py-28 grain">
        <div className="absolute inset-0 hero-ink" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="h-display">
              This isn’t just a conference —
              <span className="block gold-text">it’s a movement.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ghost">IMMVC 2026 Details →</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
