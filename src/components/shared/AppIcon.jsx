export default function AppIcon({ size = 56, radius }) {
  const r = radius ?? size * 0.225;
  return (
    <img
      src="/roundfair-logo.png"
      alt="RoundFair"
      width={size}
      height={size}
      style={{
        display: 'block',
        width: size,
        height: size,
        borderRadius: r,
        boxShadow: '0 8px 24px rgba(13,40,33,0.22)',
        objectFit: 'cover',
      }}
    />
  );
}
