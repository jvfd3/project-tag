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

class SelfPage extends React.Component {
  render() {
    const selfPageMessage = "This page should provide the user's information: Profile pic, username, name, email, creation date, created tags, created objects, etc. And also allow modification to these information."
    return (
      <div className='Capsule1 MiddleCapsule'>
        <h1 className='WhiteText'>
          SelfPage
        </h1>
        <p className='Capsule2'>
          <p className='WhiteText'>
            {selfPageMessage}
          </p>
        </p>
      </div>
    );
  }
}

export default SelfPage;