// header

import React from 'react';

class HeaderComponentClass extends React.Component {
  render() {
    return (
      <div className='Capsule1 HeaderCapsule'>
        <div className='Capsule2 HeaderLogo'>
          <img className='Capsule3 HeaderLogoImage' src='tag.png' alt='Tag logo' />
          <p className='Capsule3 HeaderLogoText'>
            TAG
          </p>
        </div>
        <div className='Capsule2 HeaderButtonsCapsule'>
          <div className='Capsule3 HeaderButton'>
            Main
          </div>
          <div className='Capsule3 HeaderButton'>
            Add
          </div>
          <div className='Capsule3 HeaderButton'>
            Search
          </div>
          <div className='Capsule3 HeaderButton'>
            Self
          </div>
          <div className='Capsule3 HeaderButton'>
            Exit
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponentClass;