import React from 'react';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';


import Cpn_Header from '../../components/Header';
import Cpn_Footer from '../../components/Footer';

import retro from '../../assets/portfolio/retro.jpg';
import passeio from '../../assets/portfolio/passeio.jpg';
import esporte from '../../assets/portfolio/esporte.jpg';


import './style.css';

export default function Portifolio() {
    return (
        <div>
            <Cpn_Header />
            <section className="introducao-interna interna_portfolio">
                <div className="container">
                    <h1 data-anime="400" className="fadeInDown">Portfólio</h1>
                    <p data-anime="800" className="fadeInDown">conheça os projetos que amamos mostrar</p>
                </div>
            </section>

            <section className="container fadeInDown" data-slide="quote" data-anime="1200">
                <blockquote className="quote_clientes">
                    <p>“Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.”</p>
                    <cite>Barbara Moss</cite>
                </blockquote>
                <blockquote className="quote_clientes">
                    <p>“Nada melhor do que dar um rolê com a minha Bikcraft na orla. Essa é a minha companheira mais fiel, nunca me traiu e está sempre a minha disposição.”</p>
                    <cite>Jhony Rato</cite>
                </blockquote>
                <blockquote className="quote_clientes">
                    <p>“Aqueles que ainda não possuem uma Bikcraft, não sabem o que estão perdendo. A precisão é absurda e a velocidade transcendental. Nunca vida nada igual.”</p>
                    <cite>Bernardo</cite>
                </blockquote>
            </section>

            <section className="portfolio">
                <div className="container" data-slide="portfolio">
                    <ul className="portfolio_lista">
                        <li className="grid-8"><img src={retro} alt="Bicicleta Retrô" /></li>
                        <li className="grid-8"><img src={passeio} alt="Bicicleta Passeio" /></li>
                        <li className="grid-16"><img src={esporte} alt="Bicicleta Esporte" /></li>
                    </ul>
                </div>
            </section>
            <Cpn_Footer />

        </div>
    );
}