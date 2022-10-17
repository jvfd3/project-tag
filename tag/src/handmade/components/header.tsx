// header

import React from 'react';

class HeaderComponentClass extends React.Component {
  render() {
    return (
      <div className='HeaderCapsule Capsule1' >
        <h1 className='green'>
          B
        </h1>
      </div>
    );
  }
}

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

class SimpleClass2 extends React.Component {
  render() { return <></> }
}

export default HeaderComponentClass;