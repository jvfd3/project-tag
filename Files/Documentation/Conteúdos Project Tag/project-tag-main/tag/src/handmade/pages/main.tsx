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
import PageTitle from '../components/title';

class MainPage extends React.Component {
  render() {
    const mainPageMessage = 'This page should explain the concept behind the project tag. How to use it and how to benefit from it.'
    return (
      <div className='Capsule1 fillHeight'>
        <PageTitle title='MainPage' />
        <p className='Capsule2 WhiteText'>
          <img className='Capsule3 imageMainTagLogo' src='images/tag.png' alt='Tag logo' />
          <br />
          {mainPageMessage}
        </p>
      </div>
    );
  }
}

export default MainPage;