import produce from 'immer';
import * as USER from '../actions/user';

const initialState = {
  status: 'loggedIn', //''(default/로그아웃), loggingIn(로그인중) loggedIn(로그인완료)
  info: {
    id: 1,
    nickname: 'jjanmo',
    isAdmin: true,
  }, // { id, nickname, isAdmin }
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case USER.LOGIN_REQUEST: {
        draft.status = 'loggingIn';
        break;
      }
      case USER.LOGIN_SUCCESS: {
        draft.status = 'loggedIn';
        draft.info = action.userInfo;
        break;
      }
      case USER.LOGIN_FAULURE: {
        return {
          error: action.error,
        };
      }
      case USER.LOGOUT: {
        draft.status = '';
        draft.info = null;
        break;
      }
      default: {
        return prevState;
      }
    }
  });
};

export default userReducer;
