import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS } from '../data/content';

const RHYTHMS = [
  {
    title: 'Monthly Networking Meetings',
    body: 'Cross-cultural conversations with women from every continent — your global table of mamas and mentors.',
    icon: '🌍',
  },
  {
    title: 'Bi-Weekly Prayer & Encouragement Calls',
    body: 'A consistent, sacred gathering to lift each other up — through joys, transitions, and the in-between.',
    icon: '🙏🏽',
  },
  {
    title: 'Private VIP Lounge',
    body: 'A members-only space to go deeper between gatherings. Real talk. Real prayer. Real friendships.',
    icon: '👑',
  },
  {
    title: 'Annual Flagship Conference',
    body: 'IMMVC is the heartbeat of the movement — two days of teaching, story, and celebration every May.',
    icon: '✨',
  },
];

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="The Community"
        title="When women rise,"
        accent="cultures shift."
        intro="Mamas and Mentors International is a year-round, faith-led, globally-minded community for women who pour out — and finally want a place to be poured into."
      >
        <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
          Join the Community
        </a>
        <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ghost">
          Go VIP for Private Access
        </a>
      </PageHero>

      {/* WHAT IT MEANS */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">What It Means</p>
            <h2 className="h-serif mt-4">
              You don’t have to do this
              <span className="gold-text"> alone.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              To belong to Mamas and Mentors International is to belong to a
              global table of women who refuse to perform. Here, the unfinished
              chapters are honored. The hard questions are welcomed. The
              celebrations are loud. The prayer is real.
            </p>
            <p>
              We are <strong>faith-led</strong>, <strong>globally
              minded</strong>, and <strong>relationally rich</strong>. Whether
              you’re here for the wisdom, the worship, or the women — there is
              room for all of you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRIVATE COMMUNITY VIP */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-luxe-dark p-10 sm:p-16 text-white shadow-luxe gold-border">
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-magenta/40 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-blush">Private Community Access</p>
                  <h2 className="h-serif mt-4">
                    A VIP-only space for the women who want to
                    <span className="gold-text"> go deeper.</span>
                  </h2>
                  <p className="mt-6 text-white/85 leading-relaxed">
                    The Private Community is a members-only digital lounge
                    reserved for IMMVC VIPs. It’s where the real conversations
                    keep going long after the conference ends — connection,
                    accountability, prayer, and the kind of friendships that
                    cross oceans.
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
              <FadeIn key={r.title} delay={i * 90}>
                <div className="glam-card h-full">
                  <span className="text-4xl">{r.icon}</span>
                  <div className="gold-rule mt-4 w-12" />
                  <h3 className="font-serif text-2xl mt-5">{r.title}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative overflow-hidden py-24 sm:py-32 hero-grain">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative text-center text-white max-w-4xl mx-auto">
          <FadeIn>
            <span className="display-font text-9xl gold-text leading-none">“</span>
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-snug -mt-10">
              When mamas and mentors unite, we build bridges that transcend
              <span className="gold-text"> generations, geography, and gender roles.</span>
            </p>
            <GoldDivider className="mt-10" />
            <p className="mt-6 text-sm uppercase tracking-[0.32em] text-blush">
              — The Mamas &amp; Mentors Manifesto
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blush-fade">
        <div className="container-x text-center">
          <FadeIn>
            <h2 className="display-font text-5xl sm:text-6xl">
              There’s a seat at the table
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
