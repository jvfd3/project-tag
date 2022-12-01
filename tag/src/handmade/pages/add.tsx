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

/* ToDo: Solve Tag addition later */

class TagCreationHolder extends React.Component<any, any> {
  constructor(props: any) {
    // console.log(props.tagUpdater)
    super(props);
    this.state = {
      finalAddTagStates: props.globalTagsFromRouter,
      objectName: '',
      objectValue: '',
    };
    // console.log('AddTag finalStates', this.state)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className='Capsule2'>
        <form /* onSubmit={this.state.finalAddTagStates.handleSubmitState.bind(this)} */>
          {/* <TagElement /> */}
          <div className='Capsule3 WhiteText row' style={{ flexDirection: 'row' }}>
            <>
              Type the tag's
              <br />
              name:
              <input type='text' value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} />
              <br />
              value:
              <input type='text' value={this.state.objectValue} onChange={(e) => { this.setState({ objectValue: e.target.value }) }} />
            </>
          </div>
          {/* <input type='button' value='Add tag' onClick={this.addNewElement} /> */}
          {/* {' '} */}
          <input type='submit' value='Submit' />
          {' '}
          <input type='reset' value='Reset Button' />
        </form>

      </div>
    )
  }
}
class AddTagPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      addTagParentState: props.globalTagsFromRouter,
    }
  }
  render() {
    return (
      <div className='Capsule1 fillHeight'>
        <PageTitle title='AddTag' />
        <TagCreationHolder tagUpdater={this.state.addTagParentState} />
      </div>
    );
  }
}

export default AddTagPage;