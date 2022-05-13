import './landingPage.css';
import { useEffect } from 'react';
import { traitsAnimation } from './animations';

function LandingPage() {
  useEffect(() => {
    traitsAnimation();
  }, []);

  return (
    <main className='landing_page page'>
      <h1 className='name_heading'>spencer_knight</h1>
      <hr id='name_trait_divisor'></hr>
      <ul className='personal_description'>
        <li id='personal_description_web_developer'>Web Developer</li>
        <li id='personal_description_fitness'>Fitness 🤍</li>
        <li id='personal_description_veteran'>
          <div>V</div>
          <div>e</div>
          <div>teran</div>
        </li>
      </ul>
      <div className='homepage_down_arrow'></div>
    </main>
  );
}

export default LandingPage;
