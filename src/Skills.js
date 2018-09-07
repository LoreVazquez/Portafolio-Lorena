import React from 'react';
import './App.css';

class Skills extends React.Component {
  render() {
    return (
      <div className="row divider-s width">
        <div className="col col-lg-10">
          <div className="tech">
            <h4 className="text-center">Habilidades Técnicas</h4>
            <ul className="row tech-main d-flex justify-content-around">
              <li><i className="devicon-javascript-plain"></i></li>
              <li><i className="devicon-html5-plain-wordmark colored"></i></li>
              <li><i className="devicon-css3-plain-wordmark colored"></i></li>
            </ul>
            <h5 className="text-center">Básico</h5>
            <ul className="row tech-main d-flex justify-content-around">
              <li><i className="devicon-jquery-plain-wordmark colored"></i></li>
              <li><i className="devicon-bootstrap-plain-wordmark colored"></i></li>
              <li><i className="devicon-babel-plain"></i></li>
              <li><i className="devicon-github-plain-wordmark colored"></i></li>
              <li><i className="devicon-mocha-plain colored"></i></li>
              <li><i className="devicon-nodejs-plain"></i></li>
              <li><i className="devicon-react-original-wordmark colored"></i></li>
            </ul>
          </div> 
          <div className="soft">
            <h4 className="text-center">Habilidades Blandas</h4>
            <div className="row d-flex justify-content-around">
              <div className="text-center my-auto">
                <img src={require("./images/001-team.png")} className="img-fluid" alt=""/>
                <p>Trabajo en equipo</p>
              </div>
              <div className="text-center my-auto">
                <img src={require("./images/003-problem.png")} className="img-fluid" alt=""/>
                <p>Solución de problemas</p>
              </div>
              <div className="text-center my-auto">
                <img src={require("./images/004-mind.png")} className="img-fluid" alt=""/>
                <p>Control de stress</p>
              </div>

              <div className="text-center my-auto">
                <img src={require("./images/005-sprout.png")} className="img-fluid" alt=""/>
                <p> Growth mindset</p>
              </div>

              <div className="text-center my-auto">
                <img src={require("./images/006-woman.png")} className="img-fluid" alt=""/>
                <p>Ética</p>
              </div>

              <div className="text-center my-auto">
                <img src={require("./images/007-student.png")} className="img-fluid" alt=""/>
                <p>Autodidacta</p>
              </div>

            </div>
          </div>  
        </div>
        <div className="col col-2 d-flex align-items-center vertical-s">
            <h3 className="rotation-s">Habilidades</h3>
        </div>
      </div>
    );
  }
}

export default Skills;