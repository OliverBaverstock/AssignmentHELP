import axios from 'axios';
import auth from './auth';

export const upvote = async (dealId) => {
  axios.post(`/api/deals/${dealId}/upvote`)
  .then(resp => resp.data);
};

export const getAll = async () => {
  const resp = await axios.get('/api/deals', {headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};

export const getDeal = async (dealId) => {
  const resp = await axios.get(`/api/deals/${dealId}`, {headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};

export const add = async (newDishName, newRestName, newPrice, newPhone, newPicture) => {
  const resp = axios.post('/api/deals', { dishName: newDishName, restName: newRestName, price: newPrice, phone: newPhone, picture: newPicture }, {headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};

export const deleteDeal = async (dealId) => {
  const resp = await axios.delete(`/api/deals/${dealId}`, {headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};

export const update = async (dealId, newPrice, newPhone) => {
  const resp = await axios.put(`/api/deals/${dealId}`, { price: newPrice, phone: newPhone }, {headers: {'Authorization': auth.getToken()}},)
  return resp.data;
};

export const login = async (username, password) => {
  const resp = await axios.post('/api/users', { username: username, password: password });
  return resp.data;
};

export const signup = async (username, password) => {
  const resp = await axios.post('/api/users?action=register', { username: username, password: password });
  return resp.data;
};