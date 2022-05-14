import './comments.css';
import { useState } from 'react';
import Comment from '../comment/Comment';
import { useDispatch } from 'react-redux';
import urlencoded from '../../../../helpers/urlencoded';
import { setPosts } from '../../../../store/slices/posts';

function Comments({ blogID, comments, color }) {
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState(0);
  const [isInverted, setIsInverted] = useState(false);

  const responseStyle = {
    display: 'flex',
    color: response === 201 ? '#00A36C' : '#b22234',
    border: response === 201 ? '3px solid #00A36C' : '3px solid #b22234',
  };

  const dispatch = useDispatch();
  function getPosts() {
    // set posts
    fetch('https://whispering-depths-29284.herokuapp.com/post')
      .then((result) => result.json())
      .then((posts) => dispatch(setPosts(posts)));
  }

  function buttonEnterHandler() {
    setIsInverted(true);
  }
  function buttonLeaveHandler() {
    setIsInverted(false);
  }

  function formHandler(event) {
    event.preventDefault();

    const readersComment = urlencoded({ comment });
    function errorResponse() {
      setResponse(500);
      // modal timeout
      setTimeout(() => {
        setResponse(0);
      }, 3000);
    }
    function successResponse() {
      setResponse(201);
      getPosts();
      // modal timeout
      setTimeout(() => {
        setResponse(0);
        setComment('');
      }, 3000);
    }

    fetch(
      `https://whispering-depths-29284.herokuapp.com/post/comment/${blogID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: readersComment,
      }
    )
      .then(({ status }) => {
        if (status === 201 || status === 202) {
          successResponse();
        } else {
          errorResponse();
        }
      })
      .catch(() => errorResponse());
  }

  const commentComponents = comments
    .map((comment) => (
      <Comment comment={comment} key={comment._id} color={color} />
    ))
    .reverse();

  return (
    <>
      <div className='comments'>
        <h1 style={{ color }} className='commentsHeading'>
          Comments
        </h1>
        <form onSubmit={formHandler}>
          <label htmlFor='commentInput'></label>
          <textarea
            onChange={({ target }) => setComment(target.value)}
            id='commentInput'
            name='commentInput'
            placeholder={
              comments.length ? 'leave a comment!' : 'be the first to comment!'
            }
            value={comment}
            required
          ></textarea>
          <button
            style={{
              color: color,
              borderColor: color,
              filter: `invert(${isInverted ? '1' : '0'})`,
            }}
            onMouseEnter={buttonEnterHandler}
            onMouseLeave={buttonLeaveHandler}
            type='submit'
          >
            submit
          </button>
        </form>
      </div>
      <ul className='postCommentsContainer'>{commentComponents}</ul>
      <div
        style={response ? responseStyle : { display: 'none' }}
        className='comment_form_response_modal'
        data-testid='comment_form_response_modal'
      >
        {response === 201 ? 'success' : 'retry'}
      </div>
    </>
  );
}

export default Comments;
