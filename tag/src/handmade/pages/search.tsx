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

class SearchPage extends React.Component {
  render() {
    const searchPageMessage = 'This page should have a top bar for searching objects. Under it, all the found objects are shown.'
    return (
      <div className='Capsule1 MiddleCapsule'>
        <PageTitle title='SearchPage' />
        <p className='Capsule2 WhiteText'>
          {searchPageMessage}
        </p>
      </div>
    );
  }
}

export default SearchPage;