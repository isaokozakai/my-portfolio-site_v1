import React from 'react';
import './styles/App.scss';
import { Container } from 'reactstrap';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <Container fluid>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;