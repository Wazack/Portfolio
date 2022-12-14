import React from 'react';
import About from './About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <div className="container">
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
