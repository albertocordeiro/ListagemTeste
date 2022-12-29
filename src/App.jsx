
import React from "react";

import Primeiro from './Components/basicos/primeiro'
import ComParametro from './Components/basicos/ComParametro'
import Aleatorios from "./Components/basicos/Aleatorios";
import Cards from "./Components/Layout/Cards";


export default (_) =>
    <div id="app">
        <h1>Fundamentos do React</h1>
        <Cards titulo="Desafio Aleatórios">
            <Aleatorios min={1} max={60} > </Aleatorios>           
        </Cards>

        <Cards titulo="Com Parametros">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Alberto Araujo"
            nota={9.7} >
        </ComParametro>
        </Cards>

        <Cards titulo="Primeiro">
           <Primeiro></Primeiro>        
        </Cards>


    </div>


