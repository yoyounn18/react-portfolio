import React, { Component } from 'react';
import Jumbo from './components/Jumbo';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <AboutMe />
        <Project />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
