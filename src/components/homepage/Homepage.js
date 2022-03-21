import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Skills from './pages/skills/Skills';
import ContactMe from './pages/contactMe/ContactMe';
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
      <ContactMe />
    </div>
  );
}

export default Homepage;
