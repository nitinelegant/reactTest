import * as Constants from "./constants";
function rootReducer(state = {}, action) {
  if (action.type === Constants.USER_INFO) {
    let temp = {
      ...state[action.key],
      ...action.state,
    };
    return {
      ...state,
      [action.key]: temp,
    };
  } else {
    let temp = {
      ...state,
      [action.key]: action.state,
    };
    return temp;
  }
}

export default rootReducer;
