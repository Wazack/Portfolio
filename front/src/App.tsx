import React from 'react';
import About from './About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';
import NavProvider from './context/NavContext';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

function App() {
  return (
    <div id='top' className="App">
      <NavProvider>
        <Navbar />
        <div className="pages">
          <div className="container">
            <Intro />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      </NavProvider>
    </div>
  );
}

export default App;
