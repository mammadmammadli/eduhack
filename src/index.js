import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas';
import { userReducers } from './modules/login/store/reducers';


const rootStore = combineReducers({ userReducers });

const composeEnhancers =
  typeof window === 'object' &&
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootStore,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
