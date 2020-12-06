import React from 'react';
import './style.css';

import esporte from '../../assets/portfolio/retro.jpg';
import passeio from '../../assets/portfolio/passeio.jpg';
import retro from '../../assets/portfolio/esporte.jpg';
import { Link } from 'react-router-dom';


export default function Cpn_Portifolio() {
	return (
		<div>			
		<section className="portfolio">
			<div className="container">
				<h2 className="subtitulo">Portfólio</h2>
				<ul className="portfolio_lista">
					<li className="grid-8"><img src={esporte} alt="Bicicleta Retrô"/></li>
					<li className="grid-8"><img src={passeio} alt="Bicicleta Passeio"/></li>
					<li className="grid-16"><img src={retro} alt="Bicicleta Esporte"/></li>
				</ul>
				<div className="call">
					<p>conheça mais o nosso portfólio</p>
					<Link to="/portifolio" className="btn">Portfólio</Link>
				</div>
			</div>
		</section>	
		</div>
	);
}