import React from 'react';
import FooterComponentClass from '../components/footer';
import HeaderComponentClass from '../components/header';
// import HeaderComponent from '../components/header';
// Style > className; Inner > Outter

class BasicBoxClass extends React.Component {
  render() {
    return (
      <div className='black_bg' >
        {/* <HeaderComponentClass /> */}
        <HeaderComponentClass />
        <div className=''>
          <h1 className='blue'>
            G
          </h1>
        </div>
        <FooterComponentClass />
      </div>
    );
  }
}

export default BasicBoxClass;