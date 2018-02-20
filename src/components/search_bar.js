import React, {Component} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => {
          this.setState({term: event.target.value});
        }}/>
        {this.state.term}
      </div>
    );
  }
}
