import { C } from '../../tokens';

export default function Pill({ children, accent = false, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 12px', borderRadius: 999,
      background: accent ? C.mintSoft : C.bgSoft,
      color: accent ? C.mintDk : C.fgMuted,
      fontSize: 13, fontWeight: 500,
      border: '1px solid ' + (accent ? 'rgba(46,185,151,0.22)' : 'rgba(0,0,0,0.06)'),
      ...style,
    }}>{children}</span>
  );
}
