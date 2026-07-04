import { C } from '../../tokens';

export default function GhostLink({ children, href = '#' }) {
  return (
    <a href={href} style={{
      color: C.fgMuted, textDecoration: 'none', fontSize: 15, fontWeight: 500,
    }}>{children}</a>
  );
}
