import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_SAVED_LINKS,
  REGISTER_USER
} from "../constants/action-types";

const initialState = {
  user: {},
  savedLinks: [],
  bookmarks: {},
  newLinkModalVisible: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case REGISTER_USER:
        return Object.assign({}, state, {user: action.payload})
      case LOGIN_USER:
        return Object.assign({}, state, {user: action.payload});
      case LOGOUT_USER:
        return Object.assign({}, state, {user: {}})
      case GET_SAVED_LINKS:
        return Object.assign({}, state, {savedLinks: action.payload})
  }
  return state;
};

export default rootReducer;
