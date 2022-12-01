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
import HandmadeRouter from './router';
import HeaderComponentClass from '../components/header';
import FooterComponentClass from '../components/footer';

class BasicBoxClass extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tags: [],
      setTagsFuncState: this.setTagsFunc,
      accounts: [],
      setAccountsFuncState: this.setAccountsFunc,
    }
    // console.log('DefaultPage state:', this.state)

  }
  setTagsFunc(tagToAdd: object) {
    let newTags = this.state.tags.push(tagToAdd);
    this.setState({ tags: newTags })
    console.log('defaultpage: new tag added')
    console.log('defaultpage: local:', newTags, 'state:', this.state.tags)
  }
  setAccountsFunc(accountToAdd: object) {
    let newAccounts = this.state.tags.push(accountToAdd);
    this.setState({ accounts: newAccounts })
    console.log('defaultpage: new account added')
    console.log('defaultpage: new accounts:', newAccounts, 'state:', this.state.accounts)
  }
  render() {
    return (
      <>
        <div className='Capsule0 BasicBox' >
          <HeaderComponentClass />
          <HandmadeRouter globalTagsFromDefaultPage={this.state} />
          <FooterComponentClass />
        </div>
      </>
    );
  }
}

export default BasicBoxClass;