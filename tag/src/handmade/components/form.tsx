import React from 'react';
import { validateForm, onChange2 } from '../Misc/utils';

class UserSignForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: { name: 'email', value: '', error: '', required: true },
      password: { name: 'password', value: '', error: '', required: true },
      rememberMe: { name: 'rememberMe', value: false, error: '', required: false },
    };
  }
  render() {
    const { email, password, rememberMe } = this.state;
    return (
      <div className='Capsule2'>
        <div className='Capsule3'>
          <div className='WhiteText'>
            {/* {this.state.name} */}
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              placeholder='email'
              name={email.name}
              value={email.value}
              onChange={this.onChange}
            />
            <br />
            <input
              type='password'
              placeholder='password'
              name={password.name}
              value={password.value}
              onChange={this.onChange}
            />
            <br />
            <input
              name={rememberMe.name}
              checked={rememberMe.value}
              onChange={this.onChange}
              type='checkbox'
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='Capsule3 WhiteText'>
          Exibição dos que foi enviado:
          <br />
          username ########## {email.value}
          <br />
          password ########## {password.value}
          <br />
          value ########## {rememberMe.value}
          <br />

        </div>
      </div>
    );
  }
  onChange = (e: any) => {
    const name = e.target.name;
    // let value = e.target.value;
    let newValue = (name === this.state.rememberMe.name) ? e.target.checked : e.target.value;
    onChange2(this, name, newValue);
  }

  onSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm(this)) {
      const { email, password, rememberMe } = this.state;
      const model = {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value,
      }

      console.log(model)
    }
  }
}

export default UserSignForm;