import './homepage.css';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import Technologies from './pages/technologies/Technologies';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import {
  pageTransitions,
  traitsAnimation,
  placeholderAnimation,
} from './utils/animations';

function Homepage() {
  useEffect(() => {
    pageTransitions();
    traitsAnimation();
    placeholderAnimation();
  }, []);

  return (
    <div className='container'>
      <LandingPage />
      <Technologies />
      <Placeholder2 />
    </div>
  );
}

export default Homepage;
