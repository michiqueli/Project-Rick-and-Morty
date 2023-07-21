import { REMOVE_FAV, ADD_FAV } from "./actions-type"
const initialState = {
    myFavourites: []
}
function rootReducer (state = initialState, action){
    switch (action.type){
        case REMOVE_FAV:
            return{
                ...state,
                myFavourites: state.myFavourites.filter(char => char.id !== action.payload)
            }
        case ADD_FAV:
            return{
                ...state,
                myFavourites: [...state.myFavourites, action.payload]
            }
        default:
            return state       
    }
}
export default rootReducer