import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import About from 'components/About/About';
import Home from 'components/Home/Home';
import Projects from 'components/Projects/Projects';
import Careers from 'components/Career/Careers';

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div class="space absolute">
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      <div className="lg:mx-52 px-5 relative z-10">
        <Home />
        <div className="bg-primaryColor h-px" />
        <About />
        <div className="bg-primaryColor h-px" />
        <Projects />
        <div className="bg-primaryColor h-px" />
        <Careers />
      </div>
      <Footer />
    </div>
  );
};

export default App;
