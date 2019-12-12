import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModalProvider } from "./modalContext";

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("app")
);
