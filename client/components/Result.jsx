import React from 'react';
import { Component } from 'react';
import FlickrComponent from './Flickr.jsx';
import RedditComponent from './Reddit.jsx';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.props.fetchButtonClickData();
  }

  render() {
    console.log(this.props.reddit);
    const { result, ui, flickr, reddit } = this.props;
    return(
      <div>
        <FlickrComponent flickr={flickr} />
        <RedditComponent reddit={reddit} />
      </div>
    )
  }
};

export default Result;