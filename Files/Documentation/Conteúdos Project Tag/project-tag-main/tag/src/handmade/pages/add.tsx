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
    // console.log('AddTag finalStates', this.state)
    // this.handleSubmit = this.handleSubmit.bind(this);
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
      // <div className='Capsule2 '>
      <form
        className='Capsule2 AddTagFormContainer'
        /* onSubmit={this.state.finalAddTagStates.handleSubmitState.bind(this)} */
        onSubmit={this.onSubmitExt}
      >
        {/* <TagElement /> */}
        < div className='Capsule3 AddTagFormInputsContainer' >
          <>
            Type the tag's
            <br />
            <br />
            <div>
              {/* name: */}
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
              {/* <input type='text' value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} /> */}
            </div>
            {/* <div> */}
            {/* value: */}
            {/* <input type='text' value={this.state.objectValue} onChange={(e) => { this.setState({ objectValue: e.target.value }) }} /> */}
            {/* </div> */}
          </>
        </div >
        <div>
          <input type='submit' value='Submit' />
          <input type='reset' value='Reset Button' />
        </div>
        {/* <input type='button' value='Add tag' onClick={this.addNewElement} /> */}
        {/* {' '} */}
        {/* {' '} */}
      </form >

      // </div>
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

export default AddTagPage;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                