import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id='homepage_navbar'>
      <ul>
        <li>
          <Link to={'/blog'}>blog</Link>
        </li>
        <li>
          <Link to={'/projects'}>projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
