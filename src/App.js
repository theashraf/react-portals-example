import React, { useContext } from "react";
import Layout from "./Layout";
import { modalContext } from "./modalContext";

export default () => {
  const [show, setShow] = useContext(modalContext);

  return (
    <Layout>
      <div>
        <h1>React Portals example</h1>
        <p>
          Click on Button below to render Modal outside of the App component DOM
          tree using React Portals
        </p>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Modal
        </button>
      </div>
    </Layout>
  );
};
