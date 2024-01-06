import { useRouteError } from 'react-router-dom';

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header/>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Footer/>
    </div>
  );
}
