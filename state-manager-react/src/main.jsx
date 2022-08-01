import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./components/Provider";
import { combineReducers, createStore } from "@redux-like/store";
import "./index.css";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action?.amount || 1);
    case "DECREMENT":
      return state - (action?.amount || 1);
    default:
      return state;
  }
};

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((item) => item !== action.item);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: counterReducer,
  items: itemsReducer,
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
