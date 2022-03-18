import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import {
  pageTransitions,
  descriptionAnimation,
  placeholderAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    pageTransitions();
    descriptionAnimation();
    placeholderAnimation();
  }, []);

  return (
    <div className='container'>
      <LandingPage />
      <Placeholder />
      <Placeholder2 />
    </div>
  );
}

export default Homepage;
