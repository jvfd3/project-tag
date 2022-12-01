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
      objectName: 'a',
      objectValue: 'b',
      handleSubmitState: this.addTagHandleSubmit,
    }
  }
  setTagsFunc(tagToAdd: object) {
    alert('defaultPage: setTagsFunc: pre')
    console.log('defPage: tagToAdd: ', tagToAdd)
    console.log('defPage, state: ', this.state)
    alert('defaultPage: setTagsFunc: post')
  }
  addTagHandleSubmit(event: any) {
    alert('defaultPage>addTagHandleSubmit>pre')
    event.preventDefault();
    const { objectName, objectValue } = this.state
    const tagObject = {
      tagKey: objectName,
      tagValue: objectValue,
    }
    console.log(tagObject)
    console.log(this.state)
    let newTags = this.state.tags
    console.log('defPage: newTagsOld: ', newTags)
    newTags.push(tagObject);
    console.log('defPage: newTagsOld: ', newTags)
    this.setState({ tags: newTags })
    alert('defaultPage>addTagHandleSubmit>post')

  }
  setAccountsFunc(accountToAdd: object) {
    alert('defaultPage')
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
          <form onSubmit={this.state.handleSubmitState.bind(this)}>
            <input value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} type='text' style={{ width: 20 }} />
            <input value={this.state.objectValue} onChange={(e) => { this.setState({ objectValue: e.target.value }) }} type='text' style={{ width: 20 }} />
            <input type='submit' value='DefPage' />
          </form>

          <HandmadeRouter globalTagsFromDefaultPage={this.state} />
          <FooterComponentClass />
        </div>
      </>
    );
  }
}

export default BasicBoxClass;