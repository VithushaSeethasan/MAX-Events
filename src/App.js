import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './styles/main.css';
import './styles/Home.css';
import './styles/Footer.css';
import './styles/Services.css';
import './styles/About.css';
import './styles/Portfolio.css';
import './styles/Contact.css';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
