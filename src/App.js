import React, { Component } from 'react';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div id="home">
        <div className="row container">
          <div className="col l6 masthead d-flex">
          </div>
          <div className="container text-center my-auto col l5 ">
            <div className="name">
              <h1 className="mb-1">Lorena L. Vázquez Ornelas</h1>
              <h3 className="mb-5">
                <em> Frontend Web Developer & Business</em>
              </h3>
            </div>
            <a className=" btn" href="#portfolio">Portafolio</a>
            <a className=" btn" href="#about">Conóceme</a>
          </div>  
        </div>
        <About/> 
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      
    );
  }
}

export default App;
