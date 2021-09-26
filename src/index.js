import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const blankReview = { 
    feeling: '',
    understanding: '',
    support: '',
    comments: '' ,
}

const feedbackReducer = ( state = blankReview, action ) => {
    if( action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload.feeling};
    }else if (action.type === 'SET_UNDERSTAND') {
        return {...state, understanding: action.payload.understanding};
    }else if (action.type === 'SET_SUPPORT') {
        return {...state, support: action.payload.support};
    }else if (action.type === 'SET_COMMENTS') {
        return {...state, comments: action.payload.comments};
    }else if (action.type === 'CLEAR_REVIEWS') {
        return {};
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
