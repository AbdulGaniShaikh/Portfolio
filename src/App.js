import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home/Home'
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import MyCareer from "./components/Career/MyCareer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <MyCareer/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;