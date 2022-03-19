import './skills.css';
import css from './icons/css3.svg';
import html from './icons/html5.svg';
import js from './icons/javascript.svg';
import sass from './icons/sass.svg';
import react from './icons/react.svg';
import node from './icons/nodejs.svg';
import git from './icons/git.svg';
import jest from './icons/jest.svg';

function Skills() {
  return (
    <main className='skills page'>
      <h1>skills</h1>
      <hr id='title_skills_divisor'></hr>
      <ul>
        <li>
          <img className='technology_icon' src={css} alt='css icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={html} alt='html icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={js} alt='javascript icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={sass} alt='sass icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={react} alt='react icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={node} alt='node icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={git} alt='git icon'></img>
        </li>
        <li>
          <img className='technology_icon' src={jest} alt='jest icon'></img>
        </li>
      </ul>
    </main>
  );
}

export default Skills;
