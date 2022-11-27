import React from 'react';
import UserSignForm from '../components/form'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 MiddleCapsule'>
        <div className='Capsule2'> {/* Title */}
          <h1 className='WhiteText'>
            SignInPage
          </h1>
        </div>
        <UserSignForm />
      </div>
    );
  }
}

export default SignUpPage;