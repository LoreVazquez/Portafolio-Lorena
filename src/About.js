import React from 'react';
import './App.css';

class About extends React.Component {
  render() {
    return (
      <div  id="about" className="row divider">
        <div className="col col-2 d-flex align-items-center vertical">
            <h3 className="rotation">Presentación</h3>
        </div>
        <div className="col text-center my-auto col-lg-4 offset-lg-1">
          <div className="">
            <p>
                <br/>
                <br/>
                Hola!!
                <br/>
                Soy Lorena Leticia, recién acabo de graduarme de Laboratoria como Front-end web Developer.
                Han sido meses intensos, donde el mayor aprendizaje es seguir teniendo curiosidad por continuar aprendiendo nuevas tecnologías y reforzar los conocimientos adquiridos.
                Lo que Laboratoria me ha dejado, es abrir un panorama gigante de la tecnología que yo desconocía.
                <br/>
                Me he dedicado por mas de seis años en funciones administrativas, lo que siempre buscó es mejorar los procesos y eficientar los recursos. Mis interes son los negocios, las finanzas, 
                y la tecnología. 
                Uno de mis mayores retos es siempre entregar un trabajo de calidad, útil y presentable. 
            </p>
          </div>
        </div> 
        <div className="col col-lg-4 offset-lg-1 d-none d-lg-block">
            <img src={require("./images/second.jpg")} className="img-fluid" alt=""/>
        </div>  
      </div>
    );
  }
}

export default About;