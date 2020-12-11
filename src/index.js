import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import combineReducers from "./reducers";



/* Curried form of logger function
   Call will happen like this.  logger(obj).(next).(action)
   Note: the function accepts an object parameter (which consists of dispatch and getState. This function reference is used as param in createStore()
*/
/*const logger = function ({dispatch, getState}) {
    return function (next) {
        return function (action) {
            // Middleware code
            console.log("Action Type: ", action.type);
            next(action);
        }
    }
}*/

/* Re-writing the logger middleware function using short-hand arrow function */
const logger = ({dispatch, getState}) => (next) => (action) => {
    console.log("Action Type: ", action.type);
    /*console.log("STATE LOGGER: ", dispatch);*/
    next(action);
}


/*const store = createStore(rootReducer);*/  /* Since we are using combine reducers  */
const store = createStore(combineReducers, applyMiddleware(logger, thunk));
/*console.log("Before State ", store.getState());*/

/*store.dispatch(addMovies);
console.log("After State ", store.getState());*/

ReactDOM.render(
    <React.StrictMode>
        <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);


