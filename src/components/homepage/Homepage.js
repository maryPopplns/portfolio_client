import './homepage.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AboutMe from './pages/aboutMe/AboutMe';
import { setCurrentPage } from '../../store/slices/currentPage';
import ContactMe from './pages/contactMe/ContactMe';
import LandingPage from './pages/landingPage/LandingPage';

import {
  traitsAnimation,
  aboutAnimation,
  contactAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    traitsAnimation();
    aboutAnimation();
    contactAnimation();
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
