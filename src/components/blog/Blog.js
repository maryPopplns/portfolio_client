import './blog.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from './subcomponents/categories/Categories';
import { setCurrentPage } from '../../store/slices/currentPage';
import BlogPostTile from './subcomponents/blogPostTile/BlogPostTile';

function Blog() {
  const allPosts = useSelector((state) => state.posts.value);
  const [showingPosts, setShowingPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('blog'));
  }, [dispatch]);

  useEffect(() => {
    // isolate unique categories
    const allCategories = allPosts.map(({ category }) => category);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(uniqueCategories);

    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');
    // set default blog category
    setShowingPosts(allPosts);
  }, [allPosts]);

  const posts = showingPosts.map(({ _id, title, date }) => (
    <BlogPostTile title={title} date={date} key={_id} />
  )); // TODO reverse the array to have most recent ones first

  return (
    <div className='blog'>
      <h1 className='blogHeading'>blog</h1>
      <Categories setShowingPosts={setShowingPosts} categories={categories} />
      <ul className='blogPostContainer'>{posts}</ul>
    </div>
  );
}

export default Blog;
