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
type Prop1 = {
    quotes: string[]
}

type Prop2 = {
    currentIndex: number,
}

class TestClass1 extends React.Component<Prop1, Prop2> {
    render() {
        return (

            <div className='WhiteText'>
                <header className="App-header">
                    <h3>
                        Render Component with State and Props using TypeScript
                    </h3>
                </header>
            </div>
        );
    }
}



export default TestClass1;