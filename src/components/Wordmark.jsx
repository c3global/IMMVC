// Clean typographic wordmark used in the Navbar and Footer until a
// real brand mark is provided. Intentionally plain — no fabricated
// monograms, circles, or icons.

export default function Wordmark({ tone = 'light', compact = false }) {
  const line1 = tone === 'light' ? 'text-white' : 'text-ink';
  const line2 = tone === 'light' ? 'text-blush/80' : 'text-ink/55';
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif font-semibold ${
          compact ? 'text-lg' : 'text-xl'
        } tracking-wide ${line1}`}
      >
        Mamas &amp; Mentors
      </span>
      <span
        className={`mt-1 text-[9px] uppercase tracking-[0.38em] ${line2}`}
      >
        International
      </span>
    </span>
  );
}
