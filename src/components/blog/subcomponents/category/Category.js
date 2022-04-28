import './category.css';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../../../../store/slices/currentCategory';

function Category({ category, setShowingPosts, categoryPosts }) {
  const dispatch = useDispatch();
  function clickHandler() {
    setShowingPosts(categoryPosts);
    dispatch(setCurrentCategory(category));
  }
  return (
    <li onClick={clickHandler} className='category'>
      {category}
    </li>
  );
}

export default Category;
