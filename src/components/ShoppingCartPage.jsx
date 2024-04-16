

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { Link } from "react-router-dom";




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


  // Function to decrease quantity of a product
  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Function to increase quantity of a product
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };


    // Function to handle the payment process
    const handlePayment = () => {
      // Redirect to the payment page or perform any payment-related actions
      console.log("Redirecting to the payment page...");
    };



  return (
    <div className="container mx-auto mt-2 px-9 py-10">
      <h1 className="text-2xl text-center font-bold mb-10">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Displaying products */}
        <div>
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b border-tertiary py-4">
              <div className="flex items-center">
                <img src={`images/${product.id}.jpg`} alt={product.name} className="w-14 h-20 object-cover mr-4" />
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p>{product.price}$</p>
                </div>
              </div>
              <div className="flex items-center">
                
                <div className="flex items-center">
                  <button onClick={() => decreaseQuantity(product.id)}
                  className="bg-primary text-secendaryDark px-2  mr-4  border border-secondary">
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button  onClick={() => increaseQuantity(product.id)}
                  className="bg-gray-200 text-secendaryDark  px-2  mr-3 ml-4 border border-secondary">
                    +
                  </button>

                  <button
                  onClick={() => removeProduct(product.id)}
                  className="bg-gray-200 text-secondaryDark hover:bg-tertiary px-2 py-1 rounded-full ml-5"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>





                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="border border-tertiary bg-primaryDark rounded-md p-10 mt-10">
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
            <button className="bg-secondary text-primary py-2 px-6 border-tertiary rounded-md hover:bg-tertiary">
              Apply
            </button>


              {/* Payment button */}
              <Link to="/payment" className="bg-tertiary text-primary py-2 px-6 ml-[30rem]  rounded-md  hover:bg-secondaryDark ">
              Go To Pay
              </Link>
           
          </div>

          {/* "We Accept:"  section */}
          <div className="mt-10 flex justify-center  items-center">
            <p className="mr-10 font-bold ">We Accept:</p>

            {/* Logos and payment methods here */}
            <FaCcVisa  alt="Visa" className="w-10 h-10 mr-3 border-b border-tertiary " />
            <FaCcMastercard alt="Mastercard" className="w-10 h-10 mr-3 border-b border-tertiary  " />
            <FaCcPaypal  alt="PayPal" className="w-10 h-10 border-b border-tertiary " />

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;