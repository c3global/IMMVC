import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import QuoteCard from '../components/QuoteCard';
import {
  LINKS,
  FAQS,
  TIERS,
  CONFERENCE_HISTORY,
  MISSION_DR_CK,
  CONF,
  EARLY_BIRD,
} from '../data/content';

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
      <button onClick={onClick} className="w-full flex items-start justify-between gap-6 py-6 text-left">
        <span className="editorial text-xl sm:text-2xl text-ink/90">{q}</span>
        <span
          className={`mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-magenta transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          style={{ border: '2px solid var(--c-gold)' }}
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-ink/75 leading-relaxed text-base sm:text-lg max-w-3xl">
          {a}
        </p>
      </div>
    </div>
  );
}

function TierCard({ tier }) {
  const isFeatured = tier.accent === 'magenta';
  const baseClass =
    tier.accent === 'magenta'
      ? 'card-magenta'
      : tier.accent === 'teal'
      ? 'card-teal'
      : 'card-light';
  const ctaClass =
    tier.accent === 'light' ? 'btn-ink' : 'btn-light';
  const href = LINKS[tier.href];

  return (
    <div className={`${baseClass} relative h-full flex flex-col`}>
      {isFeatured && (
        <span
          className="absolute right-6 top-6 rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.32em]"
          style={{ border: '2px solid var(--c-gold)', color: '#ffe6a8' }}
        >
          Best Value
        </span>
      )}
      <p className={`eyebrow ${tier.accent === 'light' ? 'text-magenta' : 'text-white/85'}`}>
        {tier.name}
      </p>
      <p className={`display-font text-7xl mt-4 ${tier.accent === 'light' ? 'text-ink' : ''}`}
        style={tier.accent !== 'light' ? { color: '#ffe6a8' } : {}}
      >
        {tier.price}
      </p>
      <p className={`editorial italic mt-2 ${tier.accent === 'light' ? 'text-ink/70' : 'text-white/95'}`}>
        {tier.tagline}
      </p>
      <div className="gold-line mt-6 w-20" />

      {tier.plusLabel && (
        <p className={`mt-6 text-[11px] uppercase tracking-[0.22em] font-bold ${tier.accent === 'light' ? 'text-magenta' : 'text-white/85'}`}>
          {tier.plusLabel}
        </p>
      )}

      <ul className={`mt-${tier.plusLabel ? '4' : '8'} space-y-3 ${tier.accent === 'light' ? 'text-ink/80' : 'text-white/95'}`}>
        {tier.perks.map((p) => (
          <li key={p} className="flex gap-3">
            <span
              className={`mt-1 ${tier.accent === 'light' ? 'text-magenta' : ''}`}
              style={tier.accent !== 'light' ? { color: '#ffe6a8' } : {}}
            >
              ✓
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {tier.bonusBlurb && (
        <div
          className="mt-6 rounded-2xl px-4 py-3 text-sm"
          style={{
            background: 'rgba(255, 230, 168, 0.18)',
            border: '1px solid rgba(212, 175, 55, 0.6)',
            color: '#fff',
          }}
        >
          {tier.bonusBlurb}
        </div>
      )}

      <div className="mt-auto pt-8">
        <a href={href} target="_blank" rel="noreferrer" className={`${ctaClass} w-full`}>
          {tier.cta} →
        </a>
        <p
          className={`mt-3 text-[10px] uppercase tracking-[0.28em] text-center ${
            tier.accent === 'light' ? 'text-ink/45' : 'text-white/65'
          }`}
        >
          Value: <span className="line-through">{tier.valueAmount}</span>
        </p>
      </div>
    </div>
  );
}

export default function IMMVC() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHero
        tone="magenta"
        eyebrow="The International Mamas & Mentors Virtual Conference"
        title="IMMVC"
        accent={CONF.year}
        intro={`${CONF.dates} — virtual, international, and free to attend. Three days of stories from across the world.`}
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
          Register Free
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost-light">
          Go VIP — $147
        </a>
        <a href={LINKS.SCHEDULE} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
          View Schedule →
        </a>
      </PageHero>

      {/* EARLY BIRD BANNER */}
      <section className="bg-white -mt-14 relative z-10">
        <div className="container-x">
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-3xl px-6 py-5 sm:px-10 sm:py-6 max-w-4xl mx-auto bg-ink text-white"
              style={{ border: '2px solid var(--c-gold)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="eyebrow" style={{ color: '#ffe6a8' }}>
                    🌟 Early Bird · IMMVC 2027
                  </p>
                  <p className="editorial text-lg sm:text-xl mt-1 text-white">
                    Register {EARLY_BIRD.windowLabel}
                    <span className="text-white/60 font-sans not-italic text-[11px] uppercase tracking-[0.22em] ml-2 block sm:inline">
                      {EARLY_BIRD.windowDetail}
                    </span>
                  </p>
                </div>
                <a
                  href={LINKS.REGISTER}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-magenta text-[10px]"
                >
                  Get Early Bird Access →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LIVE ARENA — for already-registered attendees */}
      <section className="bg-white pt-10 pb-0">
        <div className="container-x">
          <FadeIn>
            <a
              href={LINKS.LIVE_ARENA}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-3xl px-6 py-5 sm:px-8 sm:py-6 bg-ink text-white max-w-4xl mx-auto"
              style={{ border: '2px solid var(--c-gold)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="absolute inset-0 rounded-full bg-magenta animate-ping opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-magenta" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-blush">Already registered?</p>
                    <p className="editorial text-lg sm:text-xl mt-1 text-white truncate">
                      Enter the Live Arena <span className="text-white/60 font-sans not-italic text-[11px] uppercase tracking-[0.22em] ml-2">live.mamasandmentors.com</span>
                    </p>
                  </div>
                </div>
                <span className="display-font text-xs uppercase tracking-[0.32em] text-[var(--c-gold-light)] group-hover:text-white transition shrink-0">
                  Enter →
                </span>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* MOTHER'S DAY INSIGHT */}
      <section className="bg-white pt-10 pb-0">
        <div className="container-x">
          <FadeIn>
            <QuoteCard
              quote="Mother’s Day can be a trigger. For the woman who can’t become a mother. For the woman who just lost one. For the woman who lost a child. For the single mom who feels burnt out. We exist to show another woman she is not alone."
              attribution="— The reason IMMVC exists"
              accent="magenta"
              className="mx-auto max-w-4xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* WHAT IS IMMVC */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow-magenta">What Is IMMVC?</p>
            <h2 className="h-serif mt-4 text-ink">
              The annual flagship event of
              <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> Mamas &amp; Mentors International.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              IMMVC is the International Mamas &amp; Mentors Virtual
              Conference — a global, three-day gathering of women across
              continents, generations, and life stages. It happens on
              <strong> Mother’s Day weekend</strong> on purpose.
            </p>
            <p>
              Main sessions are <strong>pre-recorded</strong> for international
              accessibility. Supplemental activities — Q&amp;A, networking,
              prayer &amp; encouragement, breakout lounges — are{' '}
              <strong>live</strong>. Virtual Lounge access stays open during
              the conference and for <strong>3 days after</strong> each session.
            </p>
            <p className="editorial italic text-2xl text-magenta">
              {MISSION_DR_CK}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONFERENCE HISTORY TIMELINE */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">The Story So Far</p>
            <h2 className="h-display mt-4 text-ink">
              A vision that
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                wouldn’t die.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {CONFERENCE_HISTORY.map((m, i) => {
              const isPause = m.year.includes('–') && m.year.includes('2');
              const isUpcoming = m.upcoming;
              const cls = isUpcoming
                ? 'card-magenta'
                : isPause
                ? 'card-light'
                : i % 2 === 0
                ? 'card-teal'
                : 'card-light';
              const isLight = cls === 'card-light';
              return (
                <FadeIn key={m.year} delay={i * 70}>
                  <div className={`${cls} h-full`}>
                    {isUpcoming && (
                      <span
                        className="absolute right-4 top-4 rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.28em]"
                        style={{ border: '2px solid var(--c-gold)', color: '#ffe6a8' }}
                      >
                        Upcoming
                      </span>
                    )}
                    <p className={`display-font text-5xl leading-none ${isLight ? 'text-magenta' : ''}`}>
                      {m.year}
                    </p>
                    <div
                      className="mt-3 w-12 h-px"
                      style={{
                        background: isLight ? 'var(--c-gold)' : 'rgba(255,255,255,0.6)',
                      }}
                    />
                    <h3 className={`editorial text-lg mt-4 ${isLight ? 'text-ink' : ''}`}>
                      {m.headline}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isLight ? 'text-ink/75' : 'text-white/90'}`}>
                      {m.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMMVC 2027 DETAILS */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-teal">IMMVC {CONF.year}</p>
            <h2 className="h-display mt-4 text-ink">
              Save the dates.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Save your seat.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <p className="mt-6 editorial italic text-ink/65 text-lg">
              {CONF.datesLong}
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'When', value: CONF.dates },
              { label: 'Where', value: CONF.location },
              { label: 'Format', value: CONF.format },
              { label: 'Lounge', value: CONF.lounge },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                <div className="card-light text-center h-full">
                  <p className="eyebrow-magenta">{item.label}</p>
                  <p className="editorial text-xl mt-3 text-ink/90">{item.value}</p>
                  <div className="gold-line mx-auto mt-4 w-10" />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 text-center">
              <a
                href={LINKS.SCHEDULE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magenta"
              >
                View the Full {CONF.year} Schedule →
              </a>
              <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-ink/55">
                immvc.mamasandmentors.com/schedule2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TICKETS — three tiers */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">Ticket Options</p>
            <h2 className="h-display mt-4 text-ink">
              Free for all.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Glorious for VIPs.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {TIERS.map((tier, i) => (
              <FadeIn key={tier.key} delay={i * 100}>
                <TierCard tier={tier} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="eyebrow-magenta">FAQs</p>
            <h2 className="h-serif mt-4 text-ink">
              The honest
              <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> answers.</span>
            </h2>
            <div className="gold-line mt-6 w-32" />
            <div className="mt-6">
              <a href={LINKS.EMAIL} className="btn-ink">Ask a Question →</a>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-8">
            <div>
              {FAQS.map((f, i) => (
                <FAQItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-28 bg-ink text-white">
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <h2 className="h-display">
              Three days. One movement.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                Your seat is waiting.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-magenta">
                Register Free
              </a>
              <Link to="/about" className="btn-ghost-light">Read Dr. CK’s Story →</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
