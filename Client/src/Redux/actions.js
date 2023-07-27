import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type"
export const addFav = (personajes) => {
    return {
        type: ADD_FAV,
        payload : personajes
    }
}
export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
export const filterFav = (gender) => {
    return {
        type: FILTER_FAV,
        payload: gender
    }
}
export const orderFav = (order) => {
    return {
        type: ORDER_FAV,
        payload: order
    }
}