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
import UserSignForm from '../components/form'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 MiddleCapsule'>
        <div className='Capsule2'> {/* Title */}
          <h1 className='WhiteText'>
            SignUpPage
          </h1>
        </div>
        <UserSignForm />
      </div>
    );
  }
}

export default SignUpPage;