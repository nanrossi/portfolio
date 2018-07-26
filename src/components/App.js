import React, { Component } from 'react';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
