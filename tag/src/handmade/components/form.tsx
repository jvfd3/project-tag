import React from 'react';

class UserSignForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { name: 'começo' };
    // this.userdata = { username: 'começo', };
  }
  changeHandler(event: any) {
    this.setState({
      email: event.target.value
    });
  }
  render() {
    return (
      <div className='Capsule2'>
        <div className='WhiteText'>
          {/* {this.state.name} */}
        </div>
        <form>
          <input type='text' name='name' placeholder='username' />
          <br />
          <input type='password' name='psw' placeholder='password' />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default UserSignForm;