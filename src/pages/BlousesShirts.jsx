import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';



const BlousesShirts = () => {
  const url = [
    { img: "src/images/Blouses/pexels-1.jpg", name: "Ethnic Saree Blouse", price: "120" },
    { img: "src/images/Blouses/pexels-2.jpg", name: "Jacquard Saree Blouse", price: "90" },
    { img: "src/images/Blouses/pexels-3.jpg", name: "Covered Blouse", price: "70" },
    { img: "src/images/Blouses/pexels-4.jpg", name: "Sleeve Cotton Blouse", price: "99" },
    { img: "src/images/Blouses/pexels-5.jpg", name: "EKnitted Blouse", price: "75" },
    { img: "src/images/Blouses/pexels-6.jpg", name: "Boat Neck Blouse", price: "44" },
    { img: "src/images/Blouses/pexels-7.jpg", name: "Sleeve Ikat Blouse", price: "75" },
    { img: "src/images/Blouses/pexels-8.jpg", name: "Silk Saree Blouse", price: "44" },
  ];

  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {url.map((item, index) => (
          <div key={index} className="bg-secondary m-5 mt-5 shadow-md rounded-lg p-4">
            <img src={item.img} alt={item.name} className="h-48 w-full object-cover mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-primary">{item.name}</h2>
              <button onClick={() => addToCart(item)} className="text-primary hover:text-tertiary">
                <FaHeart className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-700 text-primary">{item.price} $</p>
            <button onClick={() => addToCart(item)} className="mt-4 bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default BlousesShirts;