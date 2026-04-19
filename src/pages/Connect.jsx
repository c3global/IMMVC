import { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS } from '../data/content';

const SOCIALS = [
  { label: 'Instagram', handle: '@immvc2026', href: LINKS.INSTAGRAM, icon: 'IG' },
  { label: 'TikTok', handle: '@immvc2026', href: LINKS.TIKTOK, icon: 'TT' },
  { label: 'Facebook', handle: 'Dr. Charity TV', href: LINKS.FACEBOOK, icon: 'FB' },
  { label: 'YouTube', handle: 'Dr. Charity TV', href: LINKS.YOUTUBE, icon: 'YT' },
];

export default function Connect() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        tone="blush"
        eyebrow="Connect"
        title="Let’s stay"
        accent="in touch."
        intro="Reach out, partner with us, or bring Dr. CK to your stage. We read every note."
      >
        <a href={LINKS.EMAIL} className="btn-primary">Email Us</a>
        <a href={LINKS.BOOKING} target="_blank" rel="noreferrer" className="btn-dark">
          Book Dr. CK
        </a>
      </PageHero>

      {/* CONTACT FORM */}
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <p className="eyebrow">Send Us a Note</p>
            <h2 className="h-serif mt-4">
              The inbox is
              <span className="gold-text"> open.</span>
            </h2>
            <GoldDivider center={false} className="mt-6" />
            <p className="mt-6 text-ink/75 leading-relaxed">
              Whether you’re a future attendee, partner, media outlet, or just
              someone with a story to share — we want to hear from you.
            </p>
            <ul className="mt-8 space-y-5 text-ink/80">
              <li>
                <span className="eyebrow block mb-1">Email</span>
                <a href={LINKS.EMAIL} className="font-serif text-lg text-magenta hover:text-coral transition">
                  hello@mamasandmentors.com
                </a>
              </li>
              <li>
                <span className="eyebrow block mb-1">Speaking &amp; Booking</span>
                <a href={LINKS.BOOKING} target="_blank" rel="noreferrer" className="font-serif text-lg text-magenta hover:text-coral transition">
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
              className="glam-card space-y-6"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <p className="display-font text-5xl gold-text">Thank you</p>
                  <div className="gold-rule mx-auto mt-4 w-24" />
                  <p className="mt-6 font-serif italic text-ink/75 text-lg">
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
                  <button type="submit" className="btn-primary w-full">
                    Send Note →
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="section bg-blush-fade">
        <div className="container-x">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Find Us Everywhere</p>
            <h2 className="h-serif mt-4">
              Follow along.
              <span className="gold-text"> Share the movement.</span>
            </h2>
            <GoldDivider className="mt-8" />
          </FadeIn>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIALS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glam-card h-full flex items-center gap-4 group"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-coral text-white text-xs font-bold tracking-wider shrink-0">
                    {s.icon}
                  </span>
                  <span className="flex flex-col leading-tight min-w-0">
                    <span className="font-serif text-lg text-ink/90 group-hover:text-magenta transition">
                      {s.label}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55 truncate">
                      {s.handle}
                    </span>
                  </span>
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
            <h2 className="h-display">
              We can’t wait to
              <span className="gold-text"> meet you.</span>
            </h2>
            <GoldDivider className="mt-8" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={LINKS.REGISTER} target="_blank" rel="noreferrer" className="btn-primary">
                Register Free
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

function Field({ label, name, type = 'text', textarea, required }) {
  const cls =
    'w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink placeholder-ink/40 outline-none transition focus:border-magenta focus:ring-2 focus:ring-magenta/20';
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} required={required} className={cls} placeholder="Share with us..." />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
