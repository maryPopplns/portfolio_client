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
    gsap.utils.toArray('.page').forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: true, // gives extra space for each page
      });
    });
    //
    gsap.to('.firstBox', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.placeholder',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <main className='container'>
        <LandingPage />
        <Placeholder />
        <Placeholder2 />
      </main>
    </>
  );
}

export default Homepage;
