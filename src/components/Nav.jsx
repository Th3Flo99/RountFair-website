import { useState, useEffect } from 'react';
import AppIcon from './shared/AppIcon';
import Wordmark from './shared/Wordmark';
import GhostLink from './shared/GhostLink';
import PrimaryCTA from './shared/PrimaryCTA';
import AppStoreGlyph from './shared/AppStoreGlyph';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.0)',
      backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      transition: 'all 240ms ease',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '14px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <AppIcon size={32}/>
          <Wordmark size={18}/>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <GhostLink href="#features">Features</GhostLink>
          <GhostLink href="#how">How it works</GhostLink>
          <GhostLink href="#audience">For whom</GhostLink>
          <GhostLink href="#pricing">Pricing</GhostLink>
          <PrimaryCTA ariaLabel="Coming soon on the App Store">
            <AppStoreGlyph/>
            <span>Coming soon</span>
          </PrimaryCTA>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 0, cursor: 'pointer',
            padding: 8, color: '#0A0A0B',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          padding: '8px 28px 20px',
          display: 'flex', flexDirection: 'column', gap: 16,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <a href="#features" onClick={() => setMenuOpen(false)} style={{ color: '#6D6D72', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Features</a>
          <a href="#how" onClick={() => setMenuOpen(false)} style={{ color: '#6D6D72', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>How it works</a>
          <a href="#audience" onClick={() => setMenuOpen(false)} style={{ color: '#6D6D72', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>For whom</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} style={{ color: '#6D6D72', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Pricing</a>
          <PrimaryCTA ariaLabel="Coming soon on the App Store">
            <AppStoreGlyph/>
            <span>Coming soon</span>
          </PrimaryCTA>
        </div>
      )}
    </header>
  );
}
