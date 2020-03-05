import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));






















// console.log(store.getState())

// console.log(store.dispatch({type: 'LIKE'}))
// console.log(store.dispatch({type: 'LIKE'}))
// console.log(store.dispatch({type: 'TOGGLE'}))
// console.log(store.dispatch({type: 'CHANGETEXT', payload: {value: 'some new text'}}))
// console.log(store.dispatch({type: 'ADDTEXT'}))

// console.log(store.getState())
