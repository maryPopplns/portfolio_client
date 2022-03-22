import './navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [blogClass, setBlogClass] = useState('');
  const [projectsClass, setProjectsClass] = useState('');

  function blogEnterHandler() {
    setBlogClass('navbarHovered');
  }
  function blogExitHandler() {
    setBlogClass('');
  }
  function projectEnterHandler() {
    setProjectsClass('navbarHovered');
  }
  function projectExitHandler() {
    setProjectsClass('');
  }

  return (
    <nav id='homepage_navbar'>
      <ul>
        <li
          id='homepage_blog_link'
          onMouseEnter={blogEnterHandler}
          onMouseLeave={blogExitHandler}
          className={blogClass}
        >
          <Link to={'/blog'} className={blogClass}>
            blog
          </Link>
        </li>
        <li
          id='homepage_projects_link'
          onMouseEnter={projectEnterHandler}
          onMouseLeave={projectExitHandler}
          className={projectsClass}
        >
          <Link to={'/projects'} className={projectsClass}>
            projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
