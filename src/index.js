import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App";
// eslint-disable-next-line
import main from "./main.css";

    render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
