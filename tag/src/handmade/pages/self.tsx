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

class ProfilePic extends React.Component {
  render() {
    return (
      <>
        <div className='Outer'>
          <div className='Image'>
            <div className='first'>
            </div>
            <div className='second'>
            </div>
            <div className='third'>
            </div>
          </div>
        </div>
        {/* 
         _____  _____   Imagem    Edição
        |_____||_____|  username  Edição
        |_____||_____|  Senha     Edição
        |_____||_____|  tag Numb  Edição
        */}
      </>
    )
  }
}

class SelfPage extends React.Component {
  render() {
    const selfPageMessage = "This page should provide the user's information: Profile pic, username, name, email, creation date, created tags, created objects, etc. And also allow modification to these information."
    return (
      <div className='Capsule1 MiddleCapsule'>
        <PageTitle title='SelfPage' />
        <p className='Capsule2 WhiteText'>
          {selfPageMessage}
        </p>
      </div>
    );
  }
}

export default SelfPage;