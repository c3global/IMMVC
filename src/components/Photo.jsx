// Photography slot — renders a stock placeholder image with a visible
// "STOCK PLACEHOLDER" tag so reviewers know it must be replaced with
// brand photography before launch. Pass `src` (recommended: a URL from
// content.js STOCK_PHOTOS) and an `alt` description.

export default function Photo({
  src,
  alt = 'Stock placeholder',
  ratio = '4/5',
  className = '',
  framed = true,
  showTag = true,
  tone = 'magenta',
}) {
  const overlay =
    tone === 'magenta'
      ? 'bg-gradient-to-tr from-magenta/35 via-transparent to-teal/15'
      : tone === 'teal'
      ? 'bg-gradient-to-tr from-teal/35 via-transparent to-magenta/15'
      : 'bg-gradient-to-tr from-ink/30 via-transparent to-transparent';

  return (
    <div
      className={`${framed ? 'photo-frame' : 'relative overflow-hidden rounded-3xl'} ${className}`}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className={`absolute inset-0 pointer-events-none ${overlay}`} />
      {showTag && (
        <span className="stock-tag">
          Stock · replace at launch
        </span>
      )}
    </div>
  );
}
