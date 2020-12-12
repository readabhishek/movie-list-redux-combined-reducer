
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES_TAB, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST} from "../constants/constants";



/* action creators */


export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie,
    };
}


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

/* Note: Very Important: Here we not returning
*
* */
export function handleMovieSearch(searchText) {
    return function (dispatch) {
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
        fetch(url)
            .then((response) => response.json())
            .then((movie) => {
                console.log('Search Result', movie);
                // dispatch action to save search results in store
                dispatch(addMovieSearchResult(movie));
            });
    };
}



export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        payload: movie,
    };
}



