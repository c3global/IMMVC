import { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import { LINKS } from '../data/content';

const SOCIALS = [
  { label: 'Instagram', handle: '@immvc2026', href: LINKS.INSTAGRAM, icon: 'IG', accent: 'magenta' },
  { label: 'TikTok', handle: '@immvc2026', href: LINKS.TIKTOK, icon: 'TT', accent: 'teal' },
  { label: 'Facebook', handle: 'Dr. Charity TV', href: LINKS.FACEBOOK, icon: 'FB', accent: 'magenta' },
  { label: 'YouTube', handle: 'Dr. Charity TV', href: LINKS.YOUTUBE, icon: 'YT', accent: 'teal' },
];

export default function Connect() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        tone="teal"
        eyebrow="Connect"
        title="Let’s stay"
        accent="in touch."
        intro="Reach out, partner with us, or bring Dr. CK to your stage. We read every note."
      >
        <a href={LINKS.EMAIL} className="btn-light">Email Us</a>
        <a href={LINKS.BOOKING} target="_blank" rel="noreferrer" className="btn-ghost-light">
          Book Dr. CK
        </a>
      </PageHero>

      {/* CONTACT FORM */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow-magenta">Send Us a Note</p>
            <h2 className="h-serif mt-4 text-ink">
              The inbox is
              <span className="editorial italic" style={{ color: 'var(--c-gold-dark)' }}> open.</span>
            </h2>
            <div className="gold-line mt-6 w-32" />
            <p className="mt-6 text-ink/75 leading-relaxed">
              Whether you’re a future attendee, partner, media outlet, or just
              someone with a story to share — we want to hear from you.
            </p>
            <ul className="mt-8 space-y-5 text-ink/80">
              <li>
                <span className="eyebrow-magenta block mb-1">Email</span>
                <a href={LINKS.EMAIL} className="editorial text-lg text-magenta hover:text-coral transition">
                  hello@mamasandmentors.com
                </a>
              </li>
              <li>
                <span className="eyebrow-magenta block mb-1">Speaking &amp; Booking</span>
                <a href={LINKS.BOOKING} target="_blank" rel="noreferrer" className="editorial text-lg text-magenta hover:text-coral transition">
                  Submit a Booking Request →
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="card-light space-y-6"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <p className="display-font text-5xl text-magenta">Thank you</p>
                  <div className="gold-line mx-auto mt-4 w-24" />
                  <p className="mt-6 editorial italic text-ink/75 text-lg">
                    Your note has been received. We’ll be in touch soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Your Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Subject" name="subject" />
                  <Field label="Your message" name="message" textarea required />
                  <p className="text-xs text-ink/50 uppercase tracking-[0.22em]">
                    Placeholder form — connect to your provider at launch
                  </p>
                  <button type="submit" className="btn-magenta w-full">
                    Send Note →
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="section bg-blush-soft">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow-teal">Find Us Everywhere</p>
            <h2 className="h-display mt-4 text-ink">
              Follow along.
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                Share the movement.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
          </FadeIn>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIALS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`block ${s.accent === 'magenta' ? 'card-magenta' : 'card-teal'} h-full group`}
                >
                  <span className="display-font text-3xl">{s.icon}</span>
                  <div className="mt-3 w-12 h-px" style={{ background: 'rgba(255,255,255,0.6)' }} />
                  <p className="editorial text-xl mt-4">{s.label}</p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/85 mt-1">{s.handle}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container-x">
          <FadeIn>
            <h2 className="h-display text-ink">
              We can’t wait to
              <span className="block editorial italic font-normal normal-case tracking-normal" style={{ color: 'var(--c-gold-dark)' }}>
                meet you.
              </span>
            </h2>
            <div className="gold-line mx-auto w-40 mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-magenta">
                Register Free
              </a>
              <a href={LINKS.VIP} target="_blank" rel="noreferrer" className="btn-ink">
                Go VIP — $147
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', textarea, required }) {
  const cls =
    'w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink placeholder-ink/40 outline-none transition focus:border-magenta focus:ring-2 focus:ring-magenta/20';
  return (
    <label className="block">
      <span className="eyebrow-magenta block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} required={required} className={cls} placeholder="Share with us..." />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
