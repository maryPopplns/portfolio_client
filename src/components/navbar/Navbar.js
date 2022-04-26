import './navbar.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const [blogClass, setBlogClass] = useState('');
  const [projectsClass, setProjectsClass] = useState('');
  // const currentPage = useSelector((state) => state.currentPage.value);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, [dispatch]);

  return (
    <>
      <nav id='navbar'>
        <ul>
          <li
            onMouseEnter={() => setBlogClass('navbarHovered')}
            onMouseLeave={() => setBlogClass('')}
            className={blogClass}
          >
            <Link to={'/blog'} className={blogClass}>
              blog
            </Link>
          </li>
          <li
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
