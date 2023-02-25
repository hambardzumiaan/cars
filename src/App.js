import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/css/main.scss";
import Index from "./components/router";
import ErrorBoundary from "./ui/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Index />
        <ToastContainer />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
