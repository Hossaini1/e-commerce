
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import CartShopping from './CartShopping'; 


const DressesSkirts = () => {
  const url = [
    { img: "https://cdn.dummyjson.com/product-images/45/4.jpg", name: "Elegant Dress", price: "120" },
    { img: "https://cdn.dummyjson.com/product-images/45/1.jpg", name: "Evening Skirt", price: "90" },
    { img: "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg", name: "Casual Dress", price: "80" },
    { img: "https://cdn.dummyjson.com/product-images/44/2.jpg", name: "Summer Skirt", price: "70" },

  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {url.map((item, index) => (
          <div key={index} className="bg-secondary m-5 mt-5 shadow-md rounded-lg p-4">
            <img src={item.img} alt={item.name} className="h-52 w-full object-contain mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-primary">{item.name}</h2>
              <button onClick={() => addToCart(item)} className="text-primary hover:text-tertiary">
                <FaHeart className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-700 text-primary">${item.price}</p>
            <button onClick={() => addToCart(item)} className="mt-4 bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default DressesSkirts;