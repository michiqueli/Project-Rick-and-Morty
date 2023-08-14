import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_FAV = "FILTER";
export const ORDER_FAV = "ORDER";

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: 'ADD_FAV',
           payload: data,
        });
     });
  };
};

export const removeFav = (id) => {
<<<<<<< HEAD
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
     });
     });
=======
  const endpoint = 'http://localhost:3001/rickandmorty/fav' + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      window.alert('Error removing favorite:', error);
    }
>>>>>>> 0afac1c3fa150778aa93409f4af402410ad22d12
  };
};

export const filterFav = (gender) => {
  const payload = gender === "All genders" ? null : gender;
  return {
    type: FILTER_FAV,
    payload: payload,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};