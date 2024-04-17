import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Context = createContext();


export function ParentContext({ children }) {
  const [cards,setCards] = useState([])



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
  function SamplePrevArrow(props) {
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
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {

          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }

      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //  Api Abruf für dunne carousel
  const [dataCarousel, setDataCarousel] = useState([]);
  const [detail, setDetail] = useState([]);
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

        cards,
        setCards,


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
