import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import ScrollMagic from 'scrollmagic';
import './homepage.css';
import { useEffect } from 'react';

function Homepage() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: '200%',
      },
    });
    const slides = document.querySelectorAll('div.page');

    // create scene for every slide
    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .addTo(controller);
    }
  }, []);

  return (
    <main>
      <LandingPage />
      <Placeholder />
      <Placeholder2 />
    </main>
  );
}

export default Homepage;
