import './categories.css';
import Category from '../category/Category';
import { useSelector } from 'react-redux';

function Categories() {
  const allPosts = useSelector((state) => state.posts.value);

  return (
    <ul className='categories'>
      <Category />
      <Category />
    </ul>
  );
}

export default Categories;
