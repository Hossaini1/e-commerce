import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const MaternityClothes = () => {
  const url = [
    {
      img: "https://images.pexels.com/photos/601168/pexels-photo-601168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Future Hut",
      price: "20",
    },
    {
      img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Life Hut",
      price: "25",
    },
    {
      img: "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Covered Hut",
      price: "31",
    },
    {
      img: "https://images.pexels.com/photos/210106/pexels-photo-210106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sleeve Hut",
      price: "55",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {url.map((item, index) => (
          <div
            key={index}
            className="bg-secondary m-5 mt-5 shadow-md rounded-lg p-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-48 w-full object-cover mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-primary">
                {item.name}
              </h2>
              <button
                onClick={() => addToCart(item)}
                className="text-primary hover:text-tertiary"
              >
                <FaHeart className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-700 text-primary">{item.price} $</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaternityClothes;
