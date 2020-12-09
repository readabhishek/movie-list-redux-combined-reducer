
import {ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE, SHOW_FAVOURITES_TAB} from "../constants/constants";

const initialMovieState = {
    list: [],
    favourites: [],
    isFavouriteTabSelected: false
}

const movies = (state= initialMovieState, action) => {


    /* if (action.type === ADD_MOVIES) {
        const data = {...state, list: action.payload}; /!* This means data = spread properties of state and replace list with action.payload   *!/
        return data;
    }
    return state;*/

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state, list: action.payload
            }

        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            }

        case REMOVE_FAVOURITE:
            const index = state.favourites.indexOf(action.payload);
            state.favourites.splice(index, 1);   /* Note: here the state variable itself is updated, state is passed as param */
            return {
                ...state
            }

        case SHOW_FAVOURITES_TAB:
            return {
                ...state,
                isFavouriteTabSelected: action.payload
            }


        default:
            return state;
    }

}

export default movies;