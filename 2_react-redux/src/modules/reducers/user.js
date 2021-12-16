import * as USER from '../actions/user';

const initialState = {
  id: '',
  nickname: '',
  isAdmin: false,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN: {
      return {
        ...action.payload,
      };
    }
    case USER.LOGOUT: {
      return {
        nickname: '',
        isAdmin: false,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
