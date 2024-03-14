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
/* ToDo: buttons should be more distant from each other */
// https://codesandbox.io/s/infinite-component-onclick-oery4?file=/src/index.js:76-150
/* 'In this page there should be a preview of recently created tags and objects. But giving priority to user\'s created tags first. The user can create a new object providing the data needed' */
import React from 'react';
import PageTitle from '../components/title';


class ResultingElement extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props.selectedInput)
    this.state = { out_value: props.selectedInput };
  }
  render() {
    /* switch (this.state.out_value) {
      case 'String': componentToShow.push(<div>String</div>); break;
      case 'Integer': componentToShow.push(<div>Integer</div>); break;
      case 'Bool': componentToShow.push(<div>Bool</div>); break;
    } */
    let smallComponent = ''
    switch (this.state.out_value) {
      case 'Integer': smallComponent = 'Integer'; break;
      case 'String': smallComponent = 'String'; break;
      case 'Bool': smallComponent = 'Bool'; break;
    }
    // <input type="text">Type your string tag</input>
    // <input type="number">Type your integer tag</input>
    // <input type="text">Type your string tag</input>
    return <div>{smallComponent}</div>
  }
}

class TagElement extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: 'String' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    return <ResultingElement selectedInput={this.state.value} />
  }
  render() {
    return (
      <div className='Capsule3 WhiteText row' style={{ flexDirection: 'row' }}>
        <select defaultValue={'String'} value={this.state.value} onChange={this.handleChange}>
          <option value='String' selected>String</option>
          <option value='Integer'>Integer</option>
          <option value='Bool'>Bool</option>
        </select>
        <ResultingElement selectedInput={this.state.value} />
      </div>
    )
  }
}
class TagCreationHolder extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: 'String',
      objectName: '',
      inputList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: any) {
    const model = {
      form_a: 'tempValueA',
      form_b: 'tempValueB',
      // rememberMe: rememberMe.value,
    }
    event.preventDefault();
    alert('Submitted');
    console.log(model)
  }
  onSelectChange() {
    return <></>
  }
  addNewElement() {
    let smallComponent = ''
    switch (this.state.out_value) {
      case 'Integer': smallComponent = 'Integer'; break;
      case 'String': smallComponent = 'String'; break;
      case 'Bool': smallComponent = 'Bool'; break;
    }
    return <div>{smallComponent}</div>
  }
  Input(props: any) {
    return <input type={props.outType} />;
  };
  render() {
    return (
      <div className='Capsule2'>
        <form onSubmit={this.handleSubmit}>
          {/* <TagElement /> */}
          <div className='Capsule3 WhiteText row' style={{ flexDirection: 'row' }}>
            <>
              Type the object name:
              <input type='text' value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} />
              <br />
              <select defaultValue={'String'} value={this.state.selectedType} onChange={(e) => { this.setState({ selectedType: e.target.value }); console.log(this.state.selectedType) }}>
                <option value='String'>String</option>
                <option value='Integer'>Integer</option>
                <option value='Bool'>Bool</option>
              </select>
              <ResultingElement selectedInput={this.state.value} />
              {() => {
                let smallComponent = ''
                switch (this.state.out_value) {
                  case 'Integer': smallComponent = 'Integer'; break;
                  case 'String': smallComponent = 'String'; break;
                  case 'Bool': smallComponent = 'Bool'; break;
                }
                return <div>{smallComponent}</div>
              }
              }
            </>
          </div>
          <input type='button' value='Add tag' onClick={this.addNewElement} />
          {' '}
          <input type='submit' value='Submit' />
          {' '}
          <input type='reset' value='Reset Button' />
        </form>

      </div>
    )
  }
}
class AddTagPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 fillHeight'>
        <PageTitle title='AddTag' />
        <TagCreationHolder />
      </div>
    );
  }
}

export default AddTagPage;