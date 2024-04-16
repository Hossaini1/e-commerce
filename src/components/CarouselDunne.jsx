import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Store from "../store/Context";
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

  const { settings, handleClickToSeeMore,dataCarousel } = Store();
  console.log(dataCarousel);
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
              <div className=" flex justify-center items-center  rounded-md bg-primary  ">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className=" sm:w-[100%]  sm:rounded-sm md:rounded-md bg-contain "
                />
              </div>
              <div className="flex flex-col justify-center items-center  bg-secondary text-primary   sm:text-[11px] sm:gap-0 sm:mb-2 sm:rounded-sm md:text-sm  md:gap-2   md:rounded-md">
                <p>{item.name}</p>
                <p>{item.price}</p>
                {/* Add to cart btn, and i deleted opacity from the card*/}
                <button
                  className="bg-secondaryDark hover:bg-tertiary mb-3 text-primary font-bold py-2 px-4 rounded mt-2"
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
