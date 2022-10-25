// header

import React from 'react';
import {
  Link,
  BrowserRouter as Router, useNavigate
} from 'react-router-dom';

const PageButton = (props: any) => { // passar isso pra dentro da classe da forma certa
  let route = props.name === 'Main' ? '' : props.name
  return (
    <div className='Capsule3 HeaderButton'>
      <Link to={route}>
        {props.name}
      </Link>
    </div >
  );
}

const LogoTag = () => { // passar isso pra dentro da classe da forma certa
  return (
    <div className='Capsule2 HeaderLogo'>
      <img className='Capsule3 HeaderLogoImage' src='tag.png' alt='Tag logo' />
      <p className='Capsule3 HeaderLogoText'>
        TAG
      </p>
    </div>
  );
}

class HeaderComponentClass extends React.Component {
  constructor(props: any) {
    super(props);
    this.PageButton = this.PageButton.bind(this);
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
        <Link to={route}>
          {pageName}
        </Link>
      </div >
    );
  }

  render() {
    return (
      <div className='Capsule1 HeaderCapsule'>
        <LogoTag />
        <div className='Capsule2 HeaderButtonsCapsule'>
          <PageButton name='Main' />
          <PageButton name='Search' />
          <PageButton name='Add' />
          <PageButton name='Self' />
          <PageButton name='About' />
          <PageButton name='Exit' />
        </div>
      </div>
    );
  }
}

export default HeaderComponentClass;