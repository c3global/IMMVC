import { useState, useEffect } from 'react';

// Photo slot. Pass either:
//   - photo={PHOTOS.homeHero}   (preferred — auto-falls back to placeholder)
//   - src="..." [+ label="..."]
//
// On image-load failure, renders a soft pink/teal placeholder card with
// the expected filename so it's obvious which file still needs upload.
//
// Modes:
//   - default:    photo-frame (gold border) + tinted overlay + cropped to ratio
//   - framed=false: rounded corners, no border, still cropped to ratio
//   - natural=true: NO border, NO ratio enforcement, NO overlay, image renders
//                  at native dimensions. Best for graphics/branded images.

export default function Photo({
  photo,
  src: srcProp,
  label: labelProp,
  alt = '',
  ratio = '4/5',
  className = '',
  framed = true,
  natural = false,
  tone = 'magenta',
}) {
  const initialSrc = photo?.src ?? srcProp;
  const expectedFilename = photo?.label ?? labelProp;

  const [src, setSrc] = useState(initialSrc);
  const [errored, setErrored] = useState(false);
  const [triedAlt, setTriedAlt] = useState(false);

  useEffect(() => {
    setSrc(initialSrc);
    setErrored(false);
    setTriedAlt(false);
  }, [initialSrc]);

  function altExtension(s) {
    if (!s) return null;
    if (s.endsWith('.jpg') || s.endsWith('.JPG')) return s.replace(/\.jpg$/i, '.png');
    if (s.endsWith('.png') || s.endsWith('.PNG')) return s.replace(/\.png$/i, '.jpg');
    return null;
  }

  function handleError() {
    if (!triedAlt) {
      const alt = altExtension(initialSrc);
      if (alt) {
        setSrc(alt);
        setTriedAlt(true);
        return;
      }
    }
    setErrored(true);
  }

  // ---------- NATURAL MODE ----------
  // Render the image at its native dimensions, no border, no overlay.
  if (natural) {
    if (!errored && src) {
      return (
        <img
          src={src}
          alt={alt}
          className={`block w-full h-auto ${className}`}
          loading="lazy"
          decoding="async"
          onError={handleError}
        />
      );
    }
    // Fallback placeholder while waiting for upload — uses ratio for sizing.
    return (
      <div
        className={`relative overflow-hidden rounded-3xl ${className}`}
        style={{ aspectRatio: ratio.replace('/', ' / ') }}
      >
        <Placeholder filename={expectedFilename} />
      </div>
    );
  }

  // ---------- FRAMED / RATIO-LOCKED MODE ----------
  const overlay =
    tone === 'magenta'
      ? 'bg-gradient-to-tr from-magenta/20 via-transparent to-teal/10'
      : tone === 'teal'
      ? 'bg-gradient-to-tr from-teal/20 via-transparent to-magenta/10'
      : 'bg-gradient-to-tr from-ink/20 via-transparent to-transparent';

  return (
    <div
      className={`${framed ? 'photo-frame' : 'relative overflow-hidden rounded-3xl'} ${className}`}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      {!errored && src ? (
        <>
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={handleError}
          />
          <div className={`absolute inset-0 pointer-events-none ${overlay}`} />
        </>
      ) : (
        <Placeholder filename={expectedFilename} />
      )}
    </div>
  );
}

function Placeholder({ filename }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6"
      style={{
        background:
          'linear-gradient(135deg, #ffe6ee 0%, #ffd0e1 50%, #c8eef0 100%)',
      }}
    >
      <div className="absolute inset-3 rounded-[inherit] border border-dashed" style={{ borderColor: 'rgba(212, 175, 55, 0.7)' }} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-8 w-8 text-magenta opacity-70"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="1.6" />
        <path d="M3 16l5-4 4 3 3-2 6 5" />
      </svg>
      <p className="relative text-[10px] uppercase tracking-[0.32em] text-ink/70 font-bold">
        Photo placeholder
      </p>
      {filename && (
        <p className="relative editorial italic text-sm text-ink/65">
          Upload to <code className="font-mono not-italic">/public/photos/{filename}</code>
        </p>
      )}
    </div>
  );
}
