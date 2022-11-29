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

class SearchPage extends React.Component {
  render() {
    const things_to_do = 'This page should have a top bar for searching objects. Under it all the found objects are shown.'
    return (
      <div className='Capsule1 MiddleCapsule'>
        <h1 className='WhiteText'>
          SearchPage
        </h1>
        <p className='Capsule2 WhiteText'>
          {things_to_do}
        </p>
      </div>
    );
  }
}

export default SearchPage;