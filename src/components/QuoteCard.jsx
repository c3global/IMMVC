// Gold-framed quote card — a recurring brand element inspired by the
// gold-framed quote panels in Dr. CK's studio set photography.
export default function QuoteCard({ quote, attribution, accent = 'magenta', className = '' }) {
  const accentColor =
    accent === 'teal' ? 'text-teal' : accent === 'gold' ? 'text-[var(--c-gold-dark)]' : 'text-magenta';
  return (
    <figure className={`quote-card ${className}`}>
      <span className={`editorial text-6xl leading-none ${accentColor}`}>“</span>
      <blockquote className="-mt-6 editorial italic text-xl sm:text-2xl text-ink/90 leading-snug">
        {quote}
      </blockquote>
      {attribution && (
        <>
          <div className="gold-rule mt-6 w-12" />
          <figcaption className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ink/60">
            {attribution}
          </figcaption>
        </>
      )}
    </figure>
  );
}
