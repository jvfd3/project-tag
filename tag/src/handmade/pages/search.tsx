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
// 'This page should have a top bar for searching objects. Under it, all the found objects are shown.'

import React from 'react';
import PageTitle from '../components/title';


class FromScratch extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      outerTags: props.tags,
    }
  }
  getLine(tags: any, line: number) {
    return (
      <tr key={line + 10}>
        <th key={line + 100}>
          {tags[line].tagKey}
        </th>
        <th key={line + 1000}>
          {tags[line].tagVal}
        </th>
      </tr>
    )
  }
  getLines(tags: object) {
    // console.log(typeof tags)
    let elements = []
    for (let index = 0; index < Object.keys(tags).length; index++) {
      // const element = Object.keys(tags)[index];
      let element_to_push = this.getLine(tags, index)
      console.log(element_to_push)
      elements.push(element_to_push)
    }
    return (
      <>
        {elements}
      </>
    )
  }
  render() {
    return (
      <table>
        <thead>
          <>
            {this.getLines(this.state.outerTags)}
          </>
        </thead>
      </table>
    )
  }
}

class SearchPage extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      template_DB: [
        {
          tagKey: 'Parafusos',
          tagVal: '24',
        },
        {
          tagKey: 'Pregos',
          tagVal: '214',
        },
        {
          tagKey: 'Porcas',
          tagVal: '13',
        },
        {
          tagKey: 'Braçadeiras',
          tagVal: '45',
        },
      ]
    }
  }
  render() {
    return (
      <div className='Capsule1 fillHeight'>
        <PageTitle title='SearchPage' />
        <div className='Capsule2'>
          <div className='Capsule3 SearchBar'>
            <form /* onSubmit={} */>
              <input type="search" defaultValue='Materiais de construção' />
              <input type="submit" value='🔎' />
            </form>
          </div>
          <div className='Capsule3 SearchedTagsBox'>
            <FromScratch tags={this.state.template_DB} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;