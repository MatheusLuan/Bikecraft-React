import React from 'react';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';


import Cpn_Header from '../../components/Header';
import Cpn_Footer from '../../components/Footer';

import bikcraft_passeio_1 from '../../assets/produtos/bikcraft-passeio-1.jpg';
import bikcraft_esporte_1 from '../../assets/produtos/bikcraft-esporte-1.jpg';
import bikcraft_retro_1 from '../../assets/produtos/bikcraft-retro-1.jpg';


import passeio from '../../assets/produtos/passeio.svg';
import esporte from '../../assets/produtos/esporte.svg';
import retro from '../../assets/produtos/retro.svg';


import './style.css';
import { Link } from 'react-router-dom';

export default function Produtos() {
    return (
        <div>
            <Cpn_Header />

            <section className="introducao-interna interna_produtos">
                <div className="container">
                    <h1 data-anime="400" className="fadeInDown">Produtos</h1>
                    <p data-anime="800" className="fadeInDown">conheça todos os nossos produtos</p>
                </div>
            </section>

            <section className="container produto_item fadeInDown" data-anime="1200">
                <Link to="/produtos/passeio">
                    <div className="grid-11">
                        <img src={bikcraft_passeio_1} alt="Bikcraft Passeio" />
                        <h2>Passeio</h2>
                    </div>
                </Link>
                <Link to="/produtos/passeio">
                    <div className="grid-5 produto_icone"><img src={passeio} /></div>
                </Link>
            </section>

            <section className="container produto_item">
                <Link to="/produtos/esporte">
                    <div className="grid-11">
                        <img src={bikcraft_esporte_1} alt="Bikcraft Esporte" />
                        <h2>Esporte</h2>
                    </div>
                </Link>
                <Link to="/produtos/esporte">
                    <div className="grid-5 produto_icone"><img src={esporte} /></div>
                </Link>
            </section>

            <section className="container produto_item">
                <Link to="/produtos/retro">
                    <div className="grid-11">
                        <img src={bikcraft_retro_1} alt="Bikcraft Retrô" />
                        <h2>Retrô</h2>
                    </div>
                </Link>
                <Link to="/produtos/retro">
                    <div className="grid-5 produto_icone"><img src={retro} /></div>
                </Link>
            </section>

            <section className="orcamento">
                <div className="container">
                    <h2 className="subtitulo">Orçamento</h2>
                    <form id="form_orcamento" method="POST" action="./enviar.php" className="form grid-8 formphp">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" required />
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required />
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" />
                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        <button id="enviar" name="enviar" type="submit" className="btn">Enviar</button>
                    </form>

                    <div className="orcamento_dados grid-8">
                        <h3>Dados</h3>
                        <span>+55 21 93223 3232</span>
                        <span>orcamento@bikcraft.com</span>
                        <h3>Monte a sua Bikcraft</h3>
                        <p>Escolha as especificações:</p>
                        <ul>
                            <li>- Cores</li>
                            <li>- Estilo</li>
                            <li>- Medidas</li>
                            <li>- Acessórios</li>
                            <li>- E Outros</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Cpn_Footer />

        </div>
    );
}