import { C } from '../tokens';
import AppIcon from './shared/AppIcon';
import PrimaryCTA from './shared/PrimaryCTA';
import AppStoreGlyph from './shared/AppStoreGlyph';

export default function FinalCTA() {
  return (
    <section style={{ background: C.bg, padding: '140px 28px 120px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 900, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(46,185,151,0.16), rgba(46,185,151,0) 70%)',
      }}/>
      <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'inline-block' }}>
          <AppIcon size={72}/>
        </div>
        <h2 style={{
          marginTop: 28,
          fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02, textWrap: 'balance',
        }}>
          Be ready to <span style={{ color: C.mint, fontStyle: 'italic' }}>split smarter</span>.
        </h2>
        <p style={{ marginTop: 18, fontSize: 19, color: C.fgMuted, maxWidth: 520, marginInline: 'auto' }}>
          RoundFair launches soon for iPhone and iPad. € 0,99, one-time. No accounts. No nonsense.
        </p>
        <div style={{ marginTop: 32, display: 'inline-flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', alignItems: 'center' }}>
          <PrimaryCTA large ariaLabel="Coming soon on the App Store">
            <AppStoreGlyph size={18}/>
            <span>Coming soon on the App Store</span>
          </PrimaryCTA>
          <span style={{ fontSize: 14, color: C.fgSubtle }}>Notify-me opens at launch.</span>
        </div>
      </div>
    </section>
  );
}
