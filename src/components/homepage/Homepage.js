import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './homepage.css';

function Homepage() {
  return (
    <>
      <div>homepage</div>
      <Link to='blog'>button</Link>
    </>
  );
}

export default Homepage;
