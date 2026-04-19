import { useState } from 'react';
import PageHero from '../components/PageHero';
import FadeIn from '../components/FadeIn';
import GoldDivider from '../components/GoldDivider';
import { LINKS } from '../data/content';

const SOCIALS = [
  { label: 'Instagram', href: LINKS.INSTAGRAM, icon: 'IG' },
  { label: 'Facebook', href: LINKS.FACEBOOK, icon: 'FB' },
  { label: 'YouTube', href: LINKS.YOUTUBE, icon: 'YT' },
  { label: 'LinkedIn', href: LINKS.LINKEDIN, icon: 'IN' },
];

export default function Connect() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Let’s stay"
        accent="close."
        intro="Reach out, dream out loud, or invite Dr. CK into your room. We read every note and we’d love to hear from you."
      >
        <a href={LINKS.EMAIL} className="btn-primary">Email Us</a>
        <a href={LINKS.PODCAST} target="_blank" rel="noreferrer" className="btn-ghost">
          Listen to the Podcast
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
              Whether you’re a future attendee, a possible partner, a media
              outlet, or just someone with a story to share — we want to hear
              from you.
            </p>
            <ul className="mt-8 space-y-3 text-ink/80">
              <li>
                <span className="eyebrow block mb-1">Email</span>
                <a href={LINKS.EMAIL} className="font-serif text-xl text-magenta hover:text-coral transition">
                  hello@mamasandmentors.com
                </a>
              </li>
              <li>
                <span className="eyebrow block mb-1">Speaking & Booking</span>
                <a href={LINKS.BOOKING} target="_blank" rel="noreferrer" className="font-serif text-xl text-magenta hover:text-coral transition">
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
                  <span className="display-font text-7xl gold-text">Thank you</span>
                  <div className="gold-rule mx-auto mt-4 w-24" />
                  <p className="mt-6 font-serif italic text-ink/75 text-lg">
                    Your note has been received. We’ll be in touch soon — keep
                    an eye on your inbox.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Your Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Subject" name="subject" />
                  <Field label="What’s on your heart?" name="message" textarea required />
                  <p className="text-xs text-ink/50 uppercase tracking-[0.22em]">
                    Placeholder form — connect to your form provider
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

      {/* PODCAST + SOCIAL */}
      <section className="section bg-luxe-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-magenta-glow opacity-50" />
        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-7">
            <p className="eyebrow text-blush">Beyond Borders Podcast</p>
            <h2 className="h-serif mt-4">
              Globally minded.
              <span className="gold-text"> Faith-driven.</span> Always real.
            </h2>
            <GoldDivider center={false} className="mt-6" />
            <p className="mt-6 text-white/85 leading-relaxed">
              Hosted by Dr. CK, the <strong>Beyond Borders</strong> podcast is a
              weekly conversation for women navigating leadership, identity,
              and legacy across cultures. New episodes drop weekly — wherever
              you press play.
            </p>
            <div className="mt-8">
              <a href={LINKS.PODCAST} target="_blank" rel="noreferrer" className="btn-primary">
                Listen Now →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-5">
            <div className="luxe-card">
              <p className="eyebrow text-blush">Find Us Everywhere</p>
              <div className="gold-rule mt-4 w-12" />
              <div className="mt-6 grid grid-cols-2 gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-gold/40 px-4 py-4 transition hover:border-gold hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-coral text-white text-xs font-bold tracking-wider">
                      {s.icon}
                    </span>
                    <span className="font-serif text-lg group-hover:text-gold transition">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blush-fade text-center">
        <div className="container-x">
          <FadeIn>
            <h2 className="display-font text-5xl sm:text-6xl">
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
        <textarea
          name={name}
          rows={5}
          required={required}
          className={cls}
          placeholder="Share what’s on your heart..."
        />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
