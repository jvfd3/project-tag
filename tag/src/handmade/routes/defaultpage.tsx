import React from 'react';
import HandmadeRouter from './router';
import FooterComponentClass from '../components/footer';
import HeaderComponentClass from '../components/header';
import SignInPage from '../pages/signIn';
import SignUpPage from '../pages/signUp';

import {
  Routes,
  Route,
} from "react-router-dom";
class BasicBoxClass extends React.Component {
  render() {
    return (
      <>
        <div className='Capsule0 BasicBox' >
          <HeaderComponentClass />
          <HandmadeRouter />
          <FooterComponentClass />
        </div>
        {/* <div className='Capsule0 BasicBox' > */}
        <Routes>
          <Route path='/SignIn' element={<SignInPage />} />
          <Route path='/SignUp' element={<SignUpPage />} />
        </Routes>
        {/* </div> */}

      </>
    );
  }
}

export default BasicBoxClass;