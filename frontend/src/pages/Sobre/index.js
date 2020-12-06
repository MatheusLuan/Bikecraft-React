import React from 'react';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';


import Cpn_Header from '../../components/Header';
import Cpn_Footer from '../../components/Footer';

import equipe_bikcraft from '../../assets/equipe-bikcraft.jpg';
import bikcraft_qualidade from '../../assets/bikcraft-qualidade.svg';


import './style.css';

export default function Sobre() {
    return (
        <div>
            <Cpn_Header />
            <section class="introducao-interna interna_sobre">
                <div class="container">
                    <h1 data-anime="400" class="fadeInDown">Sobre</h1>
                    <p data-anime="800" class="fadeInDown">conheça mais sobre a bikcraft</p>
                </div>
            </section>

            <section class="missao_sobre container fadeInDown" data-anime="1200">
                <div class="grid-10">
                    <h2 class="subtitulo-interno">História, Missão e Visão</h2>
                    <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte da qual fazemos parte.</p>
                    <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte da qual fazemos parte.</p>
                </div>
                <div class="grid-6">
                    <h2 class="subtitulo-interno">Valores</h2>
                    <ul>
                        <li>- Qualidade no processo com</li>
                        <li>- Foco no cliente sem perder a</li>
                        <li>- Diversão, preservando a</li>
                        <li>- Natureza com sustentabilidade</li>
                    </ul>
                </div>

                <div class="grid-16 foto-equipe">
                    <img src={equipe_bikcraft} alt="Equipe Bikcraft" />
                </div>
            </section>

            <section class="qualidade container">
                <h2 class="subtitulo">Qualidade</h2>
                <img src={bikcraft_qualidade} alt="Bikcraft" />
                <ul class="qualidade_lista">
                    <li class="grid-1-3">
                        <h3>Durabilidade</h3>
                        <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
                    </li>
                    <li class="grid-1-3">
                        <h3>Design</h3>
                        <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
                    </li>
                    <li class="grid-1-3">
                        <h3>Sustentabilidade</h3>
                        <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
                    </li>
                </ul>
            </section>
            <Cpn_Footer/>

        </div>
    );
}