import { useState } from 'react';
import { C } from '../../tokens';

export default function PrimaryCTA({ children, large = false, ariaLabel }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <button
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: press ? C.mintDk : (hover ? '#2DC2A0' : C.mint),
        color: '#06231A',
        border: 0, cursor: 'pointer',
        fontFamily: 'var(--font-system)', fontWeight: 600,
        fontSize: large ? 17 : 15,
        letterSpacing: '-0.01em',
        padding: large ? '16px 24px' : '12px 18px',
        borderRadius: 999,
        boxShadow: press
          ? 'inset 0 1px 0 rgba(255,255,255,0.10), 0 2px 8px rgba(46,185,151,0.20)'
          : '0 6px 18px rgba(46,185,151,0.28), inset 0 1px 0 rgba(255,255,255,0.20)',
        transform: press ? 'scale(0.985)' : 'none',
        transition: 'all 180ms cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {children}
    </button>
  );
}
