import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { Provider } from 'react-redux';

// DONE TILL THUNKS


/* FOR MULTIPLE REDUCERS
import followerReducer from 'followerReducer.js'

const rootReducer = combineReducers(reducer, followerReducer)

*/

let store = createStore( reducer, applyMiddleware(thunk) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
