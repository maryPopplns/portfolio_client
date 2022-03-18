import './landingPage.css';

function LandingPage() {
  return (
    <main className='landingPage page'>
      <h1 className='name_heading first_name_heading'>SPENCER</h1>
      <h1 className='name_heading last_name_heading'>KNIGHT</h1>
      <hr></hr>
      <ul className='personal_description'>
        <li>Web Developer</li>
        <li>Fitness 🤍</li>
        <li className='personal_description_veteran'>
          <div>V</div>
          <div>e</div>
          <div>teran</div>
        </li>
      </ul>
    </main>
  );
}

export default LandingPage;
