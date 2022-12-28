import React from 'react';
import About from './About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';
import NavProvider from './context/NavContext';
import Footer from './Footer/Footer';
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
          <svg className='waves' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="none" viewBox="0 0 1440 560">
              <g mask="url(&quot;#SvgjsMask1071&quot;)" fill="none">
                  <path d="M 0,230 C 96,201.2 288,79.2 480,86 C 672,92.8 768,254.2 960,264 C 1152,273.8 1344,160.8 1440,135L1440 560L0 560z" fill="#b3b9b9"></path>
                  <path d="M 0,516 C 57.6,492.4 172.8,416.2 288,398 C 403.2,379.8 460.8,428.2 576,425 C 691.2,421.8 748.8,358 864,382 C 979.2,406 1036.8,549.2 1152,545 C 1267.2,540.8 1382.4,397.8 1440,361L1440 560L0 560z" fill="black"></path>
              </g>
              <defs>
                  <mask id="SvgjsMask1071">
                      <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
              </defs>
          </svg>
          <Footer />
        </div>
      </NavProvider>
    </div>
  );
}

export default App;
