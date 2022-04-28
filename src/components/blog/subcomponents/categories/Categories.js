import './categories.css';
import Category from '../category/Category';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

function Categories({ setShowingPosts }) {
  const allPosts = useSelector((state) => state.posts.value);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = allPosts.map(({ category }) => category);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(uniqueCategories);
  }, [allPosts]);

  // create components
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

  return <ul id='categories'>{categoryComponents}</ul>;
}

export default Categories;
