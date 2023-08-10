import { REMOVE_FAV, ADD_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type"

const initialState = {
    myFavourites: [],
    allCharacters:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: action.payload,
                allCharacters:action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: action.payload
            }
        case FILTER_FAV:
            if (action.payload==="All"){
                return {
                    ...state, myFavourites:[...state.allCharacters]
                }
            }else{
                const filteredCharacters = state.allCharacters.filter((fav)=> fav.gender === action.payload)
                return{
                    ...state,
                    myFavourites: filteredCharacters
                }
            }

        case ORDER_FAV:
            const orden= [...state.myFavourites]
            orden.sort((a,b)=>{
                if(action.payload==="A"){
                    return a.id - b.id 
                }else{
                    return b.id - a.id
                }
            })
            return{
                ...state,
                myFavourites: orden
            }
        
        default:
            return state
    }
}

export default reducer