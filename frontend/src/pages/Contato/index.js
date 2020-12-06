import React from 'react';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';


import Cpn_Header from '../../components/Header';
import Cpn_Footer from '../../components/Footer';


import facebook from '../../assets/redes-sociais/facebook.svg';
import instagram from '../../assets/redes-sociais/instagram.svg';
import twitter from '../../assets/redes-sociais/twitter.svg';
import endereco_bikcraft from '../../assets/endereco-bikcraft.jpg';

import './style.css';

export default function Contato() {
	return (
		<div>
			<Cpn_Header />
			<section class="introducao-interna interna_contato">
				<div class="container">
					<h1 data-anime="400" class="fadeInDown">Contato</h1>
					<p data-anime="800" class="fadeInDown">tire suas dúvidas com a gente</p>
				</div>
			</section>

			<section class="contato container fadeInDown" data-anime="1200">
				<form id="form_orcamento" method="POST" class="contato_form grid-8 formphp">
					<label for="nome">Nome</label>
					<input type="text" id="nome" name="nome" required />
					<label for="email">E-mail</label>
					<input type="email" id="email" name="email" required />
					<label for="telefone">Telefone</label>
					<input type="text" id="telefone" name="telefone" />
					<label for="mensagem">Mensagem</label>
					<textarea id="mensagem" name="mensagem" required></textarea>
					<button id="enviar" name="enviar" type="submit" class="btn btn-preto">Enviar</button>
				</form>

				<div class="contato_dados grid-8">
					<h3>Dados</h3>
					<span>+55 21 93223 3232</span>
					<span>orcamento@bikcraft.com</span>
					<span>Rua Ali Perto - Botafogo</span>
					<span>Rio de Janeiro - RJ - Brasil</span>
					<h3>Redes Sociais</h3>
					<ul>
						<li><a href="http://facebook.com" target="_blank"><img src={facebook} /></a></li>
						<li><a href="http://instagram.com" target="_blank"><img src={instagram} /></a></li>
						<li><a href="http://twitter.com" target="_blank"><img src={twitter} /></a></li>
					</ul>
				</div>
			</section>

			<section class="container contato_mapa">
				<a href="http://google.com" target="_blank" class="grid-16"><img src={endereco_bikcraft} alt="Endereço da Bikcraft" /></a>
			</section>
			<Cpn_Footer />

		</div>
	);
}