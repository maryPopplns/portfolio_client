import './technologies.css';
import CSS from './icons/css3.svg';
import HTML from './icons/html5.svg';
import JS from './icons/javascript.svg';
import SASS from './icons/sass.svg';
import REACT from './icons/react.svg';
import NODE from './icons/nodejs.svg';
import GIT from './icons/git.svg';
import JEST from './icons/jest.svg';

function Technologies() {
  return (
    <main className='technologies page'>
      <h1>technologies</h1>
      <ul>
        <li>
          <img className='technology_icon' src={CSS} alt='css icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={HTML} alt='html icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={JS} alt='javascript icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={SASS} alt='sass icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={REACT} alt='react icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={NODE} alt='node icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={GIT} alt='git icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={JEST} alt='jest icon'></img>
        </li>
      </ul>
    </main>
  );
}

export default Technologies;
