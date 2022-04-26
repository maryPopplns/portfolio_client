import './blog.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/slices/currentPage';

function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage('blog'));
  }, [dispatch]);

  return <div className='blog'>blog</div>;
}

export default Blog;
