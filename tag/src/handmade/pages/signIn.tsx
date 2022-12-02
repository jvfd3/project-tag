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
import UserSignForm from '../components/form';
import PageTitle from '../components/title';

class SignInPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLogged: false
    };
    this.reSetStateOut = this.reSetStateOut.bind(this);
  }
  reSetStateOut() {
    this.setState({ isLogged: !this.state.isLogged });
  }
  login() {
    let element = <></>
    switch (this.state.isLogged) {
      case true:
        element = <>
          <div className='Capsule2'>
            <p className='WhiteText'> Logged in</p>
            <br />
            <p className='WhiteText'> This should redirect to another page</p>

          </div>
        </>
        break;

      default:
        element = <UserSignForm isThisContext={this} />
        break;
    }
    return element
  }
  render() {
    return (
      <div className='Capsule1 fillHeight LoginContainer'>
        <PageTitle title='SignInPage' />
        {this.login()}
      </div>
    );
  }
}

export default SignInPage;