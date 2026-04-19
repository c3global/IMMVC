import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import ImageSlot from '../components/ImageSlot';
import { LINKS } from '../data/content';

const RHYTHMS = [
  {
    title: 'Monthly Networking Meetings',
    body: 'Cross-cultural conversations with women from every continent — a global table of mamas and mentors.',
  },
  {
    title: 'Bi-Weekly Prayer & Encouragement Calls',
    body: 'A consistent, sacred gathering to lift one another up through every chapter.',
  },
  {
    title: 'Private Community Access',
    body: 'Connect and go deeper with women from across the IMMVC community (VIP feature).',
  },
  {
    title: 'Annual Flagship Conference',
    body: 'IMMVC is the heartbeat of the movement — two days of teaching, story, and celebration every May.',
  },
];

export default function Community() {
  return (
    <>
      <PageHero
        tone="blush"
        eyebrow="The Community"
        title="When mamas and mentors"
        accent="unite."
        intro="A year-round, faith-led, globally-minded community for women who pour out — and are ready to be poured into."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
          Join the Community
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-dark">
          Go VIP for Private Access
        </a>
      </PageHero>

      {/* WHAT IT MEANS */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <ImageSlot
              tone="light"
              ratio="5/6"
              label="Community photography"
              description="Candid photo of women gathered in conversation · 5:6"
            />
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p className="eyebrow">What It Means To Be Part Of This Movement</p>
            <h2 className="h-serif mt-2">
              You don’t have to do this
              <span className="gold-text"> alone.</span>
            </h2>
            <p>
              To belong to Mamas and Mentors International is to belong to a
              global table of women who refuse to perform. The unfinished
              chapters are honored. The hard questions are welcomed. The
              celebrations are loud. The prayer is real.
            </p>
            <p>
              We are faith-led, globally minded, and relationally rich — and
              every part of you is welcome here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRIVATE COMMUNITY VIP */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-white gold-border"
              style={{ background: 'linear-gradient(160deg, #1b1424 0%, #0b0b10 100%)' }}
            >
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-blush">Private Community Access</p>
                  <h2 className="h-serif mt-4">
                    Connect and go deeper with women
                    <span className="gold-text"> from across the IMMVC community.</span>
                  </h2>
                  <p className="mt-6 text-white/85 leading-relaxed">
                    The Private Community is a members-only digital space
                    reserved for IMMVC VIPs — where the real conversations keep
                    going long after the conference ends.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:text-right">
                  <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-primary">
                    Unlock VIP Access →
                  </a>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-blush/70">
                    Included with the $147 VIP Pass
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RHYTHMS */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">The Rhythms</p>
            <h2 className="h-serif mt-4">
              How we
              <span className="gold-text"> stay close.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {RHYTHMS.map((r, i) => (
              <FadeIn key={r.title} delay={i * 70}>
                <div className="glam-card h-full">
                  <p className="font-serif text-xs uppercase tracking-[0.28em] text-magenta">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="gold-rule mt-3 w-10" />
                  <h3 className="font-serif text-2xl mt-5">{r.title}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative overflow-hidden py-24 sm:py-28 grain">
        <div className="absolute inset-0 hero-teal" />
        <div className="container-x relative text-center text-white max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-cyan">The Manifesto</p>
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.15] mt-6">
              When mamas and mentors unite, we build bridges that transcend
              <span className="gold-text"> generations, geography, and gender roles.</span>
            </p>
            <GoldDivider className="mt-10" />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blush-fade">
        <div className="container-x text-center">
          <FadeIn>
            <h2 className="h-display">
              A seat at the table
              <span className="gold-text"> with your name on it.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Join the Community
              </a>
              <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-dark">
                Go VIP — $147
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
