import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './homepage.css';
import LandingPage from './pages/landingPage/LandingPage';
import Placeholder from './pages/placeholder1/Placeholder';
import Placeholder2 from './pages/placeholder2/Placeholder2';

function Homepage() {
  return (
    <main>
      <LandingPage />
      <Placeholder />
      <Placeholder2 />
    </main>
  );
}

export default Homepage;
