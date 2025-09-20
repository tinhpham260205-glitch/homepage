export default function EVIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="EV rental illustration">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="400" fill="url(#g)" />
      <g opacity="0.25">
        <circle cx="120" cy="120" r="80" fill="#34d399" />
        <circle cx="480" cy="90" r="60" fill="#10b981" />
        <circle cx="520" cy="300" r="70" fill="#6ee7b7" />
      </g>
      <g>
        <rect x="70" y="140" width="24" height="140" rx="6" fill="#0ea5e9" opacity="0.15" />
        <circle cx="82" cy="150" r="6" fill="#34d399" />
        <rect x="90" y="160" width="10" height="60" rx="2" fill="#34d399" />
      </g>
      <g>
        <rect x="140" y="220" width="360" height="80" rx="16" fill="#065f46" />
        <rect x="160" y="200" width="280" height="60" rx="20" fill="#10b981" />
        <circle cx="200" cy="300" r="22" fill="#0ea5e9" opacity="0.25" />
        <circle cx="420" cy="300" r="22" fill="#0ea5e9" opacity="0.25" />
        <rect x="170" y="210" width="80" height="20" rx="10" fill="#ecfeff" />
      </g>
    </svg>
  );
}
