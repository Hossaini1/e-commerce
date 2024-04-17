import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Context = createContext();

export function ParentContext({ children }) {
  const [favorites, setFavorites] = useState([]);

  // UseNavigate für AllListItems Komponente
  const navigate = useNavigate();
  const handleClickToSeeMore = () => {
    navigate("/alllistitems");
  };

  //favorite
  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((currentFavorites) => 
      currentFavorites.filter((fav) => fav.id !== productId)
    );
  };
 
  const isFavorite = (productId) => {
  return favorites.some((product) => product.id === productId);
    };

  

  //object setting für slider
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(84,84,84)" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "rgb(84,84,84)" }}
            onClick={onClick}
          />
        );
    }
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //  Api Abruf für dunne carousel
  const [dataCarousel, setDataCarousel] = useState([]);
  const url = "https://dummyjson.com/products/category/womens-dresses";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setDataCarousel(response.data.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
 

  

  return (
    <Context.Provider
      value={{
        handleClickToSeeMore,
        settings,
        dataCarousel,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
        
     
      }}
    >
      {children}
    </Context.Provider>
  );
}

const Store = () => useContext(Context);

export default Store;
