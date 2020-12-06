import React from 'react';
import './style.css';

import esporte from '../../assets/produtos/esporte.svg';
import passeio from '../../assets/produtos/passeio.svg';
import retro from '../../assets/produtos/retro.svg';
import { Link } from 'react-router-dom';

export default function Cpn_Produtos() {
	return (
		<div>
			<section className="produtos container fadeInDown" data-anime="1600">
			<h2 className="subtitulo">Produtos</h2>
			<ul className="produtos_lista">

				<li className="grid-1-3">
					<div className="produtos_icone">
						<img src={passeio} alt="Bikcraft Passeio"/>
					</div>
					<h3>Passeio</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
				</li>

				<li className="grid-1-3">
					<div className="produtos_icone">
						<img src={esporte} alt="Bikcraft esporte"/>
					</div>
					<h3>Esporte</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
				</li>

				<li className="grid-1-3">
					<div className="produtos_icone">
						<img src={retro} alt="Bikcraft Retro"/>
					</div>
					<h3>Retrô</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
				</li>

			</ul>

			<div className="call">
				<p>clique aqui e veja os detalhes dos produtos</p>
				<Link to="/produtos" className="btn btn-preto">Produtos</Link>
			</div>
			
		</section>
		</div>
	);
}