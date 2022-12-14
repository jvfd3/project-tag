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

class FooterComponentClass extends React.Component {
  render() {
    let footerMessage = 'Code developed by João Vítor Fernandes Dias for a class given by Ausberto Silverio Castro Vera.'
    return (
      <div className='FooterCapsule Capsule1'>
        <p className='FooterText WhiteText'>
          {footerMessage}
        </p>
      </div>
    );
  }
}

export default FooterComponentClass;