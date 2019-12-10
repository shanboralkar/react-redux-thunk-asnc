import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
