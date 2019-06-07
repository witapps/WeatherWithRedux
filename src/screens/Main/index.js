import { connect } from 'react-redux';
import component from './component';

import { getWeather } from 'store/actions';

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather: item => dispatch(getWeather(item))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
