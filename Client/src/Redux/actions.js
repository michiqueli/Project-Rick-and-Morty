// import axios from "axios"
// import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type"

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };
 
//  export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };
// export const filterFav = (gender) => {
//     return {
//         type: FILTER_FAV,
//         payload: gender
//     }
// }
// export const orderFav = (order) => {
//     return {
//         type: ORDER_FAV,
//         payload: order
//     }
// }

import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_FAV = "FILTER";
export const ORDER_FAV = "ORDER";

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };
};

export const filterFav = (gender) => {
  const payload = gender === "All genders" ? null : gender;
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};