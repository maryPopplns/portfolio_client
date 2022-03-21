import { useState } from 'react';
import './contactMe.css';

function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main className='contact page'>
      <h1>contact</h1>
      <hr id='header_contact_divisor'></hr>
      <form>
        <div className='contact_input_container'>
          <label htmlFor='email'>email</label>
          <input
            onChange={({ target }) => setEmail(target.value)}
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
    </main>
  );
}

export default ContactMe;
