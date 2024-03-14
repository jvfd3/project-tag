import React from 'react';
import aux from '../Misc/functions'
import TextField from '@mui/material/TextField';

class UserSignForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // console.log(props.isThisContext.state.isLogged)
    this.state = {
      logged_outter_state: props.isThisContext.state.isLogged,
      newUser: '',
      newPswd: '',
      usersList: [
        {
          username: 'ausberto',
          password: 'ausberto',
        },
        {
          username: 'joao',
          password: 'joao',
        },
        {
          username: 'tang',
          password: 'tang',
        },
        {
          username: 'rivera',
          password: 'rivera',
        },
        {
          username: 'annabell',
          password: 'annabell',
        },
      ],
      username: { name: 'username', value: '', error: '', required: true },
      password: { name: 'password', value: '', error: '', required: true },
      rememberMe: { name: 'rememberMe', value: false, error: '', required: false },
      actual_values: {
        username: 'initial user',
        password: 'initial password',
      },
    };
    this.reSetStateIn = this.reSetStateIn.bind(this);
  }

  reSetStateIn() {
    this.setState({ isLogged: true });
  }
  render() {
    return (
      <div className='Capsule2 SignFormContainer'>
        <form className='SignForm' onSubmit={this.onSubmit}>

          <TextField
            label="username"
            className='SignInput'
            id="outlined-size-small_USER"
            autoComplete="username"
            size="small"
            value={this.state.newUser}
            onChange={(e) => { this.setState({ newUser: e.target.value }) }}
          />
          <br />
          <TextField

            label="password"
            className='SignInput'
            id="outlined-size-small_PSWD"
            size="small"

            type="password"
            autoComplete="current-password"
            value={this.state.newPswd}
            onChange={(e) => { this.setState({ newPswd: e.target.value }) }}
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
  onChange_1 = (e: any) => {
    const name = e.target.name;
    let newValue = (name === this.state.rememberMe.name) ? e.target.checked : e.target.value;
    this.onChange_2(this, name, newValue);
  }

  onSubmit = (e: any) => {
    e.preventDefault();

    let model = {
      username: this.state.newUser,
      password: this.state.newPswd,
    }
    let account_already_exists = aux.checkExistance(model);

    let message = ''
    if (account_already_exists) {
      message = 'Already Logged'
      if (!this.state.logged_outter_state) {
        message = 'You logged in at the account "' + model.username + '".'
        this.setState({
          logged_outter_state: true,
        })
      }
    } else {

      let localUsers = this.state.usersList
      localUsers.push(model)
      this.setState({ usersList: localUsers })
      aux.saveAccount(model);
      message = 'user "' + model.username + '" was added.'
    }
    alert(message);
  }

  onChange_2(context: any, name: string, newValue: any, callback?: any) {
    context.setState({ [name]: { ...context.state[name], value: newValue } }, callback && callback);
  }
  setError(context: any, name: string, error: string, callback?: any) {
    context.setState({ [name]: { ...context.state[name], error: error } }, callback && callback);
  }
  validateForm(context: any) {
    const st = JSON.parse(JSON.stringify(context.state));
    let status = true;
    for (let key in st) {
      if (st.hasOwnProperty(key)) {
        const isRequired = st[key] ? st[key].required : false;
        if (isRequired) {
          const name = st[key].name;
          const value = st[key].value;
          const type = typeof value;
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