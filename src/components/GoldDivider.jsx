export default function GoldDivider({ className = '', center = true }) {
  return (
    <div
      className={`gold-rule ${center ? 'mx-auto' : ''} w-40 ${className}`}
      aria-hidden="true"
    />
  );
}
