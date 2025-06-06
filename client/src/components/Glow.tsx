import { useId } from 'react';

export default function Glow() {
  const id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(133, 169, 143, 0.8)" />  {/* Dark center */}
            <stop offset="40%" stopColor="rgba(211, 241, 223, 0.4)" /> {/* Medium */}
            <stop offset="100%" stopColor="rgba(255, 251, 235, 0.1)" /> {/* Light outer */}
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cx="50%" cy="60%">
            <stop offset="0%" stopColor="rgba(133, 169, 143, 0.6)" />  {/* Dark center */}
            <stop offset="50%" stopColor="rgba(211, 241, 223, 0.3)" /> {/* Medium */}
            <stop offset="100%" stopColor="rgba(255, 251, 235, 0.05)" /> {/* Light outer */}
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
    </div>
  );
}

