import './aboutMe.css';

function AboutMe() {
  return (
    <main className='about page'>
      <h1>about_me</h1>
      <hr id='title_about_divisor'></hr>
      <p id='about_me_paragraph' className='about_me_fade'>
        Hello! My name is Spencer Knight, I am a US Navy veteran, fitness
        enthusiast, and full stack JavaScript developer. Solving problems
        whether it's aircraft, fitness, or software related is what I like to
        do. Front-end development is my current passion, but am confident I will
        thrive in any environment. Checkout my blog/projects and tell me what
        you think!
      </p>
    </main>
  );
}

export default AboutMe;
