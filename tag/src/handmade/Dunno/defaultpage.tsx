import React from 'react';
import FooterComponentClass from '../components/footer';
import HeaderComponentClass from '../components/header';
// import HeaderComponent from '../components/header';
// Style > className; Inner > Outter

class BasicBoxClass extends React.Component {
  render() {
    return (
      <div className='BasicBox Capsule0' >
        {/* <HeaderComponentClass /> */}
        <HeaderComponentClass />
        <div className='MiddleCapsule Capsule1'>
          <h1 className='blue WhiteText'>
            G
          </h1>
        </div>
        <FooterComponentClass />
      </div>
    );
  }
}

export default BasicBoxClass;