import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ShoppingCartModal = ({
  isOpen,
  onClose,
  setCartItemCount,
  cartItemCount,
}) => {
  const [products, setProducts] = useState([
    { name: "Product 1", price: 10, quantity: 0 },
    { name: "Product 2", price: 15, quantity: 0 },
    { name: "Product 3", price: 20, quantity: 0 },
    { name: "Product 4", price: 25, quantity: 0 },
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

    setCartItemCount((prevCount) => prevCount + 1); // Update the number of products in the cart
  };

  // Decrease quantity of a product
  const decreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);

      setCartItemCount((prevCount) => prevCount - 1); // Update the number of products in the cart
    }
  };

  // Remove a product from the cart
  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);

    setCartItemCount((prevCount) => prevCount - 1); // Update the number of products in the cart
  };

  // Redirection to the Shopping Cart page
  const handleCheckout = () => {
    window.location.href = "/shoppingcartpage"; // path to '/shoppingcart' page
  };

  // Render the shopping cart modal
  return (
    <>
      {isOpen && (
        <div className="fixed top-40 rounded-xl right-0 sm:left:0 sm:right-0 z-20 bg-secondary w-full sm:w-auto">
          <div className="  rounded-lg p-6 py-5 max-w-lg mx-2">
            {/* Closing cart symbol */}
            <button
              className=" absolute top-0 right-0 m-6 text-primaryDark "
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Cart item count */}
            {cartItemCount > 0 && (
              <div
                className="absolute  top-0 right-0 mt-5 mr-2  bg-tertiary text-primary flex justify-center items-center 
              rounded-full text-xs font-bold border border-black z-10 "
              >
                {cartItemCount}
              </div>
            )}

            {/* Positions in the cart */}
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
                Total : {getTotalPrice()} ${" "}
              </p>
            </div>

            {/* Buttons - More Shopping & Go To Basket */}
            <div className="flex justify-end mt-5 px-6 ">
              <Link to="/">
                <button
                  className="bg-secondaryDark  text-primary hover:bg-tertiary  px-4  py-2 rounded mr-2  cursor-pointer transition ease-out duration-500
                 hover:shadow-inner-tertiary transform hover:scale-90   shadow-[0_0_5px] "
                  onClick={onClose}
                >
                  More Shopping
                </button>
              </Link>

              <button
                className="bg-tertiary text-primary px-4 py-2 rounded  cursor-pointer transition ease-out duration-300 hover:shadow-inner-tertiarytransform 
                hover:scale-90 hover:bg-tertiary shadow-[0_0_5px] "
                onClick={handleCheckout}
              >
                Go To Basket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartModal;
