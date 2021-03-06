import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from './config/fbConfig';
import firebase from 'firebase/app';

const store = createStore(
  rootReducer, 
  compose(
    
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore })
  ),
  reduxFirestore( firebase, firebaseConfig),
  reactReduxFirebase( firebaseConfig, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
  })
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
