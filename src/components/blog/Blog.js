import './blog.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from './subcomponents/categories/Categories';
import { setCurrentPage } from '../../store/slices/currentPage';

function Blog() {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.value);

  useEffect(() => {
    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');

    dispatch(setCurrentPage('blog'));
  }, [dispatch]);

  return (
    <div className='blog'>
      <Categories allPosts={allPosts} />
    </div>
  );
}

export default Blog;
