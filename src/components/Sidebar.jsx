import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const pages = [
    { title: "Dresses & Skirts", path: "/dressesskirts" },
    { title: "Blouses & Shirts", path: "/blouses" },
    { title: "T-shirts & Tops", path: "/t-shirt&tops" },
    { title: "Pants & Jeans", path: "/pants" },
    { title: "Maternity clothes", path: "/maternity clothes" },
    { title: "Women's jackets", path: "/women's jackets" },
    { title: "Shoes", path: "/shoes" },
  ];



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowCategories(window.innerWidth > 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCategories = () => {
    if (windowWidth <= 960) {
      setShowCategories(!showCategories);
    }
  };

  let h2Content = null;
  if (windowWidth <= 960 && !showCategories) {
    h2Content = <FiChevronDown size={50} />;
  } else if (windowWidth <= 960 && showCategories) {
    h2Content = <FiChevronUp size={50} />;
  } else {
    h2Content = "Categories";
  }

  return (
    <div className=" md:w-96 h-[90%] md:absolute top-[5.5rem] ">
      <h2
        onClick={toggleCategories}
        className="font-bold sm:flex sm:justify-center items-center rounded-b-3xl md:text-primary sm:mt-2 md:mt-0 sm:text-tertiary md:bg-tertiary md:animate-pulse md:text-2xl"
        style={{ height: "10%", width: "100%" }}
      >
        {h2Content}
      </h2>
      <ul
        className={`${
          showCategories ? "block" : "hidden"
        } md:mt-4 sm:px-5 sm:flex-wrap flex md:flex-col md:max-w-full sm:h-full sm:w-full justify-start md:h-[95%] bg-primary `}
      >
        {pages.map((page, index) => (
          <li
            key={index}
            className=" sm:p-[0.45rem]  md:p-3 md:pl-28 md:mt-5  cursor-pointer transition ease-out duration-500 hover:shadow-inner-tertiary transform hover:scale-110 md:hover:bg-tertiary rounded-lg sm:hover:underline  "
          >
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
