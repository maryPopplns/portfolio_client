import './contactMe.css';
import { useState } from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import Spinner from './subcomponents/spinner/Spinner';
import urlencoded from '../../../../helpers/urlencoded';

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
        <hr id='header_contact_divisor' />
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
                  formSubmitted ? 'thank you for reach out!' : 'message'
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
          {/* social media icons */}
          <div className='contact_form_icons'>
            <a
              href='https://www.linkedin.com/in/spencer-knight-dev/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                id='homepage_linkedin_icon'
                src={linkedin}
                alt='linkedin icon'
              ></img>
            </a>
            <a
              href='https://github.com/maryPopplns'
              target='_blank'
              rel='noreferrer'
            >
              <img
                id='homepage_github_icon'
                src={github}
                alt='github icon'
              ></img>
            </a>
          </div>
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
