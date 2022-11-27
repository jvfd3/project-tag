import React from 'react';
import HandmadeRouter from './router';
import HeaderComponentClass from '../components/header';
import FooterComponentClass from '../components/footer';

class BasicBoxClass extends React.Component {
  render() {
    return (
      <>
        <div className='Capsule0 BasicBox' >
          <HeaderComponentClass />
          <HandmadeRouter />
          <FooterComponentClass />
        </div>
      </>
    );
  }
}

export default BasicBoxClass;