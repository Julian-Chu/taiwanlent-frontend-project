import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { CHANGE_AUTH } from "./actions/types";
import { BUSINESS_USER, PERSONAL_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const token = localStorage.getItem("Authorization");
const role = localStorage.getItem("Role");
if (token && role) {
  store.dispatch({
    type: CHANGE_AUTH,
    payload: role === "business" ? BUSINESS_USER : PERSONAL_USER
  });
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
