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
