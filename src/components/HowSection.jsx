import { C } from '../tokens';
import Pill from './shared/Pill';
import PhoneFrame from '../phone/PhoneFrame';
import MiniSettlement from '../phone/MiniSettlement';

export default function HowSection() {
  const steps = [
    { n: '01', t: 'Create a session', b: 'Name it Cafe, Trip to Lisbon, or Sunday roast. The group lives inside it.' },
    { n: '02', t: 'Add your group and rounds', b: 'Tap who joined, tap who paid, and RoundFair logs the round in seconds.' },
    { n: '03', t: 'Let RoundFair settle up', b: 'At the end of the night, see exactly who owes who — and how much.' },
  ];
  return (
    <section id="how" style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 28px' }}>
      <div style={{ maxWidth: 720, marginBottom: 64 }}>
        <Pill style={{ marginBottom: 18 }}>How it works</Pill>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
          letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0,
        }}>
          Three taps. One fair settlement.
        </h2>
      </div>

      <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24,
              padding: '28px 28px 28px 0',
              borderBottom: i < steps.length - 1 ? `1px solid ${C.divider}` : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-rounded)', fontSize: 22, fontWeight: 600,
                color: C.mint, letterSpacing: '-0.01em',
              }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em' }}>{s.t}</div>
                <div style={{ marginTop: 8, fontSize: 16, color: C.fgMuted, lineHeight: 1.55, maxWidth: 460 }}>{s.b}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="how-phone" style={{ position: 'relative', height: 640, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ filter: 'drop-shadow(0 30px 60px rgba(13,40,33,0.18))' }}>
            <PhoneFrame w={300} h={620}><MiniSettlement/></PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
