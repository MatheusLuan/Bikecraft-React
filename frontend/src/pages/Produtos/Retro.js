import React from 'react';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';


import Cpn_Header from '../../components/Header';
import Cpn_Footer from '../../components/Footer';

import bikcraft_retro_1 from '../../assets/produtos/bikcraft-retro-1.jpg';
import bikcraft_retro_2 from '../../assets/produtos/bikcraft-retro-2.jpg';


import retro from '../../assets/produtos/retro.svg';


import './style.css';

export default function Produtos_retro() {
    return (
        <div>
            <Cpn_Header />

            <section className="introducao-interna interna_produtos">
                <div className="container">
                    <h1 data-anime="400" className="fadeInDown">Produtos</h1>
                    <p data-anime="800" className="fadeInDown">conheça todos os nossos produtos</p>
                </div>
            </section>        

            <section className="container produto_item">
                <div className="grid-11">
                    <img src={bikcraft_retro_1}alt="Bikcraft Retrô" />
                    <h2>Retrô</h2>
                </div>
                <div className="grid-5 produto_icone"><img src={retro} /></div>
                <div className="grid-8"><img src={bikcraft_retro_2} alt="Bikcraft Retrô" /></div>
                <div className="grid-8 produto_info">
                    <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na formula da gestão inovadora da qual fazemos parte inovadora da qual fazemos parte.</p>
                    <ul>
                        <li>Conforto</li>
                        <li>Velocidade</li>
                        <li>Design</li>
                        <li>Versatilidade</li>
                    </ul>
                </div>
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