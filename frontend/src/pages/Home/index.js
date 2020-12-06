import React from 'react';
import {Link} from 'react-router-dom';

import '../../css/grid.css';
import '../../css/normalize.css';
import '../../css/reset.css';

import Cpn_Header from '../../components/Header';
import Cpn_Introducao from '../../components/Introducao';
import Cpn_Portifolio from '../../components/Portifolio';
import Cpn_Produtos from '../../components/Produtos';
import Cpn_Qualidade from '../../components/Qualidade';
import Cpn_Footer from '../../components/Footer';

import './style.css';

export default function Home(){
    return(
        <div>
            <Cpn_Header/>          
            <Cpn_Introducao/>         
            <Cpn_Produtos/>           
            <Cpn_Portifolio/>                      
            <Cpn_Qualidade/>        
            <Cpn_Footer/>
        </div>
    );
}