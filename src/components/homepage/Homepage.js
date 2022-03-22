import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Skills from './pages/skills/Skills';
import ContactMe from './pages/contactMe/ContactMe';
import Cursor from './cursor/Cursor';
import Navbar from './navbar/Navbar';
import {
  sectionWipe,
  traitsAnimation,
  pageDivisonAnimation,
  skillsAnimation,
  contactAnimation,
  navbarAnimation,
  navbarHover,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    sectionWipe();
    traitsAnimation();
    pageDivisonAnimation();
    skillsAnimation();
    contactAnimation();
    navbarAnimation();
    navbarHover();
  }, []);

  return (
    <div className='homepageContainer'>
      <LandingPage />
      <Skills />
      <ContactMe />
      <Cursor />
      <Navbar />
    </div>
  );
}

export default Homepage;
