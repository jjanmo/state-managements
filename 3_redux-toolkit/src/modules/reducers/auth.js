import produce from 'immer';
import * as AUTH from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};
/*
user : {
  id,
  email,
  nickname,
  type
}
*/

const authReducer = (prevState = initialState, action) => {
  const { type, payload, error } = action;

  return produce(prevState, (draft) => {
    switch (type) {
      case AUTH.LOGIN_FULFILLED: {
        draft.isLoggedIn = true;
        draft.user = payload;
        break;
      }
      case AUTH.LOGIN_PENDING:
      case AUTH.SIGNUP_PENDING:
      case AUTH.SIGNUP_FULFILLED: {
        draft.isLoggedIn = false;
        break;
      }
      case AUTH.LOGIN_REJECTED:
      case AUTH.LOGIN_REJECTED: {
        draft.error = error;
      }
      case AUTH.LOGOUT: {
        draft.isLoggedIn = false;
        draft.user = null;
        error.null;
        break;
      }
      default: {
        return prevState;
      }
    }
  });
};

export default authReducer;