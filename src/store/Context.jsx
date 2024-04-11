import { createContext, useState, useContext, useEffect } from "react";
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
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  // pages link und toggle categories für sidebar
 

  

  return (
    <Context.Provider
      value={{
        handleClickToSeeMore,
        settings,
        showCategories,
        setShowCategories,
        pages,
        h2Content,
        toggleCategories,
        resize
      }}
    >
      {children}
    </Context.Provider>
  );
}

const Store = () => useContext(Context);

export default Store;
