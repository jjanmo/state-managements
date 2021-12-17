import * as USER from '../actions/user';

const initialState = {
  status: '', //''(default/로그아웃), loggingIn(로그인중) loggedIn(로그인완료)
  info: null, // { id, nickname, isAdmin }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN_REQUEST: {
      return {
        ...state,
        status: 'loggingIn',
      };
    }
    case USER.LOGIN_SUCCESS: {
      return {
        status: 'loggedIn',
        info: action.payload,
      };
    }
    case USER.LOGIN_FAULURE: {
      return {
        error: action.error,
      };
    }
    case USER.LOGOUT: {
      return {
        status: '',
        info: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
