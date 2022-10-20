import React from 'react';
import HandmadeRouter from './router';
import FooterComponentClass from '../components/footer';
import HeaderComponentClass from '../components/header';

class BasicBoxClass extends React.Component {
  render() {
    return (
      <div className='Capsule0 BasicBox' >
        <HeaderComponentClass />
        <HandmadeRouter />
        <FooterComponentClass />
      </div>
    );
  }
}

export default BasicBoxClass;