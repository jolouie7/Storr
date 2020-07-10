import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actions/UserActions.js"

const intialState = {
  picture: "",
  name: "",
  email: "",
  loading: false,
  error: null
}

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        picture: action.payload.user.picture || action.payload.picture,
        name: action.payload.user.name || action.payload.name,
        email: action.payload.user.email || action.payload.email
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        picture: "",
        name: "",
        emails: ""
      };
  
    default:
      return state;
  }
}

export default userReducer;