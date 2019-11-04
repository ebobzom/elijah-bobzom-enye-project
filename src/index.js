import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/reducer'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import saga from './saga/saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(saga);

ReactDOM.render(<Provider store={store}> <BrowserRouter> <App /> </BrowserRouter> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
