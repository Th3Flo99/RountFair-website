import { PhoneColors } from './phoneColors';
import PhoneAvatar from './PhoneAvatar';

export default function MiniGroup() {
  const rows = [
    { n: 'Jake', a: '€ 29,45' },
    { n: 'Emily', a: '€ 29,45' },
    { n: 'Marcus', a: '€ 10,20' },
    { n: 'Sofia', a: '€ 29,45' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, paddingTop: 38, background: PhoneColors.bg }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px 0' }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M15 5l-7 7 7 7"/></svg>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(79,217,181,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PhoneColors.mint }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 16V4M8 8l4-4 4 4"/><path d="M5 14v5a2 2 0 002 2h10a2 2 0 002-2v-5"/></svg>
        </div>
      </div>
      <div style={{ padding: '14px 18px 0' }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Cafe</div>
        <div style={{ fontSize: 34, fontWeight: 700, color: PhoneColors.mint, lineHeight: 1.05, letterSpacing: '-0.025em', marginTop: 8, fontVariantNumeric: 'tabular-nums' }}>€ 42,10</div>
        <div style={{ fontSize: 12, color: PhoneColors.sec, marginTop: 2 }}>outstanding</div>
        <div style={{ fontSize: 11, color: PhoneColors.ter, marginTop: 4 }}>5 participants · 3 rounds · 5 to settle</div>
      </div>

      <div style={{ padding: '20px 18px 0' }}>
        <div style={{ fontSize: 11, color: PhoneColors.sec, padding: '0 4px 8px' }}>Next round</div>
        <div style={{ background: PhoneColors.surf2, borderRadius: 16, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <PhoneAvatar name="Emily" size={32}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Emily</div>
            <div style={{ fontSize: 11, color: PhoneColors.sec, marginTop: 2 }}>is up next</div>
          </div>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(79,217,181,0.18)', color: PhoneColors.mint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14m-7-7l7 7 7-7"/></svg>
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 18px 0' }}>
        <div style={{ fontSize: 11, color: PhoneColors.sec, padding: '0 4px 8px' }}>Participants</div>
        <div style={{ background: PhoneColors.surf2, borderRadius: 16, padding: '2px 14px' }}>
          {rows.map((r, i) => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderTop: i === 0 ? 0 : `1px solid ${PhoneColors.divider}` }}>
              <PhoneAvatar name={r.n} size={28}/>
              <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{r.n}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{r.a}</div>
                <div style={{ fontSize: 9, color: PhoneColors.ter, marginTop: 1 }}>share</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'rgba(11,11,13,0.85)', backdropFilter: 'blur(20px) saturate(140%)',
        padding: '11px 16px 24px', display: 'flex', gap: 8,
      }}>
        <button style={{ flex: 1, background: PhoneColors.mint, color: '#06231A', border: 0, borderRadius: 22, padding: '10px', fontSize: 13, fontWeight: 600, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)' }}>+ Round</button>
        <button style={{ flex: 1, background: '#13605A', color: '#fff', border: 0, borderRadius: 22, padding: '10px', fontSize: 13, fontWeight: 600 }}>Settlement</button>
      </div>
    </div>
  );
}
