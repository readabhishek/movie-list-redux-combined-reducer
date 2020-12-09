import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import './index.css';
import App from './components/App';
import {addMovies} from './actions';
import movies from "./reducers";

const store = createStore(movies);
console.log("Before State ", store.getState());

/*store.dispatch(addMovies);
console.log("After State ", store.getState());*/

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


