
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Context = createContext();

export function ParentContext({ children }) {
  
  // UseNavigate für AllListItems Komponente
  const navigate = useNavigate();
  const handleClickToSeeMore = () => {
    navigate("/listitems");
  };
  //object setting für slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  return (
    <Context.Provider value={{ handleClickToSeeMore,settings }}>
      {children}
    </Context.Provider>
  );
}

const Store = () => useContext(Context);

export default Store;
