import axios from 'axios';

export const upvote = dealId => {
  return axios.post(`/api/deals/${dealId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/deals')
              .then(resp => resp.data);
};

export const getDeal = dealId => {
  return axios.get(`/api/deals/${dealId}`)
              .then(resp => resp.data);
};

export const add = (newDishName, newRestName, newPrice, newPhone, newPicture) => {
  return axios.post('/api/deals', { dishName: newDishName, restName: newRestName, price: newPrice, phone: newPhone, picture: newPicture })
              .then(resp => resp.data);
};

export const deleteDeal = (dealId) => {
  return axios.delete(`/api/deals/${dealId}`)
              .then(resp => resp.data);
};

export const update = (dealId, newPrice, newPhone) => {
  return axios.put(`/api/deals/${dealId}`, { price: newPrice, phone: newPhone })
              .then(resp => resp.data);
};