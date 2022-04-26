import './navbar.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';

function Navbar() {
  const [blogClass, setBlogClass] = useState('');
  const [projectsClass, setProjectsClass] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, [dispatch]);

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
    <>
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
      <Outlet />
    </>
  );
}

export default Navbar;
