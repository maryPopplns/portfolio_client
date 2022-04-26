import './homepage.css';
import { useEffect } from 'react';
import Cursor from './cursor/Cursor';
import { useDispatch } from 'react-redux';
import Skills from './pages/skills/Skills';
import ContactMe from './pages/contactMe/ContactMe';
import LandingPage from './pages/landingPage/LandingPage';
import { setCurrentPage } from '../../store/slices/currentPage';

import {
  sectionWipe,
  traitsAnimation,
  pageDivisonAnimation,
  skillsAnimation,
  contactAnimation,
  navbarAnimation,
} from './utils/animations';

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage('homepage'));
  }, [dispatch]);

  useEffect(() => {
    const scrollHandler = navbarAnimation();
    window.addEventListener('scroll', scrollHandler);
    // remove scroll handler
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    sectionWipe();
    traitsAnimation();
    pageDivisonAnimation();
    skillsAnimation();
    contactAnimation();
  }, []);

  return (
    <div className='homepageContainer'>
      <LandingPage />
      <Skills />
      <ContactMe />
      <Cursor />
    </div>
  );
}

export default Homepage;
