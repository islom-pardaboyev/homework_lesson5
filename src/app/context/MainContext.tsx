"use client";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ContextProps {
  savedProducts: any[]; 
  setSavedProducts: Dispatch<SetStateAction<any[]>>; 
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  pathname: string,
  setPathname: Dispatch<SetStateAction<string>>
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface MainContextProps {
  children: ReactNode;
}

export const MainContext = ({ children }: MainContextProps) => {
  const [savedProducts, setSavedProducts] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [pathname, setPathname] = useState<string>();

  return (
    <Context.Provider value={{ savedProducts, setSavedProducts, showSidebar, setShowSidebar, pathname, setPathname }}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;