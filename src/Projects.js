import React from 'react';
import './App.css';

class Projects extends React.Component {
  render() {
    return (
        <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">Portafolio</h3>
              <h2 className="mb-5">Proyectos</h2>
            </div>
            <div className="row">
            <div className="col-lg-6 space">
              <div className="col-12">
                <a className="portfolio-item" href="https://lorevazquez.github.io/Insta-Collage/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Insta-Collage</h2>
                      <p className="mb-0">Aplicación diseñada para mobile, desarrollada para crear collages!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src={require("./images/insta.PNG")} alt=""/>
                </a>
              </div>
              <div className="col-lg-12 align-self-center mr-3">
                <a className="portfolio-item" href="https://lorevazquez.github.io/social-trade/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Social Trade</h2>
                      <p className="mb-0">Social trade es un red social de comercio, diseñada para mobile.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src={require("./images/Social-Trade.PNG")} alt=""/>
                </a>
              </div>
              </div>

              <div className="col-lg-6 space align-middle">
              <div className="col-12">
                <a className="portfolio-item" href="https://lorevazquez.github.io/data-dashboard/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Dashboard-Laboratoria</h2>
                      <p className="mb-0">Aplicación web diseñada para desktop, se desarrolla un dashboard para las training Managers de Laboratoria.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src={require("./images/dashboard-overview.PNG")}  alt=""/>
                </a>
              </div>
              <div className="col-lg-12">
                <a className="portfolio-item" href="https://lorevazquez.github.io/extract-links-from-md/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Glink-MD</h2>
                      <p className="mb-0">Módulo Node JS desarrollada para extraer los links de un texto MarkDown</p>
                    </span>
                  </span>
                  <img className="img-fluid" src={require("./images/Glink.PNG")}  alt=""/>
                </a>
              </div>
              <div className="col-lg-12">
                <a className="portfolio-item" href="https://lorevazquez.github.io/Pinterest-Practica/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Buscador de Imágenes</h2>
                      <p className="mb-0">Buscador de imágenes para desktop, uso de API y tomando de base el diseño Pinterest.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src={require("./images/pinterest.PNG")} alt=""/>
                </a>
              </div>
              </div>
              
            </div>
          </div>
        </section>
    );
  }
}

export default Projects;