import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import QuoteCard from '../components/QuoteCard';
import Photo from '../components/Photo';
import { LINKS, LOUNGES, STOCK_PHOTOS } from '../data/content';

export default function CommunityLounges() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-stage-pink text-white">
        <span className="gold-vert-line" style={{ left: '8%' }} />
        <span className="gold-vert-line" style={{ right: '8%' }} />

        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow text-white/85 mb-5">Community Lounges · IMMVC</p>
            <h1 className="h-hero">
              Connect with
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: '#ffe6a8' }}>
                Your Tribe.
              </span>
            </h1>
            <div className="gold-line w-40 mt-8" />
            <p className="mt-8 max-w-xl editorial italic text-lg sm:text-xl text-white/95 leading-relaxed">
              You are not meant to do this alone. If you cannot find a village,
              we invite you to build one with us.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-light">
                Register Free
              </a>
              <Link to="/immvc" className="btn-ghost-light">
                IMMVC Details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <Photo src={STOCK_PHOTOS.group} ratio="4/5" tone="teal" alt="Group of women — stock placeholder" />
          </FadeIn>
        </div>
      </section>

      {/* INTRO QUOTE */}
      <section className="bg-white -mt-14 relative z-10">
        <div className="container-x">
          <FadeIn>
            <QuoteCard
              quote="Step into our virtual breakout lounges to network and share experiences with women who are walking in your exact shoes."
              attribution="During IMMVC · Live + Replays for VIPs"
              accent="teal"
              className="mx-auto max-w-3xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* LOUNGES GRID */}
      <section className="section bg-white">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-magenta">Available Lounges</p>
            <h2 className="h-display mt-4 text-ink">
              Pick the table
              <span className="block" style={{ color: 'var(--c-gold-dark)' }}>
                that fits your season.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOUNGES.map((name, i) => {
              const accentMagenta = i % 2 === 0;
              return (
                <FadeIn key={name} delay={i * 60}>
                  <div className={accentMagenta ? 'card-magenta' : 'card-teal'}>
                    <span className="display-font text-5xl block leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="mt-3 w-12 h-px"
                      style={{ background: 'rgba(255,255,255,0.6)' }}
                    />
                    <h3 className="editorial text-2xl mt-5">{name}</h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mt-16 text-center">
            <p className="editorial italic text-lg text-ink/70 max-w-2xl mx-auto">
              Lounges open during the conference and stay open for VIPs in the
              private community after the event.
            </p>
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
