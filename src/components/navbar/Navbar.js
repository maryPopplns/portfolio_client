import './navbar.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';
import { useSelector, useDispatch } from 'react-redux';

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

  const hiddenLink = { display: 'none' };
  const showingLink = { display: 'block' };

  return (
    <>
      <nav id='navbar'>
        <ul>
          <li
            style={currentPage === 'homepage' ? hiddenLink : showingLink}
            onMouseEnter={() => setHomeClass('navbarHovered')}
            onMouseLeave={() => setHomeClass('')}
            className={homeClass}
          >
            <Link to={'/'} className={homeClass}>
              home
            </Link>
          </li>
          <li
            style={currentPage === 'blog' ? hiddenLink : showingLink}
            onMouseEnter={() => setBlogClass('navbarHovered')}
            onMouseLeave={() => setBlogClass('')}
            className={blogClass}
          >
            <Link to={'/blog'} className={blogClass}>
              blog
            </Link>
          </li>
          <li
            style={currentPage === 'projects' ? hiddenLink : showingLink}
            onMouseEnter={() => setProjectsClass('navbarHovered')}
            onMouseLeave={() => setProjectsClass('')}
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
