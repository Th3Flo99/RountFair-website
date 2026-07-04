import { C } from '../tokens';
import Pill from './shared/Pill';
import AppIcon from './shared/AppIcon';
import PrimaryCTA from './shared/PrimaryCTA';
import AppStoreGlyph from './shared/AppStoreGlyph';

export default function PricingSection() {
  const features = [
    'One-time purchase',
    'Unlimited sessions and rounds',
    'iCloud sharing across devices',
    'Multilingual support',
    'Future updates included',
  ];
  return (
    <section id="pricing" style={{
      background: C.bgSoft, padding: '120px 0',
      borderTop: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div className="pricing-grid" style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <Pill style={{ marginBottom: 18 }}>Pricing</Pill>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
            letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0,
          }}>
            Pay once. Use it forever.
          </h2>
          <p style={{ marginTop: 20, fontSize: 18, color: C.fgMuted, lineHeight: 1.55, maxWidth: 460 }}>
            RoundFair launches as a paid iOS app for € 0,99. No subscriptions, no in-app purchases, no upsells. The price of half a coffee, once.
          </p>
        </div>

        <div style={{
          background: C.bg, borderRadius: 28, padding: 36,
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 24px 48px rgba(13,40,33,0.08)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: -120, right: -120, width: 280, height: 280,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,185,151,0.18), rgba(46,185,151,0) 70%)',
            pointerEvents: 'none',
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
            <AppIcon size={44}/>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em' }}>RoundFair</div>
              <div style={{ fontSize: 13, color: C.fgMuted }}>iOS · iPhone & iPad</div>
            </div>
          </div>

          <div style={{ marginTop: 28, display: 'flex', alignItems: 'baseline', gap: 6, position: 'relative' }}>
            <span style={{ fontFamily: 'var(--font-rounded)', fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', color: C.mint, lineHeight: 1 }}>€ 0,99</span>
            <span style={{ fontSize: 14, color: C.fgMuted, marginLeft: 6 }}>at launch · one-time</span>
          </div>

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
            {features.map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: C.fg }}>
                <span style={{
                  width: 20, height: 20, borderRadius: '50%', background: C.mintSoft,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: C.mintDk, flexShrink: 0,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
                </span>
                {f}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, position: 'relative' }}>
            <PrimaryCTA large ariaLabel="Coming soon on the App Store">
              <AppStoreGlyph size={18}/>
              <span>Coming soon on the App Store</span>
            </PrimaryCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
