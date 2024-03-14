import React from 'react';
import PageTitle from '../components/title';

class TagTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      outerTags: props.tags,
    }
  }
  getLine(tags: any, line: number) {
    return (
      <tr key={line + 10}>
        <th key={line + 100}>
          {tags[line].tagKey}
        </th>
        <th key={line + 1000}>
          {tags[line].tagVal}
        </th>
      </tr>
    )
  }
  getLines(tags: object) {
    let elements = []
    for (let index = 0; index < Object.keys(tags).length; index++) {
      let element_to_push = this.getLine(tags, index)
      elements.push(element_to_push)
    }
    return (
      <>
        {elements}
      </>
    )
  }
  render() {
    return (
      <table>
        <thead>
          <>
            {this.getLines(this.state.outerTags)}
          </>
        </thead>
      </table>
    )
  }
}

class SearchPage extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      template_DB: [
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
      ]
    }
  }
  render() {
    return (
      <div className='Capsule1 fillHeight SearchContainer'>
        <PageTitle title='SearchPage' />
        <div className='Capsule2'>
          <div className='Capsule3 SearchBar'>
            <form className='Capsule3 SearchBar'/* onSubmit={} */>
              <input type='search' defaultValue='P' className='SearchText' />
              <input type='submit' value='🔎' className='SearchText' />
            </form>
          </div>
          <div className='Capsule3 SearchedTagsBox'>
            <TagTable tags={this.state.template_DB} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;