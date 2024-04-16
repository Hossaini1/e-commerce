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
    <div className="md:bg-primary md:w-64 md:my-[7rem] md:mx-20">
      <h2
        onClick={toggleCategories}
        className="font-bold sm:flex sm:justify-center md:text-center text-tertiary md:animate-pulse md:p-5 md:text-2xl"
        style={{ height: "50px", width: "100%" }}
      >
        {h2Content}
      </h2>
      <ul
        className={`${
          showCategories ? "opacity-100" : "opacity-0"
        } sm:px-5 sm:flex-wrap flex md:flex-col  sm:h-full sm:w-full justify-between `}
      >
        {pages.map((page, index) => (
          <li
            key={index}
            className="sm:p-2 md:p-4 md:mt-4 md:text-center cursor-pointer transition ease-out duration-500 hover:shadow-inner-tertiary transform hover:scale-110 hover:bg-tertiary rounded-lg md:shadow-[0_0_10px]   "
          >
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
