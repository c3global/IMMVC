import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
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

  // Subtle parallax on hero background
  useEffect(() => {
    const onScroll = () => {
      if (!heroBgRef.current) return;
      const y = window.scrollY;
      heroBgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[100svh] flex items-center hero-grain">
        <div
          ref={heroBgRef}
          className="absolute inset-0 -z-10 hero-bg will-change-transform"
        />
        <div className="absolute inset-x-0 top-[60%] -z-10 h-[600px] bg-magenta-glow opacity-70 blur-3xl" />

        <div className="container-x text-center text-white pt-32 pb-20">
          <FadeIn>
            <p className="eyebrow text-blush mb-6">{TAGLINE}</p>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="display-font text-6xl sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-wide">
              Motherhood
              <span className="block">
                <span className="gold-text">&amp; Otherhood,</span>
              </span>
              <span className="block">Celebrated.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={260}>
            <div className="gold-rule mx-auto w-44 mt-10" />
          </FadeIn>

          <FadeIn delay={340}>
            <p className="mx-auto mt-8 max-w-3xl font-serif italic text-lg sm:text-xl text-white/85 leading-relaxed">
              {MISSION}
            </p>
          </FadeIn>

          <FadeIn delay={460}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={LINKS.REGISTER}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Register Free
              </a>
              <a
                href={LINKS.VIP}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Go VIP — $147
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={620}>
            <div className="mt-20 flex flex-col items-center gap-2 text-blush/70">
              <span className="text-[10px] uppercase tracking-[0.4em]">
                Scroll to belong
              </span>
              <span className="block h-12 w-px bg-gradient-to-b from-gold to-transparent animate-floaty" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT IS MAMAS & MENTORS */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">Who We Are</p>
            <h2 className="h-serif mt-4">
              A movement for the women who hold everyone else
              <span className="gold-text"> together.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              <strong>Mamas and Mentors International</strong> is a faith-led
              nonprofit and global community for the mama, the mentor, and every
              woman in between. We hold space for the chapters no one wants to
              talk about — and the chapters worth shouting about — at every
              stage of life.
            </p>
            <p>
              We are not a mommy blog. We are not a one-size-fits-all event.
              We are a sisterhood that crosses generations, geographies, and
              gender roles, and we believe that when women are restored, whole
              cultures rise with them.
            </p>
            <div className="pt-4">
              <Link to="/about" className="btn-dark">Read Our Story →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EVERY CHAPTER BELONGS HERE */}
      <section className="section relative overflow-hidden bg-luxe-dark text-white">
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-blush">Every Chapter Belongs Here</p>
            <h2 className="display-font text-5xl sm:text-6xl mt-4">
              The good, the bad, the messy,
              <span className="gold-text"> the pretty.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <p className="mt-6 font-serif italic text-white/80 text-lg">
              These are some of the rooms we hold space for. If yours isn’t
              listed — there is still a seat with your name on it.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 60}>
                <div className="luxe-card group h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{t.emoji}</span>
                    <div>
                      <h3 className="font-serif text-xl text-white group-hover:text-gold transition">
                        {t.title}
                      </h3>
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
      <section className="section bg-blush-fade relative overflow-hidden">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Who Is This For?</p>
            <h2 className="h-serif mt-4">
              You belong here if
              <span className="gold-text"> you’ve ever loved a woman.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map((line, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="glam-card h-full">
                  <span className="display-font text-5xl text-magenta">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="gold-rule mt-3 mb-5 w-10" />
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
      <section className="relative overflow-hidden py-24 sm:py-32 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative text-white">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7">
              <p className="eyebrow text-blush">IMMVC 2026</p>
              <h2 className="display-font text-5xl sm:text-6xl mt-4 leading-[1.02]">
                The flagship conference,
                <span className="gold-text"> reimagined.</span>
              </h2>
              <GoldDivider center={false} className="mt-8" />
              <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                Two days. Hundreds of women. One movement. Join us
                <strong> May 9–10, 2026</strong> for the International Mamas
                &amp; Mentors Virtual Conference — global, intimate, and
                radically free to attend.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={LINKS.REGISTER}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Register Free
                </a>
                <Link to="/immvc" className="btn-ghost">
                  See VIP Details →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-5">
              <div className="luxe-card text-center">
                <p className="eyebrow text-blush">Mark your calendar</p>
                <p className="display-font text-7xl mt-4 gold-text">May 9–10</p>
                <p className="font-serif text-2xl mt-2 text-white/90">2026</p>
                <GoldDivider className="my-6" />
                <ul className="space-y-3 text-sm text-white/80">
                  <li>🌍 100% Virtual · International</li>
                  <li>🎟️ Free general access</li>
                  <li>👑 VIP Pass — $147</li>
                  <li>💬 Live Q&amp;A &amp; networking</li>
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
            <div className="relative overflow-hidden rounded-3xl bg-luxe-dark p-10 sm:p-16 text-white shadow-luxe gold-border">
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-magenta/40 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-blush">Take the Assessment</p>
                  <h2 className="h-serif mt-4">
                    Which season of mama or mentor
                    <span className="gold-text"> are you in?</span>
                  </h2>
                  <p className="mt-6 text-white/85 leading-relaxed">
                    A free, soul-honest reflection tool to help you name where
                    you are — and what you actually need next. No fluff. No
                    funnel. Just clarity.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:text-right">
                  <a
                    href={LINKS.ASSESSMENT}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Start the Assessment →
                  </a>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-blush/70">
                    Free · 5 minutes · Your eyes only
                  </p>
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
            <p className="eyebrow">In Their Words</p>
            <h2 className="h-serif mt-4">
              The room remembers
              <span className="gold-text"> the women in it.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <figure className="glam-card h-full">
                  <span className="display-font text-7xl text-magenta leading-none">
                    “
                  </span>
                  <blockquote className="-mt-6 font-serif text-xl sm:text-2xl text-ink/85 leading-snug italic">
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
      <section className="relative overflow-hidden py-24 sm:py-32 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <p className="eyebrow text-blush">Your Seat Is Waiting</p>
            <h2 className="display-font text-5xl sm:text-7xl mt-4 leading-[1.02]">
              Come as you are.
              <span className="block gold-text">Leave restored.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={LINKS.REGISTER}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Register Now
              </a>
              <a
                href={LINKS.VIP}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Become a VIP
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
