import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import reducer from "./reducer/index";

import "./index.css";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../src/utils/theme";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
