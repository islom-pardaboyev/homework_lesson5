"use client";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ContextProps {
  savedProducts: any[]; 
  setSavedProducts: Dispatch<SetStateAction<any[]>>; 
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface MainContextProps {
  children: ReactNode;
}

export const MainContext = ({ children }: MainContextProps) => {
  const [savedProducts, setSavedProducts] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Context.Provider value={{ savedProducts, setSavedProducts, showSidebar, setShowSidebar}}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;