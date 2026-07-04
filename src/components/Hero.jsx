import { C } from '../tokens';
import Pill from './shared/Pill';
import PrimaryCTA from './shared/PrimaryCTA';
import AppStoreGlyph from './shared/AppStoreGlyph';
import PhoneFrame from '../phone/PhoneFrame';
import MiniGroup from '../phone/MiniGroup';
import MiniSettlement from '../phone/MiniSettlement';

function HeroStat({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-rounded)', fontSize: 17, fontWeight: 600, color: C.fg, letterSpacing: '-0.01em' }}>
        {value}
      </div>
      <div style={{ fontSize: 13, color: C.fgSubtle, marginTop: 2 }}>{label}</div>
    </div>
  );
}

function HeroPhones() {
  return (
    <div className="hero-phones" style={{
      position: 'relative', width: '100%', height: 660,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div className="hero-phone-back" style={{
        position: 'absolute', top: 24, left: '12%',
        transform: 'rotate(-6deg) scale(0.86)', transformOrigin: 'center',
        zIndex: 1, filter: 'drop-shadow(0 30px 60px rgba(13,40,33,0.18))',
      }}>
        <PhoneFrame><MiniSettlement/></PhoneFrame>
      </div>
      <div className="hero-phone-front" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-42%)',
        zIndex: 2, filter: 'drop-shadow(0 40px 70px rgba(13,40,33,0.28))',
      }}>
        <PhoneFrame><MiniGroup/></PhoneFrame>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: -240, left: '50%', transform: 'translateX(-50%)',
        width: 1100, height: 720, pointerEvents: 'none',
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(46,185,151,0.18), rgba(46,185,151,0) 70%)',
        filter: 'blur(20px)',
      }}/>
      <div className="hero-grid" style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '64px 28px 80px',
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <Pill accent style={{ marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.mint }}/>
            Coming soon to iOS
          </Pill>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 6vw, 76px)',
            fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.02,
            margin: 0, color: C.fg, textWrap: 'balance',
          }}>
            Track rounds.<br/>
            Split <span style={{ color: C.mint, fontStyle: 'italic', fontWeight: 700 }}>fairly</span>.<br/>
            Settle easily.
          </h1>
          <p style={{
            marginTop: 22, maxWidth: 520,
            fontSize: 19, lineHeight: 1.5, color: C.fgMuted,
          }}>
            RoundFair keeps shared expenses honest. Log a round in seconds, see who's up next, and let the math settle the night.
          </p>
          <div style={{ marginTop: 34, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <PrimaryCTA large ariaLabel="Coming soon on the App Store">
              <AppStoreGlyph size={18}/>
              <span>Coming soon on the App Store</span>
            </PrimaryCTA>
            <span style={{ fontSize: 14, color: C.fgSubtle, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.fgSubtle }}/>
              Launch price € 0,99 · one-time purchase
            </span>
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <HeroStat value="seconds" label="To log a round"/>
            <HeroStat value="100% local" label="No account, no cloud"/>
            <HeroStat value="iCloud" label="Share between devices"/>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 640 }}>
          <HeroPhones/>
        </div>
      </div>
    </section>
  );
}
