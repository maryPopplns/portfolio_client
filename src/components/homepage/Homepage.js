import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';
import ScrollMagic from 'scrollmagic';
import './homepage.css';
import { useEffect } from 'react';

function Homepage() {
  useEffect(() => {
    //
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        // duration: '200%',
      },
    });
    const pages = document.querySelectorAll('div.page');
    for (let i = 0; i < pages.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: pages[i],
      })
        .setPin(pages[i], { pushFollowers: false })
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
