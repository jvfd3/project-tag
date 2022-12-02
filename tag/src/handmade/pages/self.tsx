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
/* "This page should provide the user's information: Profile pic, username, name, email, creation date, created tags, created objects, etc. And also allow modification to these information."
  ToDo: Add a pencil button to make it able to change information
*/

import React from 'react';
import PageTitle from '../components/title';

class SelfImage extends React.Component {
  /* Falta centralizar isso daqui */
  render() {
    return (
      <div className='Capsule3 outerSelfImageBorder round center_internal_items'>
        <img className='Capsule4 self_profile_pic round center_internal_items' src='images/template_user_picture.png' alt='profile' />
      </div>
    )
  }
}
class SelfUserContent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: 'Joao Vitor',
      password: '**********',
      email: 'joaovitorfd2000@gmail.com',
      tagsCreated: 7,
      creationDate: '01/12/2022'
    }
    /* 
       _____  _____   Imagem    Edição
      |_____||_____|  username  Edição
      |_____||_____|  Senha     Edição
      |_____||_____|  tag Numb  Edição
    */
  }
  render() {
    function get_items(elements: any) {
      let list_of_user_data = []
      let size = Object.keys(elements).length
      let keys = Object.keys(elements)
      let values = Object.values(elements)
      for (let index = 0; index < size; index++) {
        let list_key = keys[index]
        let list_value = values[index]
        // console.log(list_key, list_value)
        list_of_user_data.push(
          <tr className='self_row' key={index + 10}>
            <th className='self_column' key={index + 100}> <>{list_key}</> </th>
            <th className='self_column' key={index + 1000}> <>{list_value}</> </th>
          </tr>
        )
      }
      return (
        <table>
          <thead>
            {list_of_user_data}

          </thead>
        </table>
      );
    }
    return (
      <div className='center WhiteText'>
        {get_items(this.state)}
      </div>
    )
  }
}

class SelfPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 fillHeight SelfPageContainer'>
        <PageTitle title='SelfPage' />
        <div className='Capsule2 SelfPageContents' >
          <SelfImage />
          <SelfUserContent />
        </div>
      </div>
    );
  }
}

export default SelfPage;