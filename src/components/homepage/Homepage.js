import './homepage.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';

function Homepage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.page').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: i === 1 ? true : false,
      });
    });
    // placeholder text
    gsap.to('.firstBox', {
      right: 0,
      scrollTrigger: {
        trigger: '.placeholder',
        start: 'top top',
        yoyo: true,
      },
    });
    gsap.to('.secondBox', {
      left: 0,
      display: 'block',
      scrollTrigger: {
        trigger: '.placeholder',
        start: 'top top',
        yoyo: true,
      },
    });
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
