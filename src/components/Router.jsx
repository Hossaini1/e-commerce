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

import DetailsPage from "../pages/DetailsPage";
import PaymentPage from "./PaymentPage";
import ShoppingCartPage from "./ShoppingCartPage";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cartshopping" element={<CartShopping />} />
        <Route path="/blouseshirts" element={<BlousesShirts />} />
        <Route path="/dressesskirts" element={<DressesSkirts />} />
        <Route path="/maternityclothes" element={<MaternityClothes />} />
        <Route path="/pantsjeans" element={<PantsJeans />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/tshirtstops" element={<TshirtsTops />} />
        <Route path="/womensjacke" element={<WomensJacke />} />

        <Route path="/alllistitems" element={<AllListItems />} />
        {/* Product details */}
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/shoppingcartpage" element={<ShoppingCartPage />} />

        {/* Details Route */}
        {/* <Route path="/dressesskirts/:id" element={<DetailsPage />} />
        <Route path="/blouseshirts/:id" element={<DetailsPage />} /> */}

        {/* Error Page Route */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
