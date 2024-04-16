import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import AllListItems from "../pages/AllListItems";
import Login from "../pages/Login";
import Favorite from "../pages/Favorite";
import CartShopping from "../pages/CartShopping";
import BlousesShirts from "../pages/BlousesShirts";
import DressesSkirts from "../pages/DressesSkirts";
import MaternityClothes from "../pages/MaternityClothes";
import PantsJeans from "../pages/PantsJeans";
import Register from "../pages/Register";
import Shoes from "../pages/Shoes";
import TshirtsTops from "../pages/TshirtsTops";
import WomensJacke from "../pages/WomensJacke";
import Error from "../pages/Error";
import Footer from "./Footer";

import Footer from "./Footer";

import PaymentPage from "./PaymentPage";
import ShoppingCartPage from "./ShoppingCartPage";


const Router = () => {
  return (
    <>

    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/shoppingcart" element={<ShoppingCartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/listitems" element={<AllListItems />} />
      <Route path="/blouseshirts" element={<BlousesShirts />} />
      <Route path="/dressesskirts" element={<DressesSkirts />} />
      <Route path="/maternityclothes" element={<MaternityClothes />} />
      <Route path="/pantsJeans" element={<PantsJeans />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/tshirtstops" element={<TshirtsTops />} />
      <Route path="/womensjacke" element={<WomensJacke />} />
      <Route path="/AllLisItems" element={<AllListItems />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </>
);



};
/* text  */
export default Router;
