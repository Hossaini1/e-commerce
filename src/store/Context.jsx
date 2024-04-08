import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export function ParentContext({ children }) {
  
  // UseNavigate für AllListItems Komponente
  const navigate = useNavigate();
  const handleClickToSeeMore = () => {
    navigate("/listitems");
  };

  return (
    <Context.Provider value={{ handleClickToSeeMore }}>
      {children}
    </Context.Provider>
  );
}

const Store = () => useContext(Context);

export default Store;
