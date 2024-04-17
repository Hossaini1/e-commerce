import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Store from "../store/Context";
import { Link } from "react-router-dom";

// const data = [
//   {
//     img: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
//     name: "Produkt 1",
//     price: 10.99,
//   },
//   {
//     img: "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
//     name: "Produkt 2",
//     price: 20.49,
//   },
//   {
//     img: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
//     name: "Produkt 3",
//     price: 15.75,
//   },
//   {
//     img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
//     name: "Produkt 4",
//     price: 8.99,
//   },
//   {
//     img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
//     name: "Produkt 5",
//     price: 12.25,
//   },
// ];

const CarouselDunne = () => {

  const { settings, handleClickToSeeMore, dataCarousel, setDetail, detail } =
    Store();

  const addDetail = (item) => {
    setDetail(item);
  };


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

<Link to={`/product-details/${item.id}`}>
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
                  className="bg-primary text-secondaryDark hover:bg-tertiary sm:mb-2 md:mb-4 font-bold py-2 px-4 rounded mt-2"
                  onClick={() => handleAddToCart(item.name)}
                >
                  Add to Cart
                </button>
                 <button
                    className="bg-secondaryDark hover:bg-tertiary mb-3 text-primary font-bold py-2 px-4 rounded mt-2"
                    onClick={() => addDetail(item)}
                  >
                    Detail
                  </button>
              </div>
</Link>
              

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


