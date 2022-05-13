import './contactMe.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import urlencoded from '../../helpers/urlencoded';
import Spinner from './subcomponents/spinner/Spinner';
import { setCurrentPage } from '../../store/slices/currentPage';

function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const responseStyle = {
    border: response === 200 ? '3px solid #00A36C' : '3px solid #b22234',
    color: response === 200 ? '#00A36C' : '#b22234',
    display: 'flex',
  };

  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('contactMe'));
  }, [dispatch]);

  function submitHandler(event) {
    event.preventDefault();
    setFormSubmitted(true);
    setIsLoading(true);

    const contactInfo = urlencoded({ email, message });

    function errorResponse() {
      setIsLoading(false);
      setFormSubmitted(false);
      setResponse(500);
      // modal timeout
      setTimeout(() => {
        setResponse(0);
      }, 3000);
    }
    function successResponse() {
      setIsLoading(false);
      setResponse(200);
      // modal timeout
      setTimeout(() => {
        setResponse(0);
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
        <h1 id='contact_heading'>contact_me</h1>
        <div id='contact_form_container'>
          <form onSubmit={submitHandler}>
            {/* user input */}
            <div className='contact_input_container'>
              <label htmlFor='email'>email</label>
              <input
                onChange={({ target }) => setEmail(target.value)}
                placeholder='your_email'
                value={email}
                type='email'
                id='email'
                name='email'
                required
              ></input>
            </div>
            <div className='contact_input_container'>
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
            <div className='submit_contact_container'>
              {isLoading ? (
                <Spinner />
              ) : (
                <button disabled={formSubmitted}>
                  <div
                    className={`submitCommentButton ${
                      formSubmitted && 'formSubmitted'
                    }`}
                  >
                    submit
                  </div>
                </button>
              )}
            </div>
          </form>
        </div>
        <div
          style={response ? responseStyle : { display: 'none' }}
          className='contact_form_response_modal'
          data-testid='contact_form_response_modal'
        >
          {response === 200 ? 'success' : 'retry'}
        </div>
      </main>
      {/* {isLoading && <Spinner />} */}
    </>
  );
}

export default ContactMe;