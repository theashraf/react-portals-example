import React, { useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { modalContext } from "./modalContext";

export default () => {
  const [show, setShow] = useContext(modalContext);
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(function() {
    const RootModal = document.getElementById("modal");
    RootModal.appendChild(elRef.current);

    return function() {
      RootModal.removeChild(elRef.current);
    };
  }, []);

  return ReactDOM.createPortal(
    show && (
      <div>
        <h2>I'm a Modal rendered using react portals</h2>
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Hide
        </button>
      </div>
    ),
    elRef.current
  );
};
