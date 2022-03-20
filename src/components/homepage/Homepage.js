import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Skills from './pages/skills/Skills';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import {
  sectionWipe,
  traitsAnimation,
  pageDivisonAnimation,
  skillsAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    sectionWipe();
    traitsAnimation();
    pageDivisonAnimation();
    skillsAnimation();
  }, []);

  return (
    <div className='container'>
      <LandingPage />
      <Skills />
      <Placeholder2 />
    </div>
  );
}

export default Homepage;
