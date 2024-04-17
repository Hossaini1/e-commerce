import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const dressContext = createContext();

export const DressesContext = ({ children }) => {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/products/category/womens-dresses";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <dressContext.Provider value={{ data }}>{children}</dressContext.Provider>
  );
};

const DressContextApi = () => useContext(dressContext);

export default DressContextApi;
