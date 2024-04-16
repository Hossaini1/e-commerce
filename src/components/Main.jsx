import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import CarouselDunne from "./CarouselDunne";
import Footer from "./Footer";
import { useState } from "react";
import CartShopping from "../pages/CartShopping";

const Main = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  //Start of Cart

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //-------------------------------------
  return (
    <main>
      <div className=" grid  md:grid-cols-5 sm:grid-cols-1">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-4 sm:col-span-5">
          <Carousel slides={slides} />
        </div>
      </div>




     

      <div>
        {/* added CartShopping and addToCart, cartItems */}
        <CarouselDunne addToCart={addToCart} />
        <CartShopping cartItems={cartItems} />
      </div>



    </main>
  );
};
export default Main;
