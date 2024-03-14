import React from 'react';
import PageTitle from '../components/title';

class SelfImage extends React.Component {
  render() {
    return (
      <div className='Capsule3 outerSelfImageBorder round center_internal_items'>
        <img className='Capsule4 self_profile_pic round center_internal_items' src='images/template_user_picture.png' alt='profile' />
      </div>
    )
  }
}
class SelfUserContent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: 'Joao Vitor',
      password: '**********',
      email: 'joaovitorfd2000@gmail.com',
      tagsCreated: 7,
      creationDate: '01/12/2022'
    }
  }
  render() {
    function get_items(elements: any) {
      let list_of_user_data = []
      let size = Object.keys(elements).length
      let keys = Object.keys(elements)
      let values = Object.values(elements)
      for (let index = 0; index < size; index++) {
        let list_key = keys[index]
        let list_value = values[index]
        list_of_user_data.push(
          <tr className='self_row' key={index + 10}>
            <th className='self_column' key={index + 100}> <>{list_key}</> </th>
            <th className='self_column' key={index + 1000}> <>{list_value}</> </th>
          </tr>
        )
      }
      return (
        <table>
          <thead>
            {list_of_user_data}

          </thead>
        </table>
      );
    }
    return (
      <div className='center WhiteText'>
        {get_items(this.state)}
      </div>
    )
  }
}

class SelfPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 fillHeight SelfPageContainer'>
        <PageTitle title='SelfPage' />
        <div className='Capsule2 SelfPageContents' >
          <SelfImage />
          <SelfUserContent />
        </div>
      </div>
    );
  }
}

export default SelfPage;