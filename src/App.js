import React from 'react';
import './styles/App.scss';
import { Container } from 'reactstrap';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;