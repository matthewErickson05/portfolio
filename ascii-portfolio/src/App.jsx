import './App.css';
import AsciiModel from './AsciiModel.jsx';
import TypewriterTitle from './Title.jsx';
import Navbar from './Navbar.jsx';
import AboutSection from './AboutSection.jsx';
import FeaturedProject from './FeaturedProject.jsx';
import SkillsChart from './SkillsChart.jsx';
import ThankYouSection from './ThankYouSection.jsx';

function App() {
  return (
    <div className='App'>
      <section className="landing-section">
        <div className="landing-container">
          <div className="landing-content">
          <Navbar />
            <div className="text-content">
              <TypewriterTitle />
              <div className="subtitle">
                Georgia Tech
              </div>
            </div>
            <div className="model-content">
              <AsciiModel />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <FeaturedProject />
      <SkillsChart />
      <ThankYouSection />
    </div>
  )
}

export default App;