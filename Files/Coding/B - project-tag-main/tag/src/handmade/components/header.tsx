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
import { Link } from 'react-router-dom';

class HeaderComponentClass extends React.Component {
  constructor(props: any) {
    super(props);
    this.LogoTag = this.LogoTag.bind(this);
    this.PageButton = this.PageButton.bind(this);
  }

  LogoTag() { // passar isso pra dentro da classe da forma certa
    return (
      <div className='Capsule2 HeaderLogo'>
        <img className='Capsule3 HeaderLogoImage' src='images/tag.png' alt='Tag logo' />
        <p className='Capsule3 HeaderLogoText'>
          TAG
        </p>
      </div>
    );
  }

  PageButton(props: any) { // passar isso pra dentro da classe da forma certa
    let pageName = props.name
    let route = '/' + pageName
    switch (pageName) {
      case 'Main':
      case 'Exit': route = 'SignIn'; break;
      // default: route = pageName; break;
    }
    return (
      <div className='Capsule3 HeaderButton'>
        <Link className='WhiteText' to={route} >
          {pageName}
        </Link>
      </div >
    );
  }

  render() {
    return (
      <div className='Capsule1 HeaderCapsule'>
        <this.LogoTag />
        <div className='Capsule2 HeaderButtonsCapsule'>
          {/* <this.PageButton name='Main' /> */}
          <this.PageButton name='Search' />
          <this.PageButton name='Add' />
          <this.PageButton name='Self' />
          <this.PageButton name='About' />
          <this.PageButton name='Exit' />
        </div>
      </div>
    );
  }
}

export default HeaderComponentClass;