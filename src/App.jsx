import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="d-flex align-items-center justify-content-center flex-grow-1">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
