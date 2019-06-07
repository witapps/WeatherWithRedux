import { call, put } from 'redux-saga/effects';
import { get } from 'store/api';

const APIKEY = '4a927e4267f77ed6659fc38450a6a99c';

export function* getWeather(action) {
  try {
    yield put({ type: 'networkIndicator', response: true });
    const { latitude, longitude } = action.data;
    const response = yield call(
      get,
      `/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${APIKEY}`
    );
    yield put({
      type: 'getWeatherSuccess',
      response: response.data
    });
    yield put({ type: 'networkIndicator', response: false });
  } catch (e) {
    yield put({ type: 'networkIndicator', response: false });
    console.log(e);
  }
}
