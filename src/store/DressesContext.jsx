import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const PRODUCT_URL = "https://dummyjson.com/products/category/womens-dresses";

const dressContext = createContext();

export const DressesContext = ({ children }) => {
  const [dresses, setDresses] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(PRODUCT_URL);
      setDresses(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <dressContext.Provider value={{ dresses }}>
      {children}
    </dressContext.Provider>
  );
};

const DressContextApi = () => useContext(dressContext);
export default DressContextApi;
