// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import FetchButtonComponent from '../components/FetchButton';

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
      dispatch(actions.fetchReddit());
      dispatch(actions.fetchFlickr());
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    
    ui: state.ui
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButtonComponent);
