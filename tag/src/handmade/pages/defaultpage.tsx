import React from 'react';
import FooterComponentClass from '../components/footer';
import HeaderComponentClass from '../components/header';
import HandmadeRouter from '../routes/router';

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