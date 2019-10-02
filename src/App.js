import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;