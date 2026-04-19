import { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS, FAQS, VIP_PERKS } from '../data/content';

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-gold/30">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-xl sm:text-2xl text-ink/90 group-hover:text-magenta transition">
          {q}
        </span>
        <span
          className={`mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 text-magenta transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
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
        eyebrow="The International Mamas & Mentors Virtual Conference"
        title="IMMVC"
        accent="2026"
        intro="Two days. One global sisterhood. May 9–10, 2026 — wherever you are in the world, your seat is waiting."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
          Register Free
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
          Go VIP — $147
        </a>
      </PageHero>

      {/* WHAT IS IMMVC */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">What Is IMMVC?</p>
            <h2 className="h-serif mt-4">
              The annual flagship event of
              <span className="gold-text"> Mamas and Mentors International.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              IMMVC is the <strong>International Mamas &amp; Mentors Virtual
              Conference</strong> — a global, two-day gathering of women across
              continents, generations, and life stages. Worship-rooted.
              Story-rich. Refreshingly real.
            </p>
            <p>
              Main sessions are pre-recorded so women everywhere — from Lagos
              to Los Angeles — can show up fully. Supplemental activities
              including Q&amp;A, prayer, and networking are <strong>live</strong>.
              Your virtual lounge stays open during the event and for{' '}
              <strong>3 days after</strong> each session.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMMVC 2026 DETAILS */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">IMMVC 2026</p>
            <h2 className="h-serif mt-4">
              Save the dates.
              <span className="gold-text"> Save your seat.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'When', value: 'May 9–10, 2026' },
              { label: 'Where', value: '100% Virtual · Global' },
              { label: 'Format', value: 'Pre-recorded + Live Activities' },
              { label: 'Lounge', value: 'Open during + 3 days after' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="glam-card text-center h-full">
                  <p className="eyebrow">{item.label}</p>
                  <p className="font-serif text-2xl mt-3 text-ink/90">
                    {item.value}
                  </p>
                  <div className="gold-rule mx-auto mt-4 w-10" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section className="section bg-luxe-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-blush">Pick Your Pass</p>
            <h2 className="display-font text-5xl sm:text-6xl mt-4">
              Free for all.
              <span className="gold-text"> Glorious for VIPs.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* GENERAL */}
            <FadeIn>
              <div className="luxe-card h-full flex flex-col">
                <p className="eyebrow text-blush">General Access</p>
                <p className="display-font text-7xl mt-4 gold-text">FREE</p>
                <div className="gold-rule mt-6 w-24" />
                <ul className="mt-8 space-y-4 text-white/85">
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">✦</span> Live access to all main sessions
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">✦</span> Interactive Q&amp;A participation
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">✦</span> Basic networking &amp; general chat access
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">✦</span> Digital conference workbook
                  </li>
                </ul>
                <div className="mt-auto pt-10">
                  <a
                    href={LINKS.REGISTER}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost w-full"
                  >
                    Register Free
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* VIP */}
            <FadeIn delay={120}>
              <div className="relative h-full flex flex-col rounded-3xl p-10 text-white shadow-luxe overflow-hidden"
                style={{
                  background:
                    'linear-gradient(160deg, #db3d9e 0%, #ff2768 60%, #16121d 100%)',
                  boxShadow:
                    '0 40px 90px -30px rgba(219,61,158,0.6), inset 0 0 0 1px rgba(247,231,163,0.7)',
                }}
              >
                <span className="absolute right-6 top-6 rounded-full border border-gold/70 bg-ink/40 px-4 py-1 text-[10px] uppercase tracking-[0.32em] text-gold">
                  Best Value
                </span>
                <p className="eyebrow text-blush">VIP Pass</p>
                <p className="display-font text-7xl mt-4 gold-text">$147</p>
                <p className="font-serif italic mt-2 text-white/90">
                  “The most value ever given at IMMVC!”
                </p>
                <div className="gold-rule mt-6 w-24" />

                <ul className="mt-8 space-y-5 text-white/95">
                  {VIP_PERKS.map((perk) => (
                    <li key={perk.title} className="flex gap-3">
                      <span className="mt-1 text-lg">
                        {perk.color === 'magenta' ? '🩷' : '🩵'}
                      </span>
                      <div>
                        <p className="font-bold">{perk.title}</p>
                        <p className="text-white/85 text-sm leading-relaxed">
                          {perk.body}
                        </p>
                        {perk.link && (
                          <a
                            href={perk.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block text-xs uppercase tracking-[0.25em] text-gold hover:text-white transition"
                          >
                            {perk.linkLabel} →
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 font-serif italic text-center text-lg text-white">
                  All of this for just <span className="gold-text font-bold">$147!</span>
                </p>

                <div className="mt-6">
                  <a
                    href={LINKS.VIP}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark w-full"
                  >
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
            <p className="eyebrow">Questions?</p>
            <h2 className="h-serif mt-4">
              The honest
              <span className="gold-text"> answers.</span>
            </h2>
            <GoldDivider center={false} className="mt-6" />
            <p className="mt-6 text-ink/70 leading-relaxed">
              Still wondering about something? Reach us anytime — we read every
              note.
            </p>
            <div className="mt-6">
              <a href={LINKS.EMAIL} className="btn-dark">Ask a Question →</a>
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
      <section className="relative overflow-hidden py-24 sm:py-28 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="display-font text-5xl sm:text-7xl leading-[1.05]">
              We saved you a seat.
              <span className="block gold-text">All you have to do is sit.</span>
            </h2>
            <GoldDivider className="mt-10" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
