import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Store from "../store/Context";
import { Link } from "react-router-dom";



const CarouselDunne = () => {

  const { settings, handleClickToSeeMore, dataCarousel ,setCards,cards} =
    Store();

 


  const handleAddToCart =(item)=>{
    const object = {...item, quantity: 1}

    setCards([...cards,object])
  }






  return (
    <div className=" sm:w-[80%] md:w-[95%] m-auto ">
      <div className="mt-30  text-center">
        <p
          className="text-center mb-4 md:text-xl text-secondary font-bold "
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Trending
        </p>
        <Slider {...settings}>
          {dataCarousel.map((item, index) => (
            <div key={index} className="h-full w-full">


              <div className=" flex justify-center items-center rounded-md bg-primary h-48">
                <div className="relative w-full h-full">
                <img 
                className="absolute inset-0 w-full h-full object-cover object-top rounded-t-md "
                  src={item.thumbnail}
                  alt={item.name}
                  
                />
                </div>
              </div>
              <div className=" max-h-full flex flex-col justify-center items-center  bg-secondary text-primary  sm:text-[11px] sm:gap-0 sm:mb-2 sm:rounded-sm md:text-sm  md:gap-2 rounded-b-md">
                <p className="font-bold mt-2 sm:text-xs md:text-sm">{item.title}</p>
                <p className="font-bold sm:mt-1 ">{item.price} $</p>
                {/* Add to cart btn, and i deleted opacity from the card*/}
                <button

                  className="bg-secondaryDark hover:bg-tertiary mb-3 text-primary font-bold py-2 px-4 rounded mt-2"
                  onClick={() => handleAddToCart(item)}

                >
                  Add to Cart
                </button>
           
              </div>

              

            </div>
          ))}
        </Slider>

        <button
          className="text-center bg-tertiary text-primaryDark px-3 py-2 font-bold rounded-t-2xl sm:text-sm md:text-xl"
          onClick={handleClickToSeeMore}
        >
          See more
        </button>
      </div>
    </div>
  );
};
export default CarouselDunne;


