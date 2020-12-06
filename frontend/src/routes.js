import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Produtos_passeio from './pages/Produtos/Passeio';
import Produtos_esporte from './pages/Produtos/Esporte'; 
import Produtos_retro from './pages/Produtos/Retro'; 
import Portifolio from './pages/Portifolio';
import Contato from './pages/Contato';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}></Route>
                <Route path="/sobre" exact component = {Sobre}></Route>
                <Route path="/produtos" exact component = {Produtos}></Route>
                <Route path="/produtos/passeio" exact component = {Produtos_passeio}></Route>
                <Route path="/produtos/esporte" exact component = {Produtos_esporte}></Route>
                <Route path="/produtos/retro" exact component = {Produtos_retro}></Route>
                <Route path="/portifolio" exact component = {Portifolio}></Route>
                <Route path="/contato" exact component = {Contato}></Route>
           
            </Switch>
        </BrowserRouter>
    );
}