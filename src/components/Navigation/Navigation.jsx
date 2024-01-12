import './Navigation.css';

import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    // <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    // </ul>

    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark flex-grow-1"
      aria-label="Third navbar example"
      style={{}}
      >
      {/* <a className="navbar-brand px-4" href="/">Koby</a> */}
      <div className="container-fluid justify-content-center">

        <div className='row d-sm-none '>
          
        </div>


        <h1 className='d-sm-none mb-0 name-font'>Koby B</h1>
        <button className="navbar-toggler collapsed floater bg-dark outlined" type="button" data-bs-toggle="collapse" data-bs-target="#navabarMain" aria-controls="navabarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-end justify-content-md-center" id="navabarMain">

          <h1 className='d-none d-sm-block m-auto name-font'>Koby</h1>

          <ul className="navbar-nav nav-pills mb-2 mb-sm-0 pt-1 pt-sm-0">
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

          <h1 className='d-none d-sm-block m-auto name-font'>Barrett</h1>

        </div>

      </div>
    </nav>

  );
}

export default Nav;
