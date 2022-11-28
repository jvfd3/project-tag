import React from 'react';
import UserSignForm from '../components/form';

class SignInPage extends React.Component {
  // constructor(props: any) {
  //   super(props);
  //   // this.username = { value: '' };
  //   this.state = { value: '' };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // handleChange(/* event */) {
  //   // this.setState({ value: event.target.value });
  // }
  // const[user, setUser] = useState('');
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

export default SignInPage;