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
import HandmadeRouter from './router';
import HeaderComponentClass from '../components/header';
import FooterComponentClass from '../components/footer';

class BasicBoxClass extends React.Component<any, any> {
  render() {
    return (
      <>
        <div className='Capsule0 BasicBox' >
          <HeaderComponentClass />
          <HandmadeRouter />
          <FooterComponentClass />
        </div>
      </>
    );
  }
}

export default BasicBoxClass;