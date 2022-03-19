import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Skills from './pages/skills/Skills';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import {
  pageTransitions,
  traitsAnimation,
  pageDivisonAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    pageTransitions();
    traitsAnimation();
    pageDivisonAnimation();
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
