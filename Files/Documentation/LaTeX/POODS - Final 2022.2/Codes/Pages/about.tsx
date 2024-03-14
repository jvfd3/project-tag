import React from 'react';
import PageTitle from '../components/title';

class About extends React.Component {
  render() {
    let aboutMessage1 = 'Este código está sendo desenvolvido como parte da disciplina Paradigma Orientado a Objetos para Desenvolvimento de Software, ministrada pelo Professor Doutor Ausberto Silverio Castro Vera, no bacharelado de Ciência da Computação da Universidade Estadual do Norte Fluminense Darcy Ribeiro. O aluno responsável se chama João Vítor Fernandes Dias. O nome do projeto é "TAG".'
    let aboutMessage2 = 'O objetivo deste código é o de permitir que um usuário adicione tags a objetos que possam ser futuramente utilizadas como um critério de busca.'
    return (
      <div className='Capsule1 AboutContainer fillHeight'>
        <PageTitle title='About' />
        <p className='Capsule2 WhiteText AboutText'>
          <img className='AboutCCImage' src='images/logoCC.png' alt='CC logo' />
          {aboutMessage1}
          <br />
          <br />
          {aboutMessage2}
        </p>
      </div>
    );
  }
}

export default About;