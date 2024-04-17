  import { useState } from 'react';
  import { FaHeart } from 'react-icons/fa';
  
  
  
  const TshirtsTops = () => {
    const url = [
      { img: "https://images.pexels.com/photos/2664721/pexels-photo-2664721.jpeg", name: "Future T-shirt", price: "19" },
      { img: "https://images.pexels.com/photos/8217431/pexels-photo-8217431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Future T-shirt", price: "25" },
      { img: "https://images.pexels.com/photos/4918516/pexels-photo-4918516.jpeg", name: "Covered T-shirt", price: "70" },
      { img: "https://images.pexels.com/photos/10877346/pexels-photo-10877346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Sleeve T-shirt", price: "39" },
      { img: "https://images.pexels.com/photos/17097094/pexels-photo-17097094/free-photo-of-kleider-markt-stadtisch-urban.jpeg", name: "EKnitted T-shirt", price: "15" },
      { img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Neck T-shirt", price: "21" },
      { img: "https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Ikat T-shirt", price: "35" },
      { img: "https://images.pexels.com/photos/1861907/pexels-photo-1861907.jpeg", name: "Sifk T-shirt", price: "44" },
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
  
  export default TshirtsTops;