import './homepage.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AboutMe from './pages/aboutMe/AboutMe';
import LandingPage from './pages/landingPage/LandingPage';
import { setCurrentPage } from '../../store/slices/currentPage';

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('home'));
  }, [dispatch]);

  return (
    <div className='homepageContainer'>
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default Homepage;
