import { useState } from 'react';
import Header from "./components/Header/Header.jsx";

import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Resume from "./components/Resume/Resume.jsx";

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
