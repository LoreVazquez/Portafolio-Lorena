import React from 'react';
import './App.css';

class Contact extends React.Component {
  render() {
    return (
        <div id="contact" className="contact width">
            <div className="row width n-margin">
              <h2 className=" text-center col-12">Contacto</h2>
            </div>
            <div className="row width">
            <form className="form col-lg-3 col-sm-12 offset-3 ">
                <p>Escribe un mensaje y me pondré en contacto contigo.</p>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Nombre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Mensaje</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn">Enviar</button>
                </div>
            </form>
            <article className="offset-1 col-sm-12  col-lg-2 d-flex justify-content-around">
                <ul className="d-flex align-items-center">
                    <li>
                        <a  href="mailto:lorena.vornelas@gmail.com"><img src={require("./images/004-email.png")} alt="Gmail"/></a>
                    </li>
                    <li>
                        <a  href="https://github.com/LoreVazquez"><img src={require("./images/002-cat.png")} alt="Github"/></a>
                    </li>
                    <li>
                        <a  href="https://www.linkedin.com/in/lorena-vornelas/"><img src={require("./images/003-linkedin.png")} alt="LinkeIn"/></a>
                    </li>                
                </ul>

            </article>
            </div>
        </div>
    );
  }
}

export default Contact;