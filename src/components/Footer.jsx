import { C } from '../tokens';
import AppIcon from './shared/AppIcon';
import Wordmark from './shared/Wordmark';
import GhostLink from './shared/GhostLink';

export default function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.divider}`, padding: '40px 28px' }}>
      <div className="footer-inner" style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AppIcon size={26}/>
          <Wordmark size={15}/>
          <span style={{ fontSize: 13, color: C.fgSubtle, marginLeft: 12 }}>© 2026 RoundFair. Built for iOS.</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <GhostLink>Privacy</GhostLink>
          <GhostLink>Terms</GhostLink>
          <GhostLink>Contact</GhostLink>
        </div>
      </div>
    </footer>
  );
}
