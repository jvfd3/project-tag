import React from 'react';
import PageTitle from '../components/title';
import TextField from '@mui/material/TextField';

class TagCreationHolder extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      finalAddTagStates: props.globalTagsFromRouter,
      tags: [
        {
          tagKey: 'Parafusos',
          tagVal: '12',
        },
        {
          tagKey: 'Pregos',
          tagVal: '34',
        },
        {
          tagKey: 'Porcas',
          tagVal: '56',
        },
        {
          tagKey: 'Picareta',
          tagVal: '78',
        },
        {
          tagKey: 'Pá',
          tagVal: '91',
        },
        {
          tagKey: 'Pincel',
          tagVal: '23',
        },
      ],
      objectName: '',
      objectValue: '',
    };
    this.onSubmitExt = this.onSubmitExt.bind(this)
  }
  onSubmitExt(event: any) {
    event.preventDefault();
    let localTags = this.state.tags
    let model = {
      tagKey: this.state.objectName,
      tagVal: this.state.objectValue
    }
    localTags.push(model)
    this.setState({ tags: localTags })
    console.log(this.state.tags)
    let strModel = JSON.stringify(model)
    alert('tag Added: ' + strModel)
  }
  render() {
    return (
      <form
        className='Capsule2 AddTagFormContainer'
        onSubmit={this.onSubmitExt}
      >
        < div className='Capsule3 AddTagFormInputsContainer' >
          <>
            Type the tag
            <br />
            <br />
            <div>
              <TextField
                label="key"
                id="outlined-size-small"
                size="small"
                value={this.state.objectName}
                onChange={(e) => { this.setState({ objectName: e.target.value }) }}
              />
              <TextField
                label="value"
                id="outlined-size-small"
                size="small"
                value={this.state.objectValue}
                onChange={(e) => { this.setState({ objectValue: e.target.value }) }}
              />
            </div>
          </>
        </div >
        <div>
          <input type='submit' value='Submit' />
          <input type='reset' value='Reset Button' />
        </div>
      </form >
    )
  }
}
class AddTagPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      addTagParentState: props.globalTagsFromRouter,
    }
  }
  render() {
    return (
      <div className='Capsule1 fillHeight AddTagContainer'>
        <PageTitle title='AddTag' />
        <TagCreationHolder tagUpdater={this.state.addTagParentState} />
      </div>
    );
  }
}

export default AddTagPage;