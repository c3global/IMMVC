// A clearly-marked placeholder where a real brand photo or illustration
// will go. Shows an explicit "Image placeholder" label so it's obvious
// to reviewers that this slot needs a real asset — never a fabricated
// graphic.

export default function ImageSlot({
  label = 'Image placeholder',
  description,
  ratio = '4/3',
  tone = 'light',
  className = '',
  rounded = '3xl',
}) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`relative overflow-hidden rounded-${rounded} ${className}`}
      style={{ aspectRatio: ratio.replace('/', ' / ') }}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-[#1b1424] to-[#0b0b10]'
            : 'bg-gradient-to-br from-[#fff6f9] to-[#ffd9e5]'
        }`}
      />
      <div className="absolute inset-3 rounded-[inherit] border border-dashed border-[#b8913d]/60" />
      <div
        className={`relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center ${
          isDark ? 'text-white/80' : 'text-ink/65'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 opacity-60"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="1.6" />
          <path d="M3 16l5-4 4 3 3-2 6 5" />
        </svg>
        <p className="text-[10px] uppercase tracking-[0.32em] opacity-70">
          {label}
        </p>
        {description && (
          <p className={`font-serif italic text-sm ${isDark ? 'text-white/75' : 'text-ink/55'} max-w-[22ch]`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
