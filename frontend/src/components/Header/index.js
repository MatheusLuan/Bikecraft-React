import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import './style.css';

import bikcraft from '../../assets/bikcraft.svg';


export default function Cpn_Header() {
    return (
        <div>         
            <header className="header">
                <div className="container">
                    <Link to="/" className="grid-4">
                        <img src={bikcraft} alt="BikCraft" />
                    </Link>
                    <nav className="grid-12 header_menu">
                        <ul>
                            <li><Link className="a" to="/sobre">Sobre</Link></li>
                            <li><Link className="a" to="/produtos">Produtos</Link></li>
                            <li><Link className="a" to="/portifolio">Portifólio</Link></li>
                            <li><Link className="a" to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}