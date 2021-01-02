import React from "react";
import ReactDOM from "react-dom";
import Root from "./views/Root";
import { createStore } from "redux";
import allReducers from "./reducers/allReducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
