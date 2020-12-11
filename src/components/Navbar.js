import React, { Component } from 'react';
import { addMovieToList, handleMovieSearch } from '../actions';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            showSearchResults: false
        };
    }
    handleAddToMovies = (movie) => {
        this.props.store.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        });
    };

    handleSearchClick = () => {
        const { searchText } = this.state;
        this.props.store.dispatch(handleMovieSearch(searchText));
        this.setState({
            showSearchResults: true
        });
        console.log("After Search Store: ", this.props.store.getState());
    };

    handleSearchChange = (e) => {
        this.setState({
            searchText: e.target.value,
        });
    };

    render() {
        const {showSearchResults} = this.state;
        const{ results } = this.props.store.getState().search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleSearchChange} />
                    <button id="search-btn" onClick={this.handleSearchClick}>
                        Search
                    </button>

                    {showSearchResults && (
                        <div className="search-results">
                            <div className="search-result">
                                <img src={results.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{results.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(results)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

export default Navbar;