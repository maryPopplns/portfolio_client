import './landingPage.css';

function LandingPage() {
  return (
    <main className='landingPage page'>
      <h1 className='name_heading first_name_heading'>SPENCER</h1>
      <h1 className='name_heading last_name_heading'>KNIGHT</h1>
      <hr></hr>
      <ul className='personal_description'>
        <li id='personal_description_web_developer'>Web Developer</li>
        <li id='personal_description_fitness'>Fitness 🤍</li>
        <li id='personal_description_veteran'>
          <div>V</div>
          <div>e</div>
          <div>teran</div>
        </li>
      </ul>
      <div className='homepage_down_arrow'></div>
    </main>
  );
}

export default LandingPage;
