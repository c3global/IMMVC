import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import ImageSlot from '../components/ImageSlot';
import {
  LINKS,
  TAGLINE,
  MISSION,
  TOPICS,
  WHO_ITS_FOR,
  TESTIMONIALS,
} from '../data/content';

export default function Home() {
  const heroBgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroBgRef.current) return;
      const y = window.scrollY;
      heroBgRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[92svh] flex items-center grain">
        <div ref={heroBgRef} className="absolute inset-0 -z-10 hero-ink will-change-transform" />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center pt-32 pb-20 text-white">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="eyebrow text-blush mb-6">{TAGLINE}</p>
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="h-hero">
                Motherhood <span className="text-blush italic font-serif font-normal">&amp;</span> Otherhood,
                <span className="block gold-text">Celebrated.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="gold-rule w-40 mt-8" />
            </FadeIn>
            <FadeIn delay={320}>
              <p className="mt-8 max-w-xl font-serif italic text-lg text-white/85 leading-relaxed">
                {MISSION}
              </p>
            </FadeIn>
            <FadeIn delay={440}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                  Register Free
                </a>
                <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
                  Go VIP — $147
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="lg:col-span-5">
            <ImageSlot
              tone="dark"
              ratio="4/5"
              label="Hero visual"
              description="Brand photography of Dr. CK / community, 4:5 portrait"
            />
          </FadeIn>
        </div>
      </section>

      {/* WHAT IS MAMAS & MENTORS */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">Who We Are</p>
            <h2 className="h-serif mt-4">
              Mamas and Mentors International is a faith-led nonprofit —
              <span className="gold-text"> and a movement.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              We celebrate motherhood and otherhood at every stage of life — the
              good, the bad, the ups, the downs, the messy, the pretty — and
              everything in between.
            </p>
            <p>
              This is a global community for the mama, the mentor, and every
              woman navigating a season she didn’t choose. Warm, celebratory,
              and real — because we don’t shy away from the hard chapters.
            </p>
            <div className="pt-4">
              <Link to="/about" className="btn-dark">Our Story →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EVERY CHAPTER BELONGS HERE */}
      <section className="section relative overflow-hidden bg-blush-fade">
        <div className="container-x relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Every Chapter Belongs Here</p>
            <h2 className="h-serif mt-4">
              The good, the bad, the messy,
              <span className="gold-text"> the pretty.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <p className="mt-6 font-serif italic text-ink/70 text-lg">
              A visual representation of the topics this community covers.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 50}>
                <div className="glam-card h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{t.emoji}</span>
                    <div>
                      <h3 className="font-serif text-xl text-ink/90">{t.title}</h3>
                      <div className="gold-rule mt-3 w-12" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">Who Is This For?</p>
            <h2 className="h-serif mt-4">
              For the mama. For the mentor.
              <span className="gold-text"> For every woman in between.</span>
            </h2>
            <GoldDivider center={false} className="mt-6" />
            <p className="mt-6 font-serif italic text-ink/70 text-lg">
              You do not have to be a mother or mentor to belong here.
            </p>
          </FadeIn>

          <div className="lg:col-span-7 space-y-4">
            {WHO_ITS_FOR.map((line, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="glam-card flex gap-5 items-start">
                  <span className="font-serif text-3xl text-magenta leading-none mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-serif text-lg leading-relaxed text-ink/85">
                    {line}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMMVC 2026 HIGHLIGHT */}
      <section className="relative overflow-hidden py-24 sm:py-32 grain">
        <div className="absolute inset-0 hero-ink" />
        <div className="container-x relative text-white">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7">
              <p className="eyebrow text-blush">IMMVC 2026</p>
              <h2 className="h-display mt-4">
                The annual flagship conference of
                <span className="gold-text"> Mamas &amp; Mentors International.</span>
              </h2>
              <GoldDivider center={false} className="mt-8" />
              <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                <strong>May 9–10, 2026.</strong> Two days, 100% virtual,
                international. Free general access. VIP $147.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                  Register Free
                </a>
                <Link to="/immvc" className="btn-ghost">
                  Conference Details →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <div className="luxe-card text-center">
                <p className="eyebrow text-blush">Save the Dates</p>
                <p className="display-font text-6xl mt-4 gold-text">May 9–10</p>
                <p className="font-serif text-2xl mt-2 text-white/90">2026</p>
                <GoldDivider className="my-6" />
                <ul className="space-y-3 text-sm text-white/80 text-left">
                  <li>✦ 100% Virtual · International</li>
                  <li>✦ Free general access</li>
                  <li>✦ VIP Pass — $147</li>
                  <li>✦ Live Q&amp;A + networking</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ASSESSMENT TEASER */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-white gold-border"
              style={{ background: 'linear-gradient(135deg, #052e33 0%, #079fa6 100%)' }}
            >
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-cyan">Take the Assessment</p>
                  <h2 className="h-serif mt-4">
                    Which season of mama or mentor
                    <span className="gold-text"> are you in?</span>
                  </h2>
                  <p className="mt-6 text-white/90 leading-relaxed max-w-xl">
                    A free reflection tool to help you name where you are and
                    what you need next.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:text-right">
                  <a href={LINKS.ASSESSMENT} target="_blank" rel="noreferrer" className="btn-primary">
                    Start the Assessment →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Testimonials</p>
            <h2 className="h-serif mt-4">
              What our community
              <span className="gold-text"> is saying.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <figure className="glam-card h-full">
                  <span className="font-serif text-6xl text-magenta leading-none">“</span>
                  <blockquote className="-mt-4 font-serif text-xl sm:text-2xl text-ink/85 leading-snug italic">
                    {t.quote}
                  </blockquote>
                  <div className="gold-rule my-6 w-16" />
                  <figcaption className="text-sm uppercase tracking-[0.22em]">
                    <span className="text-magenta font-bold">{t.name}</span>
                    <span className="text-ink/50"> · {t.role}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28 grain">
        <div className="absolute inset-0 hero-ink" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <p className="eyebrow text-blush">Your Seat Is Waiting</p>
            <h2 className="h-display mt-4">
              Register Now.
              <span className="block gold-text">Celebrate every chapter.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Register Free
              </a>
              <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
                Go VIP — $147
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
