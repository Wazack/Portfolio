import React from 'react';
import About from './About/About';
import Navbar from './components/Navbar/Navbar';
import Intro from './Intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
