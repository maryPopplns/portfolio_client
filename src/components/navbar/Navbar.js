import './navbar.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';
import { useSelector, useDispatch } from 'react-redux';
import currentPage from '../../store/slices/currentPage';

function Navbar() {
  const [blogClass, setBlogClass] = useState('');
  const [projectsClass, setProjectsClass] = useState('');
  const [homeClass, setHomeClass] = useState('');
  const currentPage = useSelector((state) => state.currentPage.value);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, [dispatch]);

  function HomeLink() {
    return (
      <li
        onMouseEnter={() => setHomeClass('navbarHovered')}
        onMouseLeave={() => setHomeClass('')}
        className={homeClass}
      >
        <Link to={'/'} className={homeClass}>
          home
        </Link>
      </li>
    );
  }
  function BlogLink() {
    return (
      <li
        onMouseEnter={() => setBlogClass('navbarHovered')}
        onMouseLeave={() => setBlogClass('')}
        className={blogClass}
      >
        <Link to={'/blog'} className={blogClass}>
          blog
        </Link>
      </li>
    );
  }
  function ProjectsLink() {
    return (
      <li
        onMouseEnter={() => setProjectsClass('navbarHovered')}
        onMouseLeave={() => setProjectsClass('')}
        className={projectsClass}
      >
        <Link to={'/projects'} className={projectsClass}>
          projects
        </Link>
      </li>
    );
  }

  let firstTab;
  let secondTab;

  if (currentPage === 'homepage') {
    firstTab = <BlogLink />;
    secondTab = <ProjectsLink />;
  } else if (currentPage === 'blog') {
    firstTab = <HomeLink />;
    secondTab = <ProjectsLink />;
  } else {
    firstTab = <HomeLink />;
    secondTab = <BlogLink />;
  }

  return (
    <>
      <nav id='navbar'>
        <ul>
          {firstTab}
          {secondTab}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
