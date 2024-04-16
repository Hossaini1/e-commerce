import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import DressContextApi from '../store/DressesContext';

const DressesSkirts = () => {
 const { data } = DressContextApi();

 console.log(data);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-secondary m-5 mt-5 shadow-md rounded-lg p-4">
            <img src={item.thumbnail} alt={item.title} className="h-52 w-full object-cover object-top mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-primary">{item.title}</h2>
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

export default DressesSkirts;