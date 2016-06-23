import React from 'react';
import { Component } from 'react';

export default class FetchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button">
        <button onTouchTap={function(){this.props.fetchFlickr(); this.props.fetchReddit();}.bind(this) }>"The World in a minute"</button>
      </div>
    );
  }
}

