import React from "react";
import { Link } from 'react-router-dom';

import { FiFacebook, FiInstagram, FiTwitch, FiTwitter } from 'react-icons/fi';
import logo from '../../assets/logo-white.svg';
import './styles.css';

export default function Plan() {

    return (
        <div className="plan-container">
            <header>
                <img className="logo-plan" src={logo} alt="logo-white" />
                <span>Você está em   </span>
            </header>
            <div>
                <h1>As melhores ofertas para você</h1>
            </div>
            <section className="cards">
                <ul>
                    <li>
                        <strong>Plano Hey!</strong>
                        <h3>20GB</h3>
                        <span>Aplicativos sem consumir dos dados</span>
                        <p>
                            <FiFacebook size={22} color="#DD2A7B" />
                            <FiInstagram size={22} color="#DD2A7B" />
                        </p>
                        <button type="button">ASSINAR</button>
                    </li>

                    <li>
                        <strong>Plano Talk!</strong>
                        <h3>40GB</h3>
                        <span>Aplicativos sem consumir dos dados</span>
                        <p>
                            <FiFacebook size={22} color="#DD2A7B" />
                            <FiInstagram size={22} color="#DD2A7B" />
                            <FiTwitter size={22} color="#DD2A7B" />
                        </p>
                        <button type="button">ASSINAR</button>
                    </li>

                    <li>
                        <strong>Plano Alô!</strong>
                        <h3>60GB</h3>
                        <span>Aplicativos sem consumir dos dados</span>
                        <p>
                            <FiFacebook size={22} color="#DD2A7B" />
                            <FiInstagram size={22} color="#DD2A7B" />
                            <FiTwitter size={22} color="#DD2A7B" />
                            <FiTwitch size={22} color="#DD2A7B" />
                        </p>
                        <button type="button">ASSINAR</button>
                    </li>
                </ul>
            </section>
            <div className="footer">
                <Link className="link-back" to="/">
                    <button className="button-back" type="button">Ops, errei meu CEP</button>
                </Link>
            </div>
        </div>
    )
}