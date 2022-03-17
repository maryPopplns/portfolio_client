import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './homepage.css';

function Homepage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.page').forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    });
  }, []);

  return (
    <>
      <main>
        <LandingPage />
        <Placeholder />
        <Placeholder2 />
      </main>
    </>
  );
}

export default Homepage;
