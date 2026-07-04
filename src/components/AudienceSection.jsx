import { C } from '../tokens';
import Pill from './shared/Pill';

export default function AudienceSection() {
  const items = [
    { t: 'Nights out', b: 'Bars, rounds, the loud table.', emoji: 'NO' },
    { t: 'Trips', b: 'Hotels, taxis, that one big dinner.', emoji: 'TR' },
    { t: 'Dinners', b: 'Long tables, shared plates, one bill.', emoji: 'DI' },
    { t: 'Housemates', b: 'Groceries, utilities, the Friday pizza.', emoji: 'HM' },
    { t: 'Group activities', b: 'Concerts, ski weekends, anything pooled.', emoji: 'GA' },
  ];
  return (
    <section id="audience" style={{
      background: C.bg,
      padding: '120px 0',
      borderTop: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <Pill style={{ marginBottom: 18 }}>For whom</Pill>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
            letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0,
          }}>
            For anyone who'd rather enjoy the moment than tally it.
          </h2>
        </div>
        <div className="audience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {items.map((it, i) => (
            <div key={it.t} style={{
              background: i === 0 ? C.mintSoft : C.bgSoft,
              border: '1px solid ' + (i === 0 ? 'rgba(46,185,151,0.22)' : 'rgba(0,0,0,0.04)'),
              borderRadius: 20, padding: '24px 22px', minHeight: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: i === 0 ? C.mint : C.bg,
                color: i === 0 ? '#06231A' : C.fg,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-rounded)', fontWeight: 600, fontSize: 13, letterSpacing: '-0.02em',
                boxShadow: i === 0 ? 'none' : '0 1px 3px rgba(0,0,0,0.05)',
              }}>{it.emoji}</div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em' }}>{it.t}</div>
                <div style={{ marginTop: 6, fontSize: 14, color: C.fgMuted, lineHeight: 1.5 }}>{it.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
