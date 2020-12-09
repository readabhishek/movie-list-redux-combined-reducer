import {ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE, SHOW_FAVOURITES_TAB} from "../constants/constants";
import {combineReducers} from "redux";


/*   This is for Movie State   */
const initialMovieState = {
    list: [],
    favourites: [],
    isFavouriteTabSelected: false
}

/* This is for Search State  */
const initialSearchState = {
    results: {}
}

/* Now Root State is the Parent State, it contains both Movie State as well as Search State  */
const initialRootState = {
    initialMovieState: initialMovieState,
    initialSearchState: initialSearchState
}


/* Now we'll define the Individual Reducers, so we'll use functions for each reducers which will return state  */

export function searchReducer (state = initialSearchState, action) {
    console.log("***  Search Reducer  ***");
    return state;
}

/* This is also a function, just a arrow function  */
export const moviesReducer = (state = initialMovieState, action) => {

    console.log("***  Movie Reducer  ***");
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

/* Now defining the root reducer which will be combination of Movie Reducer and Search Reducer */
/* Since we are using the combine reducers as given next, this is just for reference. Not Used  */
export function rootReducer (state = initialRootState, action) {
    return {
        movies: moviesReducer (state.movies, action),   /* Note we pass individual states to each reducers not complete state */
        search: searchReducer(state.search, action)
    }
}

/* Now there is another way of using root Reducer, that's by using OOTB combine Reducer from Redux package */
/* This expects objects where all reducers will be listed  */
export default combineReducers ({
    movies: moviesReducer,
    search: searchReducer
})

