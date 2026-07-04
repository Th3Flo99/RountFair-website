import { C } from '../tokens';
import Pill from './shared/Pill';

export default function ProblemSection() {
  const items = [
    { q: 'Who paid the last round?', a: '"Wait, was it Marcus or me?"' },
    { q: 'Who still owes who?', a: 'A messy thread of Venmo screenshots.' },
    { q: 'Whose turn is it?', a: 'The loudest person, usually.' },
  ];
  return (
    <section style={{
      maxWidth: 1180, margin: '0 auto',
      padding: '120px 28px 40px',
    }}>
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
        <Pill style={{ marginBottom: 18 }}>The problem</Pill>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
          letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0, textWrap: 'balance',
        }}>
          Group nights are fun. The math at the end isn't.
        </h2>
        <p style={{ marginTop: 18, fontSize: 18, color: C.fgMuted, lineHeight: 1.55 }}>
          Five drinks deep, nobody remembers who bought what. RoundFair handles the bookkeeping so the night stays the night.
        </p>
      </div>
      <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: C.bgSoft, borderRadius: 20, padding: '28px 24px',
            border: '1px solid rgba(0,0,0,0.04)',
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.mintDk, letterSpacing: '0.04em' }}>0{i+1}</div>
            <div style={{ marginTop: 14, fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              {it.q}
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: C.fgMuted, fontStyle: 'italic' }}>{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
