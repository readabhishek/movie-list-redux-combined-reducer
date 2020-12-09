import React from 'react';
import '../index.css';
import {data} from '../data/data.js'
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {ADD_MOVIES} from "../constants/constants.js";
import {addMovies, showFavouritesTab} from "../actions";

class App extends React.Component {

    componentDidMount() {
        // Make an API call to load the movies
        // Dispatch action

        //this.sleep(2000);  /* Just for testing  */

        const {store} = this.props;
        store.subscribe(() => {               /* Subscribe is used so that if store/state changes, the following handler will be called, which re-renders the UI  */
            console.log("State Updated ");
            this.forceUpdate();
        });

        /* Simply add all movies into the state for first time  */
        store.dispatch(addMovies(data));   /* dispatch accepts action object, so can use hard-coded values too  */

    }


    /* This function simply checks if the movie (in the args) is in favourite list of the state or not */
    isMovieFavourite = (movie) => {
        const {favourites} = this.props.store.getState();
        const index = favourites.indexOf(movie);
        if (index !== -1) {
            return true;
        }
        return false;
    }


    /* This function does two things. 1) Updates the selected tab into the state  2) Updates the CSS class to highlight the active tab   */

    ChangeTab = (value) => {
        const {isFavouriteTabSelected} = this.props.store.getState();
        this.props.store.dispatch(showFavouritesTab(value));
        if (isFavouriteTabSelected) {
            document.getElementById("Movies-Tab").classList.add("active-tabs");
            document.getElementById("Favourites-Tab").classList.remove("active-tabs");

        } else {
            document.getElementById("Movies-Tab").classList.remove("active-tabs");
            document.getElementById("Favourites-Tab").classList.add("active-tabs");
        }
    }

    render() {
        const {list, favourites, isFavouriteTabSelected} = this.props.store.getState();  /*  STATE = { list: [] and favourites [] } */
        const displayMovies = isFavouriteTabSelected? favourites: list;  /* If isFavouriteTabSelected = true, show favourites list else list */

        if (data === undefined) {
            return (
                <div>"Loading..."</div>
            );
        } else {
            return (
                <div className="App">
                    <Navbar/>
                    <div className="main">
                        <div className="tabs">
                            <div className="tab active-tabs" id="Movies-Tab" onClick={() => {this.ChangeTab(false)}}>Movies</div>
                            <div className="tab" id="Favourites-Tab" onClick={() => {this.ChangeTab(true)}}>Favourites</div>
                        </div>
                        <div className="list">
                            {
                                displayMovies.map((value, index) => {
                                    return (<MovieCard
                                            movie={value}
                                            key={value.imdbID}
                                            dispatch={this.props.store.dispatch}
                                            isMovieFavourite = {this.isMovieFavourite(value)}
                                           />)
                                })
                            }
                        </div>
                        {
                            displayMovies.length ===0 ? <div className="no-movies">No Movies to Display !!</div> : null
                        }
                    </div>
                </div>
            );
        }
    }

}

export default App;
