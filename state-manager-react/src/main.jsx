import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./components/Provider";
import { createStore } from "@redux-like/store";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);