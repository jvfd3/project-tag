import React from 'react';

class About extends React.Component {
  render() {
    let aboutMessage1 = 'Este código está sendo desenvolvido pelo aluno João Vítor Fernandes Dias que o está chamando de "TAG", ou "Projeto Tag". Este código está sendo desenvolvido como parte da disciplina Paradigma Orientado a Objetos para Desenvolvimento de Software, ministrada pelo Professor Doutor Ausberto Silverio Castro Vera.'
    let aboutMessage2 = 'O objetivo deste código é o de permitir que um usuário adicione tags a objetos que possam ser futuramente utilizadas como um critério de busca.'
    return (
      <div className='Capsule1 MiddleCapsule'>
        <h1 className='WhiteText'>
          About
        </h1>
        <p className='FooterText WhiteText'>
          {aboutMessage1}
        </p>
        <p className='FooterText WhiteText'>
          {aboutMessage2}
        </p>
      </div>
    );
  }
}

export default About;