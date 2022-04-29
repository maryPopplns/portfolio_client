import './category.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory } from '../../../../store/slices/currentCategory';

function Category({ category, setShowingPosts, categoryPosts }) {
  const currentCategory = useSelector((state) => state.currentCategory.value);
  const dispatch = useDispatch();
  const isSelected = currentCategory === category;

  function clickHandler() {
    setShowingPosts(categoryPosts);
    dispatch(setCurrentCategory(category));
  }
  return (
    <li
      onClick={clickHandler}
      className={`category ${isSelected && 'selectedCategory'}`}
    >
      {category}
    </li>
  );
}

export default Category;
