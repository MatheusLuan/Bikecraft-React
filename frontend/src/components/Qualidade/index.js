import React from 'react';
import './style.css';

import bikcraftqualidade from '../../assets/bikcraft-qualidade.svg';
import { Link } from 'react-router-dom';

export default function Cpn_Qualidade() {
	return (
		<div>
			<section className="qualidade container">
			<h2 className="subtitulo">Qualidade</h2>
			<img src={bikcraftqualidade} alt="Bikcraft"/>
			<ul className="qualidade_lista">
				<li className="grid-1-3">
					<h3>Durabilidade</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
				</li>
				<li className="grid-1-3">
					<h3>Design</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
				</li>
				<li className="grid-1-3">
					<h3>Sustentabilidade</h3>
					<p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação renovação renovação</p>
				</li>
			</ul>
			<div className="call">
				<p>conheça mais a nossa história</p>
				<Link to="/sobre" className="btn btn-preto">Sobre</Link>
			</div>
		</section>		
		</div>
	);
}