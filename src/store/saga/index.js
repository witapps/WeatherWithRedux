import { takeLatest } from 'redux-saga/effects';

import { getWeather } from './weather';

function* dataSaga() {
  yield takeLatest('getWeather', getWeather);
}

export default dataSaga;
