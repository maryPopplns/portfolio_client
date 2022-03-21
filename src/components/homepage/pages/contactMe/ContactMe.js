import { useState } from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import './contactMe.css';

function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main className='contact page'>
      <h1>contact</h1>
      <hr id='header_contact_divisor'></hr>
      <div id='contact_form_container'>
        <form>
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
              placeholder='your_message'
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
            <img src={linkedin} alt='linkedin icon'></img>
          </a>
          <a
            href='https://github.com/maryPopplns'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github} alt='github icon'></img>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
