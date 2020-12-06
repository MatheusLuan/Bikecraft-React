import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function Cpn_Introducao(){
    return(
        <div>
         	<section className="introducao">
				<div className="container">
					<h1 data-anime="400" className="fadeInDown">Bicicletas Feitas a Mão</h1>
					<blockquote data-anime="800" className="fadeInDown quote-externo">
						<p>“não tenha nada em sua casa que você não considere útil ou acredita ser bonito”</p>
						<cite>WILLIAM MORRIS</cite>
					</blockquote>				
					<Link className="btn" to="/produtos">Orçamento</Link>
				</div>
			</section>
		
        </div>
    );
}