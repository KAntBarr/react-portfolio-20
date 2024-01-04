import './Navigation.css';

import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link px-2 active' : 'nav-link px-2'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link px-2 active' : 'nav-link px-2'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link px-2 active' : 'nav-link px-2'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link px-2 active' : 'nav-link px-2'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
