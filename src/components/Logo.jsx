// Real logo asset loaded from /public/brand/.
// Use variant="white" on dark backgrounds, variant="color" on light.
export default function Logo({ variant = 'color', className = '', height = 56 }) {
  const src =
    variant === 'white'
      ? '/brand/logo-white.png'
      : '/brand/logo-color.png';
  return (
    <img
      src={src}
      alt="Mamas & Mentors International"
      className={`block w-auto ${className}`}
      style={{ height }}
      loading="eager"
      decoding="async"
    />
  );
}
