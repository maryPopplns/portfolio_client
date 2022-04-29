import './blogPostTile.css';
import { useDispatch, useSelector } from 'react-redux';

function BlogPostTile({ title, date, category }) {
  const newDate = new Date(date);
  const month = newDate.toISOString();
  // console.log(month);
  return (
    <div className='blogPostTile'>
      <div>{title}</div>
      {/* <div>{date}</div> */}
      <div>{category}</div>
    </div>
  );
}

export default BlogPostTile;
