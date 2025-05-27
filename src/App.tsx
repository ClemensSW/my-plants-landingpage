import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProblemSolution from './components/ProblemSolution/ProblemSolution'
import TargetGroups from './components/TargetGroups/TargetGroups'
import KeyFeatures from './components/KeyFeatures/KeyFeatures'
import SocialProof from './components/SocialProof/SocialProof'
import PricingDemo from './components/PricingDemo/PricingDemo'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import './styles/globals.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <TargetGroups />
        <KeyFeatures />
        <SocialProof />
        <PricingDemo />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App