/*
    Este código está sendo desenvolvido como parte da disciplina
    Paradigma Orientado a Objetos para Desenvolvimento de Software,
    ministrada pelo Professor Doutor Ausberto Silverio Castro Vera,
    no bacharelado de Ciência da Computação da
    Universidade Estadual do Norte Fluminense Darcy Ribeiro.
    O aluno responsável se chama João Vítor Fernandes Dias.
    O nome do projeto é "TAG".
      novembro de 2022.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicBoxClass from './handmade/routes/defaultpage';
import { BrowserRouter as Router } from 'react-router-dom';
import './handmade/styles/jv_styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <BasicBoxClass />
    </React.StrictMode >
  </Router>
);