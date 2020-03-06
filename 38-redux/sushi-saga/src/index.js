import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

// DONE TILL THUNKS


/* FOR MULTIPLE REDUCERS
import followerReducer from 'followerReducer.js'

const rootReducer = combineReducers(reducer, followerReducer)

*/

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
