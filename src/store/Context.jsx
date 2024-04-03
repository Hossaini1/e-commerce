import { createContext, useState, useContext } from "react";







const Context = createContext();

export function ParentContext({ children }) {


  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

const store = () => useContext(Context);

export default store;
