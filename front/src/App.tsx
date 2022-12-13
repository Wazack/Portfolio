import React from 'react';
import About from './About/About';
import Navbar from './components/Navbar/Navbar';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
