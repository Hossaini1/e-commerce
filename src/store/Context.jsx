import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Context = createContext();

export function ParentContext({ children }) {

  // UseNavigate für AllListItems Komponente
  const navigate = useNavigate();
  const handleClickToSeeMore = () => {
    navigate("/alllistitems");
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
          dots: false
        }
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
        
     
      }}
    >
      {children}
    </Context.Provider>
  );
}

const Store = () => useContext(Context);

export default Store;
