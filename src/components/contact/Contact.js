import './contact.css';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import clipboard from './icons/clipboard.svg';

function Contact() {
  function emailHandler() {
    navigator.clipboard.writeText('email@spencerknightdev.com');
  }

  return (
    <main className='contact'>
      <h1>Contact</h1>
      <div className='contactLinkContainer'>
        <div onClick={emailHandler} className='emailContainer'>
          <p>email@spencerknightdev.com</p>
        </div>
        <div className='socialMediaIcons'>
          <a
            className='iconContainer'
            href='https://github.com/maryPopplns'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github} alt='github link' />
          </a>
          <a
            className='iconContainer'
            href='https://www.linkedin.com/in/spencer-knight-dev/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin} alt='linkedin link' />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
