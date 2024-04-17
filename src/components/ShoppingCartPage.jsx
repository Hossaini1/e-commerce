import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";
import Store from "../store/Context";

const ShoppingCartPage = () => {
  /* store */
  const { cards, setCards, dataCarousel } = Store();

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
    { id: 3, name: "Product 3", price: 20, quantity: 1 },
    { id: 4, name: "Product 4", price: 25, quantity: 1 },
  ]);

  // Function to calculate the total price of all products
  const getTotalPrice = () => {
    return cards.reduce((acc, curr) => acc + curr.price, 0);
  };

  // Function to remove a product from the cart
  const removeItem = (gameId) => {
    const updatedFavorites = cards.filter((item) => item.id !== gameId);
    setCards(updatedFavorites);
  };

  function handleUpdateCartItemQuantity(gameId, amount) {
    const updatedFavorites = cards.map((item) => {
      if (item.id === gameId) {
        const selectedGame = dataCarousel.find((game) => game.id == gameId);

        const newQuantity = item.quantity + amount;
        const newPrice = newQuantity * selectedGame.price;
        return { ...item, quantity: newQuantity, price: newPrice };
      }
      return item;
    });
    setCards(updatedFavorites);
  }

  // Function to handle the payment process
  const handlePayment = () => {
    // Redirect to the payment page or perform any payment-related actions
    console.log("Redirecting to the payment page...");
  };

  console.log(cards);

  return (
    <div className="container mx-auto mt-2 px-9 py-10">
      <h1 className="text-2xl text-center font-bold mb-10">
        Your Shopping Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Displaying products */}
        <div>
          {cards.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-tertiary py-4"
            >
              <div className="flex items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-14 h-20 object-cover mr-4"
                />
                <div>
                  <p className="font-bold">{product.title}</p>
                  <p>{product.price}$</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateCartItemQuantity(product.id, -1)}
                    className="bg-primary text-secendaryDark px-2  mr-4  border border-secondary"
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() => handleUpdateCartItemQuantity(product.id, 1)}
                    className="bg-gray-200 text-secendaryDark  px-2  mr-3 ml-4 border border-secondary"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(product.id)}
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
          <div className="shadow-[0_0_10px]  bg-primaryDark rounded-xl p-16">
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
            <div className="flex md:justify-between sm:flex-col sm:gap-2 ">
              <button className="bg-secondary text-primary py-2 px-10 border-tertiary rounded-md hover:bg-tertiary">
                Apply
              </button>

              {/* Payment button */}

              <Link
                to="/payment"
                className="bg-tertiary text-primary py-3 px-6 sm:text-center  rounded-md  hover:bg-secondaryDark "
              >
                Go To Pay
              </Link>
            </div>
          </div>

          {/* "We Accept:"  section */}
          <div className="mt-10 flex justify-center  items-center">
            <p className="mr-10 font-bold ">We Accept:</p>

            {/* Logos and payment methods here */}
            <FaCcVisa
              alt="Visa"
              className="w-10 h-10 mr-3 border-b border-tertiary "
            />
            <FaCcMastercard
              alt="Mastercard"
              className="w-10 h-10 mr-3 border-b border-tertiary  "
            />
            <FaCcPaypal
              alt="PayPal"
              className="w-10 h-10 border-b border-tertiary "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
