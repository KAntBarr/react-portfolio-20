import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
      <Header/>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
