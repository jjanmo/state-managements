export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAULURE = 'LOGIN_FAULURE';
export const LOGOUT = 'LOGOUT';

export const loginAsync = (data) => {
  return (dispatch, getstate) => {
    dispatch(loginRequest(data));
    try {
      // fake async
      // → DB에 가서 nickname/password를 확인한 후 해당 유저의 데이터를 가지고 응답하는 과정을 표현
      setTimeout(() => {
        dispatch(
          loginSuccess({
            id: 1,
            nickname: 'jjanmo',
            isAdmin: true,
          })
        );
      }, 1500);
    } catch (e) {
      dispatch(loginFailure(e));
    }
  };
};

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});
export const loginSuccess = (userInfo) => ({
  type: LOGIN_SUCCESS,
  userInfo,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAULURE,
  error,
});
export const logout = () => ({ type: LOGOUT });
