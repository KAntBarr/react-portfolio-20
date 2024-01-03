import { useState } from 'react';
import Header from "./components/Header/Header.jsx";

import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./pages/Resume/Resume.jsx";

import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [sectionToRender, setSectionToRender] = useState('todo');

  return (
    <>
      <Header/>
      <AboutMe/>
      <Footer></Footer>
    </>
  )
}

export default App
