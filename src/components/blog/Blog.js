import './blog.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Blog() {
  const loggedIn = useSelector((state) => state.posts.value);
  console.log(loggedIn);
  return <div>blog</div>;
}

export default Blog;
