import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { store } from "./Store/Store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Providing the Access to the Store/Context via Provider Component of Redux.
  //Passing the "Store" created to hold our Context through the store Prop.
  <Provider store={store}>
    <App />
  </Provider>
);
