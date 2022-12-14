/*
    Este código está sendo desenvolvido como parte da disciplina
    Paradigma Orientado a Objetos para Desenvolvimento de Software,
    ministrada pelo Professor Doutor Ausberto Silverio Castro Vera,
    no bacharelado de Ciência da Computação da
    Universidade Estadual do Norte Fluminense Darcy Ribeiro.
    O aluno responsável se chama João Vítor Fernandes Dias.
    O nome do projeto é "TAG".
      novembro de 2022.
*/

import React from 'react';
import aux from '../Misc/functions'
import TextField from '@mui/material/TextField';

// import { useNavigate } from "react-router-dom";

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
    // this.setState({ isLogged: !this.state.isLogged });
    this.setState({ isLogged: true });
  }
  render() {
    const { username, password/* , rememberMe */ } = this.state;
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
          {/* <input
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
          /> */}
          <br />
          {/* <input
              name={rememberMe.name}
              checked={rememberMe.value}
              onChange={this.onChange_1}
              type='checkbox'
            /> */}
          <input type='submit' value='Submit' />
        </form>
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
          // isThisContext.state.isLogged: true,
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
    // console.log(this.state.logged_outter_state)
    alert(message);


    /*  
    if (this.validateForm(this)) {
      const { newUser, newPswd } = this.state;
      const model = {
        username: newUser,
        password: newPswd,
        // rememberMe: rememberMe.value,
      }
      
          // console.log(typeof model)
          // HelpingFunctions.saveAccount(model);
          let account_already_exists = aux.checkExistance(model);
          // const navigate = useNavigate();
          // navigate('/about')
    
          let message = ''
          if (account_already_exists) {
            message = 'Already Logged'
            if (!this.state.logged_outter_state) {
              message = 'Logged in'
              this.setState({
                // isThisContext.state.isLogged: true,
                logged_outter_state: true,
              })
            }
          } else {
            aux.saveAccount(model);
            message = 'Saved account'
          }
          console.log(this.state.logged_outter_state)
          alert(message);
        }
        */
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