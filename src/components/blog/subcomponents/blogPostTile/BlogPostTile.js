import './blogPostTile.css';
import { useDispatch, useSelector } from 'react-redux';

function BlogPostTile() {
  return (
    <div className='blogPostTile'>
      <div>blog title</div>
      <div>date</div>
    </div>
  );
}

export default BlogPostTile;
