import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import QuoteCard from '../components/QuoteCard';
import { LINKS, FAQS, VIP_PERKS, CONFERENCE_HISTORY, MISSION_DR_CK } from '../data/content';

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

export default function IMMVC() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHero
        tone="magenta"
        eyebrow="The International Mamas & Mentors Virtual Conference"
        title="IMMVC"
        accent="2026"
        intro="May 9–10, 2026 — virtual, international, and free to attend. The third year of stories that crush hearts and heal them in the same breath."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
          Register Free
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost-light">
          Go VIP — $147
        </a>
      </PageHero>

      {/* MOTHER'S DAY INSIGHT — the why */}
      <section className="bg-white -mt-14 relative z-10">
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
              Conference — a global, two-day gathering of women across
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

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONFERENCE_HISTORY.map((m, i) => {
              const isPause = m.year.includes('–');
              return (
                <FadeIn key={m.year} delay={i * 80}>
                  <div className={isPause ? 'card-light h-full' : i % 2 === 0 ? 'card-magenta h-full' : 'card-teal h-full'}>
                    <p
                      className={`display-font text-5xl leading-none ${
                        isPause ? 'text-magenta' : ''
                      }`}
                    >
                      {m.year}
                    </p>
                    <div
                      className="mt-3 w-12 h-px"
                      style={{ background: isPause ? 'var(--c-gold)' : 'rgba(255,255,255,0.6)' }}
                    />
                    <h3 className={`editorial text-xl mt-4 ${isPause ? 'text-ink' : ''}`}>
                      {m.headline}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isPause ? 'text-ink/75' : 'text-white/90'}`}>
                      {m.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMMVC 2026 DETAILS */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-teal">IMMVC 2026</p>
            <h2 className="h-display mt-4 text-ink">
              Save the dates.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Save your seat.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'When', value: 'May 9–10, 2026' },
              { label: 'Where', value: '100% Virtual · Global' },
              { label: 'Format', value: 'Pre-recorded + Live' },
              { label: 'Lounge', value: 'During + 3 days after' },
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
        </div>
      </section>

      {/* TICKETS */}
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

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* GENERAL */}
            <FadeIn>
              <div className="card-light h-full flex flex-col">
                <p className="eyebrow-magenta">General Access</p>
                <p className="display-font text-7xl mt-4 text-ink/90">FREE</p>
                <div className="gold-line mt-6 w-24" />
                <ul className="mt-8 space-y-4 text-ink/80">
                  <li className="flex gap-3"><span className="text-magenta mt-1">✦</span> Live access to all main sessions</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">✦</span> Interactive Q&amp;A participation</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">✦</span> Basic networking &amp; general chat access</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">✦</span> Digital conference workbook</li>
                </ul>
                <div className="mt-auto pt-10">
                  <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-ink w-full">
                    Register Free
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* VIP */}
            <FadeIn delay={120}>
              <div className="relative h-full flex flex-col rounded-3xl p-10 text-white overflow-hidden bg-stage-pink"
                style={{ boxShadow: '0 30px 70px -25px rgba(219,61,158,0.55), inset 0 0 0 2px var(--c-gold)' }}
              >
                <span className="absolute right-6 top-6 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.32em]"
                  style={{ border: '2px solid var(--c-gold)', color: '#ffe6a8' }}
                >
                  Best Value
                </span>
                <p className="eyebrow text-white/85">VIP Pass</p>
                <p className="display-font text-7xl mt-4" style={{ color: '#ffe6a8' }}>$147</p>
                <p className="editorial italic mt-2 text-white/95">
                  The most value ever given at IMMVC.
                </p>
                <div className="gold-line mt-6 w-24" />

                <ul className="mt-8 space-y-5 text-white/95">
                  {VIP_PERKS.map((perk) => (
                    <li key={perk.title} className="flex gap-3">
                      <span className="mt-1 text-lg">{perk.color === 'magenta' ? '🩷' : '🩵'}</span>
                      <div>
                        <p className="font-bold">{perk.title}</p>
                        <p className="text-white/90 text-sm leading-relaxed">{perk.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 editorial italic text-center text-lg" style={{ color: '#ffe6a8' }}>
                  All of this for just <strong>$147!</strong>
                </p>

                <div className="mt-6">
                  <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ink w-full">
                    Become a VIP →
                  </a>
                </div>
              </div>
            </FadeIn>
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
              Two days. One movement.
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
