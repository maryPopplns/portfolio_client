import './comment.css';
import { useEffect, useState } from 'react';

function Comment({ comment: postComment }) {
  const { date, comment } = postComment;
  const [commentDate, setCommentDate] = useState();

  useEffect(() => {
    const newDate = new Date(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      newDate
    );
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    setCommentDate(`${day} ${month} ${year}`);
  }, [date]);

  return (
    <li className='postCommentContainer'>
      <p className='postComment'>{comment}</p>
      <p className='postDate'>{`-${commentDate}`}</p>
    </li>
  );
}

export default Comment;
