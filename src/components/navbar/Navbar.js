import './navbar.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setPosts } from '../../store/slices/posts';

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, [dispatch]);

  return (
    <>
      <nav id='navbar'>
        <p>s_k</p>
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='15'></rect>
          <rect y='30' width='100' height='15'></rect>
          <rect y='60' width='100' height='15'></rect>
        </svg>
        {/* sk symbol */}
        {/* hamburger menu */}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
