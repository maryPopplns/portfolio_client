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
    // hide navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('show_navbar');
    // remove scroll handler upon dismount
    const scrollHandler = navbarAnimation();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    // animations
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
