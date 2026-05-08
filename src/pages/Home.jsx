import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Photo from '../components/Photo';
import QuoteCard from '../components/QuoteCard';
import {
  LINKS,
  HERO_HEADLINE_LINES,
  HERO_SUB,
  ABOUT_INTRO,
  ABOUT_BODY,
  ABOUT_TAGLINE,
  WHO_ITS_FOR,
  TESTIMONIALS,
  TOPIC_PAGES,
  PHOTOS,
  TAGLINE,
  WELCOME_GORGEOUS,
  MISSION_DR_CK,
} from '../data/content';

const TOPIC_LIST = [
  { slug: 'motherhood', accent: 'magenta' },
  { slug: 'mentorship', accent: 'teal' },
  { slug: 'healing', accent: 'magenta' },
  { slug: 'grief', accent: 'teal' },
];

export default function Home() {
  return (
    <>
      {/* HERO — color-blocked talk-show set */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white">
        {/* Background color blocks (responsive) */}
        <div className="absolute inset-y-0 left-0 w-[18%] bg-stage-pink hidden lg:block" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-stage-teal hidden lg:block" aria-hidden="true" />
        <span className="gold-vert-line hidden lg:block" style={{ left: '18%' }} />
        <span className="gold-vert-line hidden lg:block" style={{ right: '18%' }} />

        {/* Mobile color stripe */}
        <div className="absolute top-0 inset-x-0 h-2 lg:hidden" style={{ background: 'linear-gradient(90deg, #db3d9e 0%, #079fa6 100%)' }} aria-hidden="true" />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7 text-center lg:text-left">
            <p className="eyebrow-magenta mb-6">{TAGLINE}</p>
            <h1 className="h-hero text-ink">
              {HERO_HEADLINE_LINES.map((line, i) => (
                <span key={i} className="block">
                  {line.replace('Stories.', '')}
                  {line.includes('Stories.') && (
                    <span className="editorial italic font-normal normal-case tracking-normal text-magenta">Stories.</span>
                  )}
                </span>
              ))}
            </h1>
            <div className="gold-line w-40 mt-8 mx-auto lg:mx-0" />
            <p className="mt-8 max-w-xl editorial italic text-lg sm:text-xl text-ink/75 leading-relaxed mx-auto lg:mx-0">
              {HERO_SUB}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-magenta">
                Register Free
              </a>
              <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ink">
                Go VIP — $147
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="lg:col-span-5">
            <Photo photo={PHOTOS.homeHero} ratio="4/5" alt="Mamas & Mentors community" />
          </FadeIn>
        </div>
      </section>

      {/* ABOUT INTRO — bright, with brand tagline highlight */}
      <section className="section bg-blush-soft">
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
            <p className="editorial italic text-2xl text-magenta">
              {ABOUT_TAGLINE}
            </p>
            <div className="pt-4">
              <Link to="/about" className="btn-light">Our Full Story →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHERE DO YOU BELONG — topic doors */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-teal">Find Your Door</p>
            <h2 className="h-display mt-4 text-ink">
              Every chapter
              <span className="block" style={{ color: 'var(--c-gold-dark)' }}>
                belongs here.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <p className="mt-6 editorial italic text-ink/65 text-lg max-w-2xl mx-auto">
              Pick the season you’re in. We’ll meet you there.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {TOPIC_LIST.map(({ slug, accent }, i) => {
              const t = TOPIC_PAGES[slug];
              return (
                <FadeIn key={slug} delay={i * 80}>
                  <Link
                    to={`/${t.slug}`}
                    className={`block ${accent === 'magenta' ? 'card-magenta' : 'card-teal'} group h-full`}
                  >
                    <p className="eyebrow text-white/85">{t.eyebrow}</p>
                    <h3 className="display-font text-4xl mt-4 leading-[0.95]">
                      {t.title} {t.accent && <span className="editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>{t.accent}</span>}
                    </h3>
                    <div className="mt-4 w-12 h-px" style={{ background: 'rgba(255,255,255,0.6)' }} />
                    <p className="mt-5 text-white/90 leading-relaxed">{t.intro}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-bold border-b border-white/40 group-hover:border-white pb-1 transition">
                      Step Inside →
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="section bg-blush-soft">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow-magenta">Who Is This For?</p>
            <h2 className="h-serif mt-4 text-ink">
              For the mama. For the mentor.
              <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> For every woman in between.</span>
            </h2>
            <div className="gold-line w-32 mt-6" />
            <p className="mt-6 editorial italic text-ink/70 text-lg">
              You do not have to be a mother or mentor to belong here.
            </p>
          </FadeIn>

          <div className="lg:col-span-7 space-y-4">
            {WHO_ITS_FOR.map((line, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card-light flex gap-5 items-start">
                  <span className="display-font text-5xl text-magenta leading-none mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="editorial text-lg leading-relaxed text-ink/85">
                    {line}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMMVC 2026 HIGHLIGHT — magenta block */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow text-white/85">IMMVC 2026</p>
            <h2 className="h-display mt-4">
              The annual flagship event
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                of Mamas &amp; Mentors.
              </span>
            </h2>
            <div className="gold-line w-40 mt-8" />
            <p className="mt-8 text-lg text-white/95 leading-relaxed max-w-2xl">
              <strong>May 5–7, 2027.</strong> Three days. 100% virtual.
              International. Free general access. Insider Pass $77. VIP $147.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ghost-light">
                Conference Details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-5">
            <div className="quote-card text-center">
              <p className="eyebrow-magenta">Save the Dates · IMMVC 2027</p>
              <p className="display-font text-7xl mt-4 text-ink">May 5–7</p>
              <p className="editorial text-2xl mt-2 text-ink/70">2027 · Wed–Fri</p>
              <div className="gold-line my-6 mx-auto w-24" />
              <ul className="space-y-2 text-sm text-ink/80 text-left">
                <li>✦ 100% Virtual · International</li>
                <li>✦ Free general access</li>
                <li>✦ Insider Pass — $77</li>
                <li>✦ VIP Swag Bag — $147</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VIP UPGRADE TEASER — teal block */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-white bg-stage-teal">
              <span className="gold-vert-line" style={{ left: '6%' }} />
              <span className="gold-vert-line" style={{ right: '6%' }} />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-white/90">Want the deepest experience?</p>
                  <h2 className="h-display mt-4">
                    Upgrade to VIP.
                    <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                      The most value ever given at IMMVC.
                    </span>
                  </h2>
                  <p className="mt-6 text-white/95 leading-relaxed max-w-xl">
                    Full replay library · Private community access · VIP
                    after-hours · Priority Q&amp;A · Resource Vault · VIP swag
                    bag. Just $147.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:text-right">
                  <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-light">
                    Upgrade to VIP — $147 →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS — gold-framed quote cards */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">Testimonials</p>
            <h2 className="h-serif mt-4 text-ink">
              What our community
              <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> is saying.</span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <QuoteCard
                  quote={t.quote}
                  attribution={`${t.name} · ${t.role}`}
                  accent={i === 0 ? 'magenta' : 'teal'}
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DR. CK MISSION (her words) */}
      <section className="section bg-white">
        <div className="container-x text-center max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow-magenta">From Dr. CK</p>
            <p className="mt-6 editorial italic text-2xl sm:text-3xl text-ink/85 leading-snug">
              {MISSION_DR_CK}
            </p>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-8">
              <Link to="/about" className="btn-ink">Read Dr. CK’s Story →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WELCOME GORGEOUS — signature closing */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <p className="eyebrow text-white/85">From Dr. CK</p>
            <h2
              className="display-font uppercase mt-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1, letterSpacing: '0.02em', color: '#ffe6a8' }}
            >
              {WELCOME_GORGEOUS}
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
