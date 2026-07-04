export default function PhoneFrame({ children, w = 300, h = 620 }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 44, overflow: 'hidden',
      background: '#0B0B0D', position: 'relative',
      boxShadow: '0 0 0 8px #1a1d1f, 0 0 0 9px #2c3033',
      fontFamily: 'var(--font-system)', color: '#F5F5F7',
    }}>
      <div style={{
        position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
        width: 92, height: 26, borderRadius: 16, background: '#000', zIndex: 30,
      }}/>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px 8px', height: 38, boxSizing: 'border-box',
        fontWeight: 600, fontSize: 13, color: '#fff',
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', opacity: 0.95 }}>
          <svg width="14" height="9" viewBox="0 0 18 11" fill="#fff">
            <rect x="0" y="7" width="3" height="4" rx="0.6"/>
            <rect x="5" y="5" width="3" height="6" rx="0.6"/>
            <rect x="10" y="2.5" width="3" height="8.5" rx="0.6"/>
            <rect x="15" y="0" width="3" height="11" rx="0.6"/>
          </svg>
          <svg width="13" height="9" viewBox="0 0 16 11" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
            <path d="M1 4 Q8 -1 15 4"/><path d="M3 6.5 Q8 3 13 6.5"/><path d="M5.5 9 Q8 7.5 10.5 9"/>
          </svg>
          <svg width="22" height="10" viewBox="0 0 26 12">
            <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="rgba(255,255,255,0.5)"/>
            <rect x="2" y="2" width="19" height="8" rx="1.5" fill="#fff"/>
            <rect x="23.5" y="4" width="2" height="4" rx="0.6" fill="rgba(255,255,255,0.4)"/>
          </svg>
        </div>
      </div>
      {children}
      <div style={{
        position: 'absolute', bottom: 7, left: '50%', transform: 'translateX(-50%)',
        width: 110, height: 4, borderRadius: 3, background: 'rgba(255,255,255,0.85)',
      }}/>
    </div>
  );
}
