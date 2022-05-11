import './blogPostTile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BlogPostTile({ title, date: inputDate, id }) {
  const [date, setDate] = useState();
  useEffect(() => {
    const newDate = new Date(inputDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      newDate
    );
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    setDate(`${day} ${month} ${year}`);
  }, [inputDate]);

  return (
    <Link to={id} className='blogPostTile'>
      <h2>{title}</h2>
      <p>{date}</p>
      <div className='blogPostTileContainer'>
        <div className='readBlogButton'>read ></div>
      </div>
    </Link>
  );
}

export default BlogPostTile;
