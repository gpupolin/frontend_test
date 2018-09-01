import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import CarRentalScreen from "./containers/CarRentalScreen";

import * as reducers from "./store/reducers";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CarRentalScreen />
  </Provider>,
  document.getElementById("root")
);
