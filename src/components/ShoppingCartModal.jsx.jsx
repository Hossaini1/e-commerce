import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Store from "../store/Context";
import { useNavigate } from "react-router-dom";

const ShoppingCartModal = ({
  isOpen,
  onClose,
  setCartItemCount,
  cartItemCount,
}) => {
  const [products, setProducts] = useState([
    {
      image: "product1.jpg",
      name: "Product 1",
      price: 10,
      quantity: 0,
      color: "Red",
      size: "M",
    },
    {
      image: "product2.jpg",
      name: "Product 2",
      price: 15,
      quantity: 0,
      color: "Blue",
      size: "L",
    },
    {
      image: "product3.jpg",
      name: "Product 3",
      price: 20,
      quantity: 0,
      color: "Green",
      size: "S",
    },
    {
      image: "product4.jpg",
      name: "Product 4",
      price: 25,
      quantity: 0,
      color: "Yellow",
      size: "XL",
    },
  ]);

  /* import cards from store  */
  const { cards, setCards, dataCarousel } = Store();

  /* navigate router */
  const navigate = useNavigate();

  /* remove product */
  const removeItem = (gameId) => {
    const updatedFavorites = cards.filter((item) => item.id !== gameId);
    setCards(updatedFavorites);
  };

  // handle quantity
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

  // Redirection to the Shopping Cart page
  const handleCheckout = () => {
    navigate("/shoppingcartpage");
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
            <h2 className="text-2xl text-center rfont-bold  m-2 text-primary ">
              Your Shopping Cart
            </h2>
            {cards.length > 0
              ? cards.map((product, index) => (
                  <div
                    key={index}
                    className="flex justify-between  items-center mb-2"
                  >
                    <div className="flex items-center text-primary  mr-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-14 h-20 object-cover mr-4 "
                      />
                      <div>
                        <p className="font-bold mt-4 ">{product.title}</p>
                        <p className="text-">{product.price} $</p>
                        <p className="text-sm  ">Color: {product.color}</p>
                        <p className="text-sm">Size: {product.size}</p>
                      </div>
                    </div>

                    {/* Plus & minus buttons */}
                    <div className="flex items-center  text-secondaryDark ">
                      <button 
                        onClick={() =>
                          handleUpdateCartItemQuantity(product.id, -1)
                        }
                        className="bg-secondaryDark text-primary text-1xl p-2 rounded-full mr-2 hover:bg-gray-200  "
                      >
                         {" "}
                        -{" "}
                      </button>

                      <span className="text-primary">{product.quantity} </span>

                      <button
                        onClick={() =>
                          handleUpdateCartItemQuantity(product.id, 1)
                        }
                        className="bg-secondaryDark text-primary  p-2 rounded-full ml-2 hover:bg-gray-200 "
                      >
                        {" "}
                        +{" "}
                      </button>

                      {/* Icon for deleting the selected product */}
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => removeItem(product.id)}
                        className="ml-4 cursor-pointer hover:text-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                ))
              : ""}

            {/* Total price */}
            <div className="flex  text-primaryDark  justify-center space-x- items-center mt-3 ">
              <p className="font-bold text-right  justify content-between">
                Total : {cards.reduce((acc, card) => acc + card.price, 0)} $
              </p>
            </div>

            {/* Buttons - More Shopping & Go To Basket */}
            <div className="flex justify-center mt-3   ">
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
                className="bg-tertiary text-primary px-2 py-2 rounded     cursor-pointer transition ease-out duration-300 hover:shadow-inner-tertiarytransform 
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
