

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';



const WomensJacke = () => {
  const url = [
    { img: "https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Future Jacke", price: "40" },
    { img: "https://images.pexels.com/photos/21006101/pexels-photo-21006101/free-photo-of-frau-model-jacke-hemd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Life Jacke", price: "45" },
    { img: "https://images.pexels.com/photos/3774903/pexels-photo-3774903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Covered Jacke", price: "71" },
    { img: "https://images.pexels.com/photos/3783093/pexels-photo-3783093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Sleeve Jacke", price: "55" },
    { img: "https://images.pexels.com/photos/6147374/pexels-photo-6147374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr==750&dpr=1", name: "EKnitted Jacke", price: "49" },
    { img: "https://images.pexels.com/photos/6770033/pexels-photo-6770033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Tobi Jacke", price: "60" },
    { img: "https://images.pexels.com/photos/9396342/pexels-photo-9396342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Live Jacke", price: "53" },
    { img: "https://images.pexels.com/photos/15587225/pexels-photo-15587225/free-photo-of-fashion-mode-frau-jacke.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Sk Jacke", price: "74" },
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

export default WomensJacke;