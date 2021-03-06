import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { push } from 'react-router-redux';
import ResultComponent from '../components/Result.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    pingGlobe: (html, globe, latitude, longitude, width, height, color) => {
      dispatch(actions.pingGlobe(html, globe, latitude, longitude, width, height, color));
    }
    // fetchButtonClickData: () => {
    //   dispatch(actions.fetchButtonClickData());
    // }
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
    ui: state.ui,
    flickr: state.flickr,
    reddit: state.reddit,
    nytimes: state.nytimes,
    youtube: state.youtube,
    eventRegistry: state.eventRegistry,
    yelp: state.yelp,
    usGeoSurvey: state.usGeoSurvey
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
