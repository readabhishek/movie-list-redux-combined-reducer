
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES_TAB} from "../constants/constants";
import {data} from '../data/data.js'


/* action creators */



export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        payload: movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        payload: movie
    }
}

export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        payload: movie
    }
}

export function showFavouritesTab(value) {
    return {
        type: SHOW_FAVOURITES_TAB,
        payload: value
    }
}

