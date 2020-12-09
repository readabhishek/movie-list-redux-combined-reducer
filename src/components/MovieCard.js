import React from 'react';
import '../index.css';
import {addFavourite, removeFavourite} from "../actions";


class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handleUnFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
    }

    render() {
        const {movie, isMovieFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <div>
                            {
                                isMovieFavourite?
                                    <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavorite</button> :
                                    <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favorite</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
