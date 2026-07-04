import { C } from '../tokens';
import Pill from './shared/Pill';

const FeatureIcons = {
  sessions: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/><circle cx="7.5" cy="14" r="1"/></svg>),
  participants: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15 14c2.5 0 5 1.5 5 4"/></svg>),
  rounds: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 4v5h-5"/></svg>),
  split: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h12l-3-3M17 17H5l3 3"/></svg>),
  balance: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14v17l-3-2-2 2-2-2-2 2-2-2-3 2V4z"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>),
  cloud: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 010-8 6 6 0 0111.5 1.5A4 4 0 0118 18H7z"/><path d="M12 14v5m-2-2l2 2 2-2"/></svg>),
  lang: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>),
  local: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>),
};

function FeatureCard({ icon, title, body }) {
  return (
    <div style={{
      background: C.bg, border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: 20, padding: '24px 24px 26px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      display: 'flex', flexDirection: 'column', gap: 14,
      minHeight: 168,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: C.mintSoft, color: C.mintDk,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid rgba(46,185,151,0.20)',
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.012em' }}>{title}</div>
        <div style={{ marginTop: 6, fontSize: 14.5, color: C.fgMuted, lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" style={{
      background: C.bgSoft,
      padding: '120px 0',
      borderTop: '1px solid rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <Pill style={{ marginBottom: 18 }}>Features</Pill>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
            letterSpacing: '-0.025em', lineHeight: 1.05, margin: 0,
          }}>
            Everything you need.<br/>
            <span style={{ color: C.fgMuted }}>Nothing you don't.</span>
          </h2>
        </div>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <FeatureCard icon={FeatureIcons.sessions} title="Create sessions"
            body="A session per night, trip, or shared bill. Stays organized as the group does its thing."/>
          <FeatureCard icon={FeatureIcons.participants} title="Add participants"
            body="Type a name, you're in. No invites, no accounts, no friction."/>
          <FeatureCard icon={FeatureIcons.rounds} title="Track rounds"
            body="Log each round in seconds. Pick who joined, who paid, an optional tip."/>
          <FeatureCard icon={FeatureIcons.split} title="Split expenses"
            body="Per-item or per-round, even or weighted. The math is automatic and transparent."/>
          <FeatureCard icon={FeatureIcons.balance} title="See who owes what"
            body="An automatic settlement at the end. No more spreadsheets, no more guessing."/>
          <FeatureCard icon={FeatureIcons.cloud} title="Share with iCloud"
            body="Sync a session across devices. Anyone in the group can add the next round."/>
          <FeatureCard icon={FeatureIcons.lang} title="Multilingual"
            body="Localized for friends across borders. Currency and language follow your device."/>
          <FeatureCard icon={FeatureIcons.local} title="100% local"
            body="No account, no analytics, no cloud server. Your data stays on the devices you choose."/>
        </div>
      </div>
    </section>
  );
}
