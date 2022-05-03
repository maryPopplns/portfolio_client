import './navbar.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';
import { useSelector, useDispatch } from 'react-redux';

import closeButton from './closeButton.png';

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
      <nav id='navbar'>
        <p>s_k</p>
        <svg
          onClick={() => setModalOpen(true)}
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect width='100' height='15'></rect>
          <rect y='30' width='100' height='15'></rect>
          <rect y='60' width='100' height='15'></rect>
        </svg>
      </nav>
      {/* mobile modal */}

      <div
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
          <Link
            className={
              currentPage === 'projects' ? 'mobile_nav_selected' : undefined
            }
            onClick={linkHandler}
            to='projects'
          >
            - projects -
          </Link>
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
