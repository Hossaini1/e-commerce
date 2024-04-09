import { createContext,  useContext } from "react";

const Context = createContext();

export function ParentContext({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

const Store = () => useContext(Context);

export default Store;
