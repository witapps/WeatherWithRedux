const initialState = { isStart: false };

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'getWeatherSuccess': {
      return {
        ...state,
        isStart: true,
        ...action.response
      };
    }
    default:
      return state;
  }
}
