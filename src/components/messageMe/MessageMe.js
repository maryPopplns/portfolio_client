import './messageMe.css';
import Spinner from '../spinner/Spinner';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import urlencoded from '../../helpers/urlencoded';
import { setCurrentPage } from '../../store/slices/currentPage';

function MessageMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('messageMe'));
  }, [dispatch]);

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const contactInfo = urlencoded({ email, message });

    function errorResponse() {
      setIsLoading(false);
      setFormSubmitted(false);
      // modal timeout
      setTimeout(() => {}, 3000);
    }
    function successResponse() {
      setIsLoading(false);
      setFormSubmitted(true);
      // modal timeout
      setTimeout(() => {
        setEmail('');
        setMessage('');
      }, 3000);
    }

    fetch('https://whispering-depths-29284.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: contactInfo,
    })
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
      <main className='contact page'>
        <div className='contactCard'>
          <form onSubmit={submitHandler}>
            {/* user input */}
            <div className='contactInputContainer'>
              <label htmlFor='email'>email</label>
              <input
                onChange={({ target }) => setEmail(target.value)}
                placeholder='your email'
                value={email}
                type='email'
                id='email'
                name='email'
                required
              ></input>
            </div>
            <div className='contactInputContainer'>
              <label htmlFor='message'>message</label>
              <textarea
                onChange={({ target }) => setMessage(target.value)}
                placeholder={
                  formSubmitted ? 'thank you for reaching out!' : 'message'
                }
                value={message}
                type='textarea'
                id='message'
                name='message'
                required
              ></textarea>
            </div>
            <div>
              {isLoading ? (
                <Spinner />
              ) : (
                <button
                  className={`submitCommentButton${
                    formSubmitted ? ' disabledButton' : ' enabledButton'
                  }`}
                  disabled={formSubmitted}
                >
                  <div>submit</div>
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default MessageMe;
