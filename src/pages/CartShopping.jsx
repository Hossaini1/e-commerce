


const CartShopping = ({ cart }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
          <div>
            <img src={item.img} alt={item.name} className="h-16 w-auto mr-2" />
            {item.name}
          </div>
          <div>${item.price}</div>
        </div>
      ))}
      {cart.length === 0 && <p className="text-gray-500">Your cart is empty</p>}
      {cart.length > 0 && (
        <div className="text-lg font-semibold mt-4">
          Total: ${cart.reduce((total, item) => total + parseInt(item.price), 0)}
        </div>
      )}
import { useState } from "react";
import CarouselDunne from "../components/CarouselDunne";

const CartShopping = ({ cartItems }) => {
  return (
    <div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>
              {item.name} - ${item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CartShopping;

