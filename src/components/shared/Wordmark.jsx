import { C } from '../../tokens';

export default function Wordmark({ size = 22 }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size,
      letterSpacing: '-0.02em', color: C.fg,
    }}>RoundFair</span>
  );
}
