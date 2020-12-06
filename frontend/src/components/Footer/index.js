import React from 'react';
import './style.css';

import facebook from '../../assets/redes-sociais/facebook.svg';
import instagram from '../../assets/redes-sociais/instagram.svg';
import twitter from '../../assets/redes-sociais/twitter.svg';

export default function Cpn_Footer() {
    return (
        <div>
            <section className="quebra">
                <blockquote className="quote-externo container">
                    <p>“o verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana.”</p>
                    <cite>WILLIAM MORRIS</cite>
                </blockquote>
            </section>
            <footer>
                <div className="footer">
                    <div className="container">

                        <div className="grid-8 footer_historia">
                            <h3>Nossa História</h3>
                            <p>O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana cotidiana. interesse por todos os detalhes da vida cotidiana cotidiana.</p>
                        </div>

                        <div className="grid-4 footer_contato">
                            <h3>Contato</h3>
                            <ul>
                                <li>- 21 23232-4343</li>
                                <li>- contato@bikcraft.com</li>
                                <li>- Botafago - RJ</li>
                            </ul>
                        </div>

                        <div className="grid-4 footer_redes">
                            <h3>Contato</h3>
                            <ul>
                                <li><a href="http://facebook.com" target="_blank"><img src={facebook} /></a></li>
                                <li><a href="http://instagram.com" target="_blank"><img src={instagram} /></a></li>
                                <li><a href="http://twitter.com" target="_blank"><img src={twitter} /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="copy">
                    <div className="container">
                        <p className="grid-16">Bikcraft 2019 - Alguns direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}