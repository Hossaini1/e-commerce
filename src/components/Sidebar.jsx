import { Link } from "react-router-dom";




const pages = [
  { title: "Dresses & Skirts", path: "/dresses " },
  { title: "Blouses & Shirts", path: "/blouses" },
  { title: "T-shirts & Tops", path: "/t-shirt&tops" },
  { title: "Pants & Jeans", path: "/pants" },
  { title: "Maternity clothes", path: "/maternity clothes" },
  { title: "Women's jackets", path: "/women's jackets" },
  { title: "Shoes", path: "/shoes" },
];

const Sidebar = () => {
  return (
    <div className="bg-primaryDark  text-secondaryDark w-64 p-15 my-[7rem] mx-20 flex flex-col col-span-1 sm:grid-cols-1  md:col-span-2">
      <ul className=" flex-2   sm:grid-cols-1 md:col-span-2">
        <h1 className="font-bold  text-center text-tertiary animate-pulse md:border-2 ">
          Categories
        </h1>
        {pages.map((page, index) => (
          <li
            key={index}
            className=" p-4 my-5 text-center cursor-pointer transition ease-out duration-500 hover:shadow-inner-tertiary transform hover:scale-110 hover:bg-tertiary rounded-lg shadow-[0_0_10px]   "
          >
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
