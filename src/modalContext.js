import React, { createContext, useState } from "react";

export const modalContext = createContext();

export const ModalProvider = ({ children }) => (
  <modalContext.Provider value={useState(false)}>
    {children}
  </modalContext.Provider>
);
