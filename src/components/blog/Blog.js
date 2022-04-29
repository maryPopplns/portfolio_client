import './blog.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Categories from './subcomponents/categories/Categories';
import { setCurrentPage } from '../../store/slices/currentPage';

import BlogPostTile from './subcomponents/blogPostTile/BlogPostTile';

function Blog() {
  const [showingPosts, setShowingPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');

    dispatch(setCurrentPage('blog'));
  }, [dispatch]);

  // TODO use showingPosts to create modals to show

  return (
    <div className='blog'>
      <h1 className='blogHeading'>
        <p>b</p>
        <p>l</p>
        <p>o</p>
        <p>g</p>
      </h1>
      <hr />
      <Categories setShowingPosts={setShowingPosts} />
      <div className='blogPostContainer'>
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
        <BlogPostTile />
      </div>
    </div>
  );
}

export default Blog;
