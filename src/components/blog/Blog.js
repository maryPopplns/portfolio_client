import './blog.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/slices/currentPage';

function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');

    dispatch(setCurrentPage('blog'));
  }, [dispatch]);

  return <div className='blog'>{/* <div className='modal'></div> */}</div>;
}

export default Blog;
