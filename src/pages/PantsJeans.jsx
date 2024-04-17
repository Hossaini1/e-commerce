import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PantsJeans = () => {
  const url = [
    {
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg",
      name: "Future Jeans",
      price: "40",
    },
    {
      img: "https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg",
      name: "Life Jeans",
      price: "55",
    },
    {
      img: "https://images.pexels.com/photos/947234/pexels-photo-947234.jpeg",
      name: "Covered Jeans",
      price: "42",
    },
    {
      img: "https://images.pexels.com/photos/5537993/pexels-photo-5537993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sleeve Jeans",
      price: "47",
    },
    {
      img: "https://images.pexels.com/photos/8929843/pexels-photo-8929843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "EKnitted Jeans",
      price: "25",
    },
    {
      img: "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg",
      name: "Sifk Jeans",
      price: "44",
    },
    {
      img: "https://images.pexels.com/photos/7760567/pexels-photo-7760567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Neck Jeans",
      price: "38",
    },
    {
      img: "https://images.pexels.com/photos/10264797/pexels-photo-10264797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ikat Jeans",
      price: "35",
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

export default PantsJeans;
