import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose,combineReducers } from "redux";
import thunk from "redux-thunk"
import {Provider } from "react-redux";
import nameReducer from "./Reducer/nameReducer";
import wishReducer from "./Reducer/wishReducer";

const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer, {name:"sonali", wish:[]}, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

