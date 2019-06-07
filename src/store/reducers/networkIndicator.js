const initialState = false;

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'networkIndicator': {
      return action.response;
    }
    default:
      return state;
  }
}
