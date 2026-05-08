import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import QuoteCard from '../components/QuoteCard';
import Photo from '../components/Photo';
import { LINKS, LOUNGES, PHOTOS } from '../data/content';

export default function Community() {
  return (
    <>
      {/* HERO — open to everyone */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow text-white/85 mb-5">The Community · Open to Everyone</p>
            <h1 className="h-hero">
              Join the
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                Community.
              </span>
            </h1>
            <div className="gold-line w-40 mt-8" />
            <p className="mt-8 max-w-xl editorial italic text-lg sm:text-xl text-white/95 leading-relaxed">
              You don’t have to be a mama or a mentor to belong here. The
              community is open to every woman — year-round, around the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={LINKS.JOIN_COMMUNITY}
                target="_blank"
                rel="noreferrer"
                className="btn-light"
              >
                Join the Community
              </a>
              <a
                href={LINKS.SUNDAY_RESET}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light"
              >
                Sunday Reset →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <Photo photo={PHOTOS.community} ratio="4/5" tone="teal" alt="Mamas & Mentors community" />
          </FadeIn>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-white -mt-14 relative z-10">
        <div className="container-x">
          <FadeIn>
            <QuoteCard
              quote="When mamas and mentors unite, we build bridges that transcend generations, geography, and gender roles."
              attribution="Mamas & Mentors International"
              accent="teal"
              className="mx-auto max-w-3xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* SUNDAY RESET — featured */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-white bg-stage-teal"
            >
              <span className="gold-vert-line" style={{ left: '6%' }} />
              <span className="gold-vert-line" style={{ right: '6%' }} />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <p className="eyebrow text-white/90">The Sunday Reset</p>
                  <h2 className="h-display mt-4">
                    Reset, refill,
                    <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                      and breathe again.
                    </span>
                  </h2>
                  <div className="gold-line mt-6 w-32" />
                  <p className="mt-6 text-white/95 leading-relaxed max-w-xl">
                    A weekly gathering for the women in our community — a soft
                    place to land, breathe, and start the week refilled.
                  </p>
                  <div className="mt-8">
                    <a
                      href={LINKS.SUNDAY_RESET}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-light"
                    >
                      Join the Sunday Reset →
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <Photo
                    photo={PHOTOS.sundayReset}
                    ratio="1/1"
                    framed={false}
                    alt="Sunday Reset"
                    tone="ink"
                    className="bg-white/10"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EMPOWERMENT PORTAL */}
      <section className="section bg-blush-soft">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5">
            <Photo
              photo={PHOTOS.empowermentPortal}
              ratio="4/5"
              tone="magenta"
              alt="Empowerment Portal"
            />
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-7">
            <p className="eyebrow-magenta">Inside the Community</p>
            <h2 className="h-display mt-4 text-ink">
              The Empowerment
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Portal.
              </span>
            </h2>
            <div className="gold-line mt-6 w-32" />
            <p className="mt-6 text-lg text-ink/80 leading-relaxed max-w-xl">
              An always-on space inside the community where mamas and mentors
              gather to grow — tools, teachings, and conversations to keep you
              walking boldly in your purpose between gatherings.
            </p>
            <div className="mt-8">
              <a
                href={LINKS.JOIN_COMMUNITY}
                target="_blank"
                rel="noreferrer"
                className="btn-magenta"
              >
                Step Inside the Community →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RHYTHMS */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">The Rhythms</p>
            <h2 className="h-display mt-4 text-ink">
              How we
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                stay close.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {[
              { t: 'Sunday Reset', b: 'A weekly gathering to reset, refill, and start the week soft and grounded.' },
              { t: 'Monthly Networking', b: 'Cross-cultural conversations with women from every continent — a global table of mamas and mentors.' },
              { t: 'Bi-Weekly Prayer & Encouragement', b: 'A consistent, sacred gathering to lift one another up through every chapter.' },
              { t: 'Annual Flagship Conference', b: 'IMMVC is the heartbeat of the movement — three days of teaching, story, and celebration every May.' },
            ].map((r, i) => (
              <FadeIn key={r.t} delay={i * 70}>
                <div className="card-light h-full">
                  <p className="font-serif text-xs uppercase tracking-[0.28em] text-magenta">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="gold-line mt-3 w-10" />
                  <h3 className="editorial text-2xl mt-5">{r.t}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed">{r.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCE LOUNGES — sub-section */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-teal">During IMMVC · Conference-Only</p>
            <h2 className="h-display mt-4 text-ink">
              Step into a
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Breakout Lounge.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <p className="mt-6 editorial italic text-ink/65 text-lg max-w-2xl mx-auto">
              Virtual breakout lounges open during the conference — a place to
              meet women walking in your exact shoes.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOUNGES.map((name, i) => {
              const accentMagenta = i % 2 === 0;
              return (
                <FadeIn key={name} delay={i * 50}>
                  <div className={accentMagenta ? 'card-magenta' : 'card-teal'}>
                    <span className="display-font text-5xl block leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="mt-3 w-12 h-px"
                      style={{ background: 'rgba(255,255,255,0.6)' }}
                    />
                    <h3 className="editorial text-xl mt-5">{name}</h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link to="/immvc" className="btn-ink">IMMVC Conference Details →</Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-stage-teal text-white">
        <span className="gold-vert-line" style={{ left: '10%' }} />
        <span className="gold-vert-line" style={{ right: '10%' }} />
        <div className="container-x relative text-center">
          <FadeIn>
            <h2 className="h-display">Build the village with us.</h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.JOIN_COMMUNITY} target="_blank" rel="noreferrer" className="btn-light">
                Join the Community
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
