import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = ( state = '', action ) => {
    if( action.type === 'SET_FEELING') {
        return state;
    }else if (action.tyoe === 'SET_UNDERSTAND') {
        return state;
    }else if (action.type === 'SET_SUPPORT') {
        return state;
    }else if (action.type === 'SET_COMMENT') {
        return state;
    }  
    return state;
}

const reduxStore = createStore( feedbackReducer )

ReactDOM.render(
    <Provider store={reduxStore}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
