import { combineReducers } from 'redux';

import networkIndicator from './networkIndicator';
import weather from './weather';

export default combineReducers({
  networkIndicator,
  weather
});
