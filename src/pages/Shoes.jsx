import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';



const Shoes = () => {
  const url = [
    { img: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Future Schuhe", price: "51" },
    { img: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Life Schuhe", price: "85" },
    { img: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Covered Schuhe", price: "42" },
    { img: "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Sleeve Schuhe", price: "87" },
    { img: "https://images.pexels.com/photos/1335450/pexels-photo-1335450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "EKnitted Schuhe", price: "55" },
    { img: "https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Neck Schuhe", price: "63" },
    { img: "https://images.pexels.com/photos/2351858/pexels-photo-2351858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Ikat Schuhe", price: "71" },
    { img: "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Sifk Schuhe", price: "54" },
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

export default Shoes;