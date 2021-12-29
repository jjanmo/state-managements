import { signupAPI, loginAPI } from '../../api/auth';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_FULFILLED = 'SIGNUP_FULFILLED';
export const SIGNUP_REJECTED = 'SIGNUP_REJECTED';
export const LOGOUT = 'LOGOUT';
export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const loginPending = () => ({
  type: LOGIN_PENDING,
});
export const loginFulfilled = (data) => ({
  type: LOGIN_FULFILLED,
  payload: data,
});
export const loginRejected = (error) => ({
  type: LOGIN_PENDING,
  payload: error,
});
export const signupPending = () => ({
  type: SIGNUP_PENDING,
});
export const signupFulfilled = (data) => ({
  type: SIGNUP_FULFILLED,
  payload: data,
});
export const signupRejected = (error) => ({
  type: SIGNUP_REJECTED,
  payload: error,
});
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const login = (data) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const response = await loginAPI(data);
    if (response.status === 200) {
      const { accessToken, user } = response.data;
      dispatch(loginFulfilled(user));
      setToken(accessToken);
    }
  } catch (e) {
    dispatch(loginRejected(e));
  }
};

export const signup = (data) => async (dispatch) => {
  dispatch(signupPending());
  try {
    const response = await signupAPI(data);
    if (response.status === 201) {
      dispatch(setMessage(response.statusText));
    }
  } catch (e) {
    dispatch(signupRejected(e));
  }
};

export const logout = () => (dispatch) => {
  removeToken();
  dispatch({ type: LOGOUT });
};

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
