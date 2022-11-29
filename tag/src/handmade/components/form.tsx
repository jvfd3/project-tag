import React from 'react';
import aux from '../Misc/functions'
import { useNavigate } from "react-router-dom";
// import fs from 'fs';
// import { saveAccount } from '../Misc/functions'
/* To Do:
1.
  make the inputs a component that just receives the
    states
    <myInput thing_to_receive=state_name />
 
    result:
    <input
      placeholder={state_name.placeholder}
      value={state_name.value}
      onChange={this.onChange}
      type={state_name.type}
      name={state_name.name}
    />
2.
  Implement remember-me
*/

class UserSignForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: { name: 'username', value: '', error: '', required: true },
      password: { name: 'password', value: '', error: '', required: true },
      rememberMe: { name: 'rememberMe', value: false, error: '', required: false },
      actual_values: {
        username: 'initial user',
        password: 'initial password',
      },
    };
  }
  render() {
    const { username, password, rememberMe } = this.state;
    return (
      <div className='Capsule2'>
        <div className='Capsule3'>
          <div className='WhiteText'>
            {/* {this.state.name} */}
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              placeholder='username'
              name={username.name}
              value={username.value}
              onChange={this.onChange_1}
            />
            <br />
            <input
              type='password'
              placeholder='password'
              name={password.name}
              value={password.value}
              onChange={this.onChange_1}
            />
            <br />
            <input
              name={rememberMe.name}
              checked={rememberMe.value}
              onChange={this.onChange_1}
              type='checkbox'
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    );
  }
  onChange_1 = (e: any) => {
    const name = e.target.name;
    // let value = e.target.value;
    let newValue = (name === this.state.rememberMe.name) ? e.target.checked : e.target.value;
    this.onChange_2(this, name, newValue);
  }

  onSubmit = (e: any) => {
    e.preventDefault();

    if (this.validateForm(this)) {
      const { username, password, rememberMe, actual_values } = this.state;
      const model = {
        username: username.value,
        password: password.value,
        // rememberMe: rememberMe.value,
      }

      // console.log(typeof model)
      // HelpingFunctions.saveAccount(model);
      let account_already_exists = aux.checkExistance(model);
      let message = ''
      if (account_already_exists) {
        message = 'Logged in'
        const navigate = useNavigate();
        navigate('/about')
      } else {
        aux.saveAccount(model);
        message = 'Saved account'
      }
      alert(message);
    }
  }

  onChange_2(context: any, name: string, newValue: any, callback?: any) {
    context.setState({ [name]: { ...context.state[name], value: newValue } }, callback && callback);
  }
  setError(context: any, name: string, error: string, callback?: any) {
    context.setState({ [name]: { ...context.state[name], error: error } }, callback && callback);
  }
  validateForm(context: any) {
    const st = JSON.parse(JSON.stringify(context.state));
    // console.log(st)
    let status = true;
    for (let key in st) {
      if (st.hasOwnProperty(key)) {
        const isRequired = st[key] ? st[key].required : false;
        if (isRequired) {
          const name = st[key].name;
          const value = st[key].value;
          const type = typeof value;
          // you can further refined the check used below
          if ((value === null || value === undefined || value.length === 0) && type !== 'number') {
            status = false;
            this.setError(context, name, 'error found');
          } else {
            this.setError(context, name, '');
          }
        }
      }
    }
    return status;

  }
}

export default UserSignForm;