import './comments.css';
import { useState } from 'react';
import urlencoded from '../../../../helpers/urlencoded';

function Comments({ blogID }) {
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState(0);

  const responseStyle = {
    border: response === 200 ? '3px solid #00A36C' : '3px solid #b22234',
    color: response === 200 ? '#00A36C' : '#b22234',
    display: 'flex',
  };

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
      setResponse(200);
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
        if (status === 200) {
          successResponse();
        } else {
          errorResponse();
        }
      })
      .catch(() => errorResponse());
  }

  return (
    <>
      <div className='comments'>
        <form onSubmit={formHandler}>
          <label htmlFor='commentInput'></label>
          <textarea
            onChange={({ target }) => setComment(target.value)}
            id='commentInput'
            name='commentInput'
            placeholder='leave a comment!'
            value={comment}
            required
          ></textarea>
          <button type='submit'>submit</button>
        </form>
      </div>
      <div
        style={response ? responseStyle : { display: 'none' }}
        className='comment_form_response_modal'
        data-testid='comment_form_response_modal'
      >
        {response === 200 ? 'success' : 'retry'}
      </div>
    </>
  );
}

export default Comments;
