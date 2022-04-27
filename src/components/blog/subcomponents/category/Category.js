import './category.css';

function Category({ category, setShowingPosts, categoryPosts }) {
  return (
    <li onClick={() => setShowingPosts(categoryPosts)} className='category'>
      {category}
    </li>
  );
}

export default Category;
