"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Context.Provider value={{ savedProducts, setSavedProducts, showSidebar, setShowSidebar }}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;
