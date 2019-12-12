import React from "react";
import Modal from "./Modal";

export default ({ children }) => (
  <>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
    <Modal />
  </>
);
