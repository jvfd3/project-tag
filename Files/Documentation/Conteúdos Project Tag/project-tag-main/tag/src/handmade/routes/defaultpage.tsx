        tagValue: 'p',
        },
        handleSubmitState: this.addTagHandleSubmit,
        changeTagKeyState: this.changeTagKey,
        changeTagValueState: this.changeTagValue,
      }
    }
  }
  changeTagKey(event: any) {
    let newTagKey = event.target.value
    // let internalStates = this.state.addTagStates
    // console.log(internalStates)
    console.log(this.state)
    console.log(newTagKey)
    // console.log(newTagKey)
    this.setState({ addTagStates: { newTag: { tagKey: newTagKey } } })
  }
  changeTagValue(event: any) {
    let newTagValue = event.target.value
    console.log(this.state)
    console.log(newTagValue)
    // this.setState({ addTagStates: { newTag: { tagValue: newTagValue } } })
  }
  addTagHandleSubmit(event: any) {
    alert('defaultPage>addTagHandleSubmit>pre')
    event.preventDefault();
    // console.log(this.state)
    let internalStates = this.state.addTagStates
    // console.log(internalStates)
    let newTagList = internalStates.tags
    // console.log('defPage: newTagsOld: ', newTagList)
    let tagToAdd = internalStates.newTag
    newTagList.push(tagToAdd);
    console.log('defPage: newTagsOld: ', newTagList)
    alert('defaultPage>addTagHandleSubmit>post')

  }
  /* setAccountsFunc(accountToAdd: object) {
    alert('defaultPage')
    let newAccounts = this.state.tags.push(accountToAdd);
    this.setState({ accounts: newAccounts })
    console.log('defaultpage: new account added')
    console.log('defaultpage: new accounts:', newAccounts, 'state:', this.state.accounts)
  } */
  render() {
    return (
      <>
        <div className='Capsule0 BasicBox' >
          <HeaderComponentClass />
          {/* <form onSubmit={this.state.addTagStates.handleSubmitState.bind(this)}>
            <input
              value={this.state.addTagStates.newTag.tagKey}
              onChange={this.state.addTagStates.changeTagKeyState.bind(this)}
              type='text' style={{ width: 20 }} />
            <input
              value={this.state.addTagStates.newTag.tagValue}
              onChange={this.state.addTagStates.changeTagValueState.bind(this)}
              type='text' style={{ width: 20 }} />
            <input type='submit' value='DefPage' />
          </form> */}

          <HandmadeRouter globalTagsFromDefaultPage={this.state} />
          {/* <HandmadeRouter globalTagsFromDefaultPage={this.state.addTag} /> */}
          <FooterComponentClass />
        </div>
      </>
    );
  }
}

export default TagWholePage;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                