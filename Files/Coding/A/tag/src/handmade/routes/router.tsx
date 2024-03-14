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
/* ToDo: Passing things to addtag is wrong */

import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import MainPage from '../pages/main';
import SelfPage from '../pages/self';
import AboutPage from '../pages/about';
import AddTagPage from '../pages/add';
import SignInPage from '../pages/signIn';
import SearchTagPage from '../pages/search';
import HeaderComponentClass from '../components/header';
import FooterComponentClass from '../components/footer';

class HandmadeRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // routerAddTagStates: props.globalTagsFromDefaultPage.addTagStates,
      // objectName: 'd',
      // objectValue: 'b',
      parentState: props.globalTagsFromDefaultPage,
      parentAddTagStates: props.globalTagsFromDefaultPage.addTagStates,
    }
    // console.log('Router AddTagStates:', this.state.parentAddTagStates)
    // this.encapsulate = this.encapsulate.bind(this);
  }
  encapsulate(props: any) { // Not used
    let ElementToFill = props.element
    return (
      <div className='Capsule3 HeaderButton'>
        <HeaderComponentClass />
        {ElementToFill}
        <FooterComponentClass />
      </div >
    )
  }
  render() {
    return (
      <>

        {/* <form onSubmit={this.state.parentState.addTagStates.handleSubmitState.bind(this)}>
          <input value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} type='text' style={{ width: 20 }} />
          <input value={this.state.objectValue} onChange={(e) => { this.setState({ objectValue: e.target.value }) }} type='text' style={{ width: 20 }} />
          <input type='submit' value='router' />
        </form> */}
        <Routes>
          <Route path='/' element={<SignInPage globalTagsFromRouter={this.state.parentState} />} />
          <Route path='/add' element={<AddTagPage globalTagsFromRouter={this.state} />} />
          <Route path='/self' element={<SelfPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/SignIn' element={<SignInPage globalTagsFromRouter={this.state.parentState} />} />
          <Route path='/search' element={<SearchTagPage globalTagsFromRouter={this.state.parentState} />} />
          {/* <Route path='/add' element={this.encapsulate(<AddTagPage />)} /> */}
          {/* This last one is useless, right? 🤨 */}
        </Routes>
      </>
    );
  }
}

export default HandmadeRouter;