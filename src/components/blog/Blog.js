import './blog.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Categories from './subcomponents/categories/Categories';
import { setCurrentPage } from '../../store/slices/currentPage';

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
  console.log(showingPosts);

  return (
    <div className='blog'>
      <h1 className='blogHeading'>
        <p>b</p>
        <p>l</p>
        <p>o</p>
        <p>g</p>
      </h1>
      <hr />
      {/* <Categories setShowingPosts={setShowingPosts} /> */}
    </div>
  );
}

export default Blog;
