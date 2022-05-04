import './categories.css';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Category from '../category/Category';

function Categories({ setShowingPosts, categories }) {
  const [posts, setPosts] = useState([]);
  const [categoriesWidth, setCategoriesWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const allPosts = useSelector((state) => state.posts.value);
  const containerRef = useRef(null);

  useEffect(() => {
    function resizeHandler({ target }) {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setCategoriesWidth(containerRef.current.clientWidth);
  }, [posts]);

  useEffect(() => {
    const categoryComponents = categories.map((category) => {
      const categoryPosts = allPosts.filter(
        ({ category: postCategory }) => category === postCategory
      );
      return (
        <Category
          key={category.toString()}
          category={category}
          setShowingPosts={setShowingPosts}
          categoryPosts={categoryPosts}
        />
      );
    });

    // add all category
    categoryComponents.unshift(
      <Category
        key='all'
        category='all'
        setShowingPosts={setShowingPosts}
        categoryPosts={allPosts}
      />
    );
    setPosts(categoryComponents);
  }, [categories, allPosts, setShowingPosts]);

  return (
    <ul ref={containerRef} id='categories'>
      {posts}
    </ul>
  );
}

export default Categories;
