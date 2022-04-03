import { useState } from 'react';
import urlencoded from '../../../../helpers/urlencoded';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import './contactMe.css';

function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function submitHandler(event) {
    event.preventDefault();

    const contactInfo = urlencoded({ email, message });

    fetch('https://protected-beyond-87972.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: contactInfo,
    })
      .then((result) => result.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  return (
    <main className='contact page'>
      <h1>contact</h1>
      <hr id='header_contact_divisor'></hr>
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
              placeholder='message'
              value={message}
              type='textarea'
              id='message'
              name='message'
              required
            ></textarea>
          </div>
          <div className='submit_contact_container'>
            <button>submit</button>
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
            <img id='homepage_github_icon' src={github} alt='github icon'></img>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
