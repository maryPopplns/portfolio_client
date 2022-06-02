import './navbar.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';
import { useSelector, useDispatch } from 'react-redux';

import resume from './resume.pdf';
import closeButton from './closeButton.png';
import Cursor from '../homepage/cursor/Cursor';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const currentPage = useSelector((state) => state.currentPage.value);

  const dispatch = useDispatch();
  useEffect(() => {
    // set posts
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, [dispatch]);

  function linkHandler() {
    setModalOpen(false);
  }

  return (
    <>
      <Cursor />
      <nav id='navbar'>
        <Link className='navbarLogo' to=''>
          <p>s_k</p>
        </Link>
        <svg
          onClick={() => setModalOpen(true)}
          className='hamburger_icon'
          viewBox='0 0 100 80'
          width='40'
          height='40'
          data-testid='hamburgerMenuIcon'
        >
          <rect width='100' height='15'></rect>
          <rect y='30' width='100' height='15'></rect>
          <rect y='60' width='100' height='15'></rect>
        </svg>
      </nav>

      <div
        data-testid='navigationModal'
        className={`mobile_nav_modal ${modalOpen && 'mobile_nav_modal_open'}`}
      >
        <ul>
          <Link
            className={
              currentPage === 'home' ? 'mobile_nav_selected' : undefined
            }
            onClick={linkHandler}
            to=''
          >
            - home -
          </Link>
          <Link
            className={
              currentPage === 'blog' ? 'mobile_nav_selected' : undefined
            }
            onClick={linkHandler}
            to='blog'
          >
            - blog -
          </Link>
          {/* <li>
          </li>
          <li>
          </li> */}
          <li>
            <Link
              className={
                currentPage === 'projects' ? 'mobile_nav_selected' : undefined
              }
              onClick={linkHandler}
              to='projects'
            >
              - projects -
            </Link>
          </li>
          <li>
            <Link
              className={
                currentPage === 'contact' ? 'mobile_nav_selected' : undefined
              }
              onClick={linkHandler}
              to='contact'
            >
              - contact -
            </Link>
          </li>
          <a href={resume} download='resume'>
            <div>- resume -</div>
          </a>
        </ul>
        <img
          src={closeButton}
          onClick={() => setModalOpen(false)}
          alt='close menu'
        ></img>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
