: props.selectedInput };
  }
  render() {
    /* switch (this.state.out_value) {
      case 'String': componentToShow.push(<div>String</div>); break;
      case 'Integer': componentToShow.push(<div>Integer</div>); break;
      case 'Bool': componentToShow.push(<div>Bool</div>); break;
    } */
    let smallComponent = ''
    switch (this.state.out_value) {
      case 'Integer': smallComponent = 'Integer'; break;
      case 'String': smallComponent = 'String'; break;
      case 'Bool': smallComponent = 'Bool'; break;
    }
    // <input type="text">Type your string tag</input>
    // <input type="number">Type your integer tag</input>
    // <input type="text">Type your string tag</input>
    return <div>{smallComponent}</div>
  }
}

class TagElement extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: 'String' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    return <ResultingElement selectedInput={this.state.value} />
  }
  render() {
    return (
      <div className='Capsule3 WhiteText row' style={{ flexDirection: 'row' }}>
        <select defaultValue={'String'} value={this.state.value} onChange={this.handleChange}>
          <option value='String' selected>String</option>
          <option value='Integer'>Integer</option>
          <option value='Bool'>Bool</option>
        </select>
        <ResultingElement selectedInput={this.state.value} />
      </div>
    )
  }
}
class TagCreationHolder extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedType: 'String',
      objectName: '',
      inputList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: any) {
    const model = {
      form_a: 'tempValueA',
      form_b: 'tempValueB',
      // rememberMe: rememberMe.value,
    }
    event.preventDefault();
    alert('Submitted');
    console.log(model)
  }
  onSelectChange() {
    return <></>
  }
  addNewElement() {
    let smallComponent = ''
    switch (this.state.out_value) {
      case 'Integer': smallComponent = 'Integer'; break;
      case 'String': smallComponent = 'String'; break;
      case 'Bool': smallComponent = 'Bool'; break;
    }
    return <div>{smallComponent}</div>
  }
  Input(props: any) {
    return <input type={props.outType} />;
  };
  render() {
    return (
      <div className='Capsule2'>
        <form onSubmit={this.handleSubmit}>
          {/* <TagElement /> */}
          <div className='Capsule3 WhiteText row' style={{ flexDirection: 'row' }}>
            <>
              Type the object name:
              <input type='text' value={this.state.objectName} onChange={(e) => { this.setState({ objectName: e.target.value }) }} />
              <br />
              <select defaultValue={'String'} value={this.state.selectedType} onChange={(e) => { this.setState({ selectedType: e.target.value }); console.log(this.state.selectedType) }}>
                <option value='String'>String</option>
                <option value='Integer'>Integer</option>
                <option value='Bool'>Bool</option>
              </select>
              <ResultingElement selectedInput={this.state.value} />
              {() => {
                let smallComponent = ''
                switch (this.state.out_value) {
                  case 'Integer': smallComponent = 'Integer'; break;
                  case 'String': smallComponent = 'String'; break;
                  case 'Bool': smallComponent = 'Bool'; break;
                }
                return <div>{smallComponent}</div>
              }
              }
            </>
          </div>
          <input type='button' value='Add tag' onClick={this.addNewElement} />
          {' '}
          <input type='submit' value='Submit' />
          {' '}
          <input type='reset' value='Reset Button' />
        </form>

      </div>
    )
  }
}
class AddTagPage extends React.Component {
  render() {
    return (
      <div className='Capsule1 fillHeight'>
        <PageTitle title='AddTag' />
        <TagCreationHolder />
      </div>
    );
  }
}

export default AddTagPage;                                                                                                                                                                                                                                                                                                                                                                       �����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������