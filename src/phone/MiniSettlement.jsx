import { PhoneColors } from './phoneColors';
import PhoneAvatar from './PhoneAvatar';

export default function MiniSettlement() {
  const recv = [{ n: 'Emily', a: '+ € 21,55' }, { n: 'Marcus', a: '+ € 10,20' }];
  const pay  = [{ n: 'Jake', a: '− € 20,55' }, { n: 'Sofia', a: '− € 10,20' }, { n: 'Aaliyah', a: '− € 2,45' }];
  return (
    <div style={{ position: 'absolute', inset: 0, paddingTop: 38, background: PhoneColors.bg }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 18px 0' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Settlement</div>
          <div style={{ fontSize: 11, color: PhoneColors.sec, marginTop: 4 }}>Cafe</div>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
        </div>
      </div>
      <div style={{ padding: '14px 18px 6px' }}>
        <div style={{ fontSize: 11, color: PhoneColors.sec }}>Still to settle</div>
        <div style={{ fontSize: 34, fontWeight: 700, color: PhoneColors.mint, letterSpacing: '-0.025em', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>€ 42,10</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <span style={{ fontSize: 11, color: PhoneColors.sec, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: PhoneColors.pos }}/>2 receiving
          </span>
          <span style={{ fontSize: 11, color: PhoneColors.sec, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: PhoneColors.neg }}/>3 paying
          </span>
        </div>
      </div>

      <div style={{ padding: '14px 18px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px 8px' }}>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: PhoneColors.posBg, color: PhoneColors.pos, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14m-7-7l7 7 7-7"/></svg>
          </span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Receiving</span>
        </div>
        <div style={{ background: PhoneColors.surf2, borderRadius: 16, padding: '2px 14px', marginBottom: 12 }}>
          {recv.map((r, i) => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: i === 0 ? 0 : `1px solid ${PhoneColors.divider}` }}>
              <PhoneAvatar name={r.n} size={28}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 9, color: PhoneColors.ter, marginTop: 1 }}>gets back</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: PhoneColors.pos, fontVariantNumeric: 'tabular-nums' }}>{r.a}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px 8px' }}>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: PhoneColors.negBg, color: PhoneColors.neg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5m-7 7l7-7 7 7"/></svg>
          </span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Paying</span>
        </div>
        <div style={{ background: PhoneColors.surf2, borderRadius: 16, padding: '2px 14px' }}>
          {pay.map((r, i) => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: i === 0 ? 0 : `1px solid ${PhoneColors.divider}` }}>
              <PhoneAvatar name={r.n} size={28}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 9, color: PhoneColors.ter, marginTop: 1 }}>needs to pay</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: PhoneColors.neg, fontVariantNumeric: 'tabular-nums' }}>{r.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
