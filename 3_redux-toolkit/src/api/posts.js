import request from '../api';

export const getPostsAPI = () => request().get('/posts');
// export const getPostAPI = (id) => request().get(`/posts${id}`);
export const addPostAPI = (data) => request().post('/posts', data);
export const editPostAPI = ({ id, data }) => request().patch(`/posts/${id}`, data);
export const deletePostAPI = (id) => request().delete(`/posts/${id}`);
