import request from '../api';

export const signupAPI = (data) => request().post('/signup', data);
export const loginAPI = (data) => request().post('/login', data);
