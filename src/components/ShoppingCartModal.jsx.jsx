import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ShoppingCartModal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([
    { name: "Product 1", price: 10, quantity: 1 },
    { name: "Product 2", price: 15, quantity: 1 },
    { name: "Product 3", price: 20, quantity: 1 },
    { name: "Product 4", price: 25, quantity: 1 },
  ]);

  // Calculate total price of all products
  const getTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  // Increase quantity of a product
  const increaseQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  // Decrease quantity of a product
  const decreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  // Remove a product from the cart
  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  // Render the shopping cart modal
  return (
    <>
      {isOpen && (
        <div className="fixed top-40 rounded-xl right-20 z-20 bg-secondary">
          <div className="  rounded-lg p-6 py-5 max-w-lg mx-2 ">

            {/* Closing symbol */}
            <button className=" absolute top-0 right-0 m-4 text-primaryDark " onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Positions in cart */}
            <h2 className="text-2xl text-center rfont-bold mb-9 m-8 text-primary">
              Your Shopping Cart
            </h2>
            {products.map((product, index) => (
              <div
                key={index}
                className="flex justify-between  items-center mb-2"
              >
                <div className=" text-primaryDark font-bold">
                  <p>{product.name}</p>
                  <p>{product.price} $</p>
                </div>

                {/* Plus & minus buttons */}
                <div className="flex items-center  text-secondaryDark">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-secondaryDark text-primary text-1xl px-4 py-1 rounded-full mr-2 hover:bg-gray-200"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="text-primary">{product.quantity} </span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-secondaryDark text-primary px-4 py-1 rounded-full ml-2 hover:bg-gray-200 "
                  >
                    {" "}
                    +{" "}
                  </button>

                  {/* Icon for deleting the selected product */}
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => removeProduct(index)}
                    className=" ml-4 cursor-pointer  hover:text-primary transition-colors duration-300"
                  />
                </div>
              </div>
            ))}

            {/* Total price */}
            <div className="flex  text-primaryDark  justify-center space-x-10 items-center mt-7 ">
              <p className="font-bold text-right  justify content-between">
                Total: {getTotalPrice()} ${" "}
              </p>
            </div>

            {/* Buttons - More Shopping & Checkout */}
            <div className="flex justify-end mt-5 px-6 ">
              <button
                className="bg-secondaryDark  text-primary hover:bg-tertiary  px-4  py-2 rounded mr-2  cursor-pointer transition ease-out duration-500 hover:shadow-inner-tertiary transform hover:scale-90 hover:bg-tertiary rounded-lg shadow-[0_0_5px] "
                onClick={onClose}
              >
                More Shopping
              </button>
              <button
                className="bg-tertiary text-primary px-4 py-2 rounded  cursor-pointer transition ease-out duration-300 hover:shadow-inner-tertiary transform hover:scale-90 hover:bg-tertiary rounded-lg shadow-[0_0_5px] "
                
                onClick={onClose}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartModal;
