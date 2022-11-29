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

class AddTagPage extends React.Component {
  render() {
    const addTagPageMessage = 'In this page there should be a preview of recently created tags and objects. But giving priority to user\'s created tags first. The user can create a new object providing the data needed'
    return (
      <div className='Capsule1 MiddleCapsule'>
        <h1 className='WhiteText'>
          AddTag
        </h1>
        <p className='Capsule2 WhiteText'>
          {addTagPageMessage}
        </p>
      </div>
    );
  }
}

export default AddTagPage;