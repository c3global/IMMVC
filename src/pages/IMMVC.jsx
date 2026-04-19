import { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS, FAQS, VIP_PERKS } from '../data/content';

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-[#b8913d]/30">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-6 py-6 text-left">
        <span className="font-serif text-xl sm:text-2xl text-ink/90">{q}</span>
        <span className={`mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b8913d]/60 text-magenta transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
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
        eyebrow="The International Mamas & Mentors Virtual Conference"
        title="IMMVC"
        accent="2026"
        intro="The annual flagship event of Mamas and Mentors International. May 9–10, 2026 — virtual, international, and free to attend."
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
              <span className="gold-text"> Mamas &amp; Mentors International.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              IMMVC is the International Mamas &amp; Mentors Virtual
              Conference — a global, two-day gathering of women across
              continents, generations, and life stages.
            </p>
            <p>
              Main sessions are <strong>pre-recorded</strong> for international
              accessibility. Supplemental activities — Q&amp;A, networking,
              prayer &amp; encouragement — are <strong>live</strong>. Virtual
              Lounge access stays open during the conference and for{' '}
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
              { label: 'Format', value: 'Pre-recorded + Live' },
              { label: 'Lounge', value: 'During + 3 days after' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                <div className="glam-card text-center h-full">
                  <p className="eyebrow">{item.label}</p>
                  <p className="font-serif text-xl mt-3 text-ink/90">{item.value}</p>
                  <div className="gold-rule mx-auto mt-4 w-10" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Ticket Options</p>
            <h2 className="h-serif mt-4">
              Free for all.
              <span className="gold-text"> Glorious for VIPs.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* GENERAL */}
            <FadeIn>
              <div className="glam-card h-full flex flex-col">
                <p className="eyebrow">General Access</p>
                <p className="display-font text-6xl mt-4 text-ink/90">FREE</p>
                <GoldDivider center={false} className="mt-6" />
                <ul className="mt-8 space-y-4 text-ink/80">
                  <li className="flex gap-3"><span className="text-magenta mt-1">→</span> Live access to all main sessions</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">→</span> Interactive Q&amp;A participation</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">→</span> Basic networking &amp; general chat access</li>
                  <li className="flex gap-3"><span className="text-magenta mt-1">→</span> Digital conference workbook</li>
                </ul>
                <div className="mt-auto pt-10">
                  <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-dark w-full">
                    Register Free
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* VIP */}
            <FadeIn delay={120}>
              <div className="relative h-full flex flex-col rounded-3xl p-10 text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #db3d9e 0%, #ff2768 60%, #16121d 100%)',
                  boxShadow: '0 40px 90px -30px rgba(219,61,158,0.5), inset 0 0 0 1px rgba(184,145,61,0.55)',
                }}
              >
                <span className="absolute right-6 top-6 rounded-full border border-[#c9a24a]/70 bg-ink/40 px-4 py-1 text-[10px] uppercase tracking-[0.32em] text-[#c9a24a]">
                  Best Value
                </span>
                <p className="eyebrow text-blush">VIP Pass</p>
                <p className="display-font text-6xl mt-4 gold-text">$147</p>
                <p className="font-serif italic mt-2 text-white/90">
                  The most value ever given at IMMVC.
                </p>
                <GoldDivider center={false} className="mt-6" />

                <ul className="mt-8 space-y-5 text-white/95">
                  {VIP_PERKS.map((perk) => (
                    <li key={perk.title} className="flex gap-3">
                      <span className="mt-1 text-lg">{perk.color === 'magenta' ? '🩷' : '🩵'}</span>
                      <div>
                        <p className="font-bold">{perk.title}</p>
                        <p className="text-white/85 text-sm leading-relaxed">{perk.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 font-serif italic text-center text-lg text-white">
                  All of this for just <span className="gold-text font-bold">$147!</span>
                </p>

                <div className="mt-6">
                  <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-dark w-full">
                    Become a VIP →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-blush-fade">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="eyebrow">FAQs</p>
            <h2 className="h-serif mt-4">
              The honest
              <span className="gold-text"> answers.</span>
            </h2>
            <GoldDivider center={false} className="mt-6" />
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
      <section className="relative overflow-hidden py-24 sm:py-28 grain">
        <div className="absolute inset-0 hero-ink" />
        <div className="container-x relative text-center text-white">
          <FadeIn>
            <h2 className="h-display">
              Two days. One movement.
              <span className="block gold-text">Your seat is waiting.</span>
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
