import './homepage.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AboutMe from './pages/aboutMe/AboutMe';
import { setCurrentPage } from '../../store/slices/currentPage';
import ContactMe from './pages/contactMe/ContactMe';
import LandingPage from './pages/landingPage/LandingPage';

import {
  sectionWipe,
  traitsAnimation,
  pageDivisonAnimation,
  aboutAnimation,
  contactAnimation,
  navbarAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    // animations
    sectionWipe();
    traitsAnimation();
    pageDivisonAnimation();
    aboutAnimation();
    contactAnimation();
  }, []);
  useEffect(() => {
    // hide navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('show_navbar');
    // remove scroll handler upon dismount
    const scrollHandler = navbarAnimation();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('home'));
  }, [dispatch]);

  return (
    <div className='homepageContainer'>
      <LandingPage />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default Homepage;
