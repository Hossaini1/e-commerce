import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Store from "../store/Context";


const CarouselDunne = () => {
  const { settings, handleClickToSeeMore } = Store();
  
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
          {data.map((item, index) => (
            <div key={index} className="h-full w-full">
              <div className=" flex justify-center items-center  rounded-md bg-primary  ">
                <img
                  src={item.img}
                  alt={item.name}
                  className=" sm:w-[100%]  sm:rounded-sm md:rounded-md bg-contain "
                />
              </div>
              <div className="flex flex-col justify-center items-center  bg-secondary text-primary   sm:text-[11px] sm:gap-0 sm:mb-2 sm:rounded-sm md:text-sm  md:gap-2   md:rounded-md">
                <p className="font-bold mt-2">{item.name}</p>
                <p className="font-bold mt-2">{item.price}$</p>
                {/* Add to cart btn, and i deleted opacity from the card*/}
                <button
                  className="bg-secondaryDark hover:bg-tertiary  mb-3 text-primary font-bold py-2 px-4 rounded mt-2"
                  onClick={() => handleAddToCart(item.name)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="text-center bg-tertiary text-primaryDark px-3 py-2 font-bold rounded-t-2xl "
          onClick={handleClickToSeeMore}
        >
          See more
        </button>
      </div>
    </div>
  );
};
export default CarouselDunne;
