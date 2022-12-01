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

class PageTitle extends React.Component<any, any> {
    // constructor(props) {
    //   super(props);
    // }
    render() {
        return (
            <h1 className='Capsule2 WhiteText'>
                {this.props.title}
            </h1>
        );
    }
}

export default PageTitle;