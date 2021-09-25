import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = ( state = [], action ) => {
    if( action.type === 'SET_FEELING') {
        return [...state, action.payload];
    }else if (action.type === 'SET_UNDERSTAND') {
        return [...state, action.payload];
    }else if (action.type === 'SET_SUPPORT') {
        return [...state, action.payload];
    }else if (action.type === 'SET_COMMENTS') {
        return [...state, action.payload];
    }else if (action.type === 'CLEAR_REVIEWS') {
        return [];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger) 
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
