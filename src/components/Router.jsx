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
import PaymentPage from "./PaymentPage";
import ShoppingCartPage from "./ShoppingCartPage";


const Router = () => {
  return (
    <>

      <Routes>
        
        <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite"element={<Favorite />} />
        <Route path="/payment"element={<PaymentPage />} />
        <Route path="/shoppingcartpage"element={<ShoppingCartPage />} />
        <Route path="/listitems" element={<AllListItems />} />
        <Route path="/blouseshirts" element={<BlousesShirts />} />
        <Route path="/cartshopping" element={<CartShopping />} />
        <Route path="/dressesskirts" element={<DressesSkirts />} />
        <Route path="/maternityclothes" element={<MaternityClothes />} />
        <Route path="/pantsjeans" element={<PantsJeans />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/tshirtstops" element={<TshirtsTops />} />
        <Route path="/womensjacke" element={<WomensJacke />} />
        <Route path="*" element={<Error />} />
        </Route>
       
       
      </Routes>
       <Footer /> 
    </>
  );

   
};
/* text  */
export default Router;
