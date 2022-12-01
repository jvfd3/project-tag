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
      RouterParentState: props.globalTagsFromDefaultPage,
    }
    // console.log('Router state:', this.state.RouterParentState)
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

        <form onSubmit={this.state.RouterParentState.handleSubmitState.bind(this)}>
          <input type='text' value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} />
          <input type='submit' value='router' />
        </form>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/add' element={<AddTagPage globalTagsFromRouter={this.state.RouterParentState} />} />
          <Route path='/self' element={<SelfPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/SignIn' element={<SignInPage globalTagsFromRouter={this.state.RouterParentState} />} />
          <Route path='/search' element={<SearchTagPage globalTagsFromRouter={this.state.RouterParentState} />} />
          {/* <Route path='/add' element={this.encapsulate(<AddTagPage />)} /> */}
        </Routes>
      </>
    );
  }
}

export default HandmadeRouter;