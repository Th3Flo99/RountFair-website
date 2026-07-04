import Nav from './components/Nav';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowSection from './components/HowSection';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0A0A0B', minHeight: '100vh' }}>
      <Nav/>
      <Hero/>
      <ProblemSection/>
      <FeaturesSection/>
      <HowSection/>
      <AudienceSection/>
      <PricingSection/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}
