import './Header.css';
import Nav from '../Navigation/Navigation';

const Header = ({ }) => {


  return (
    <>
      {/* <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> */}
      <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
        <Nav />
      </header>
    </>
  );
}

export default Header;