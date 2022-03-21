import { useState } from 'react';
import './contactMe.css';

function ContactMe() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main className='contact page'>
      <h1>contact</h1>
      <hr id='header_contact_divisor'></hr>
      <form>
        <label htmlFor='title'></label>
        <input
          onChange={({ target }) => setTitle(target.value)}
          value={title}
          type='text'
          id='title'
          name='title'
        ></input>
        <label htmlFor='message'></label>
        <textarea
          onChange={({ target }) => setMessage(target.value)}
          value={message}
          type='textarea'
          id='message'
          name='message'
        ></textarea>
      </form>
    </main>
  );
}

export default ContactMe;
