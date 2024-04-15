

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";




const ShoppingCartPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
    { id: 3, name: "Product 3", price: 20, quantity: 1 },
    { id: 4, name: "Product 4", price: 25, quantity: 1 },
  ]);

  // Function to calculate the total price of all products
  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Function to remove a product from the cart
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto mt-10 px-9 py-10">
      <h1 className="text-2xl text-center font-bold mb-10">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b border-tertiary py-4">
              <div className="flex items-center">
                <img src={`images/${product.id}.jpg`} alt={product.name} className="w-16 h-20 object-cover mr-4" />
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p>{product.price}$</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeProduct(product.id)}
                  className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-full mr-1"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <div className="flex items-center">
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-full mr-2">
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-full ml-2">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="border border-secondary bg-primaryDark rounded-md p-10">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">{getTotalPrice()} $</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>{getTotalPrice()} $</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Delivery</p>
              <p>0.00 $</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Total (VAT included)</p>
              <p>{getTotalPrice()} $</p>
            </div>
            <div className="mb-4">
              <p className="text-sm italic">Add a voucher (Optional)</p>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter Your Voucher Code"
              />
            </div>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-tertiary">
              Apply
            </button>
          </div>

          {/* "We Accept:"  section */}
          <div className="mt-10 flex justify-center items-center">
            <p className="mr-8">We Accept:</p>
            {/* Add logos or payment methods here */}
            <img src="visa-logo.png" alt="Visa" className="w-8 h-8 mr-2" />
            <img src="mastercard-logo.png" alt="Mastercard" className="w-8 h-8 mr-2" />
            <img src="paypal-logo.png" alt="PayPal" className="w-8 h-8" />

            {/* Add more payment method logos as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;