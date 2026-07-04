export default function PhoneAvatar({ name, size = 32 }) {
  const palette = { J: '#B16A2E', E: '#8B3DA8', M: '#1B6E73', S: '#2D5BB8', A: '#C8581F' };
  const k = (name || '?')[0].toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: palette[k] || '#1B6E73',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontWeight: 600, fontSize: Math.round(size * 0.42), flexShrink: 0,
    }}>{k}</div>
  );
}
