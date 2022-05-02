import './blog.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from './subcomponents/categories/Categories';
import BlogPostTile from './subcomponents/blogPostTile/BlogPostTile';

function Blog() {
  const allPosts = useSelector((state) => state.posts.value);
  const [showingPosts, setShowingPosts] = useState([]);
  const [categories, setCategories] = useState([]);

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

  const posts = showingPosts.map(({ _id, title, date, category }) => (
    <BlogPostTile title={title} date={date} category={category} key={_id} />
  ));

  return (
    <div className='blog'>
      <h1 className='blogHeading'>
        <p>b</p>
        <p>l</p>
        <p>o</p>
        <p>g</p>
      </h1>
      <hr />
      <Categories setShowingPosts={setShowingPosts} categories={categories} />
      <ul className='blogPostContainer'>{posts}</ul>
    </div>
  );
}

export default Blog;
