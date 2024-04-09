const pages = [
  { title: "CATEGORIES" },
  { title: "Kleider & Röcke", path: "/kleider " },
  { title: "Blusen & Hemden", path: "/blusen " },
  { title: "T-shirts & Tops", path: "/t-shirt&tops" },
  { title: "Hosen & Jeans", path: "/hosen" },
  { title: "Umstandskleidung", path: "/umstandskleidung" },
  { title: "Damenjacken", path: "/damenjacken" },
  { title: "Schuhe", path: "/schuhe" },
];

const Sidebar = () => {
  return (
    <Sidebar className="bg-secondaryDark  text-primaryDark  w-64 p-10 my-[5rem] mx-10 flex flex-col col-span-1">
      <div className="p-1 "></div>

      <ul className="flex-2  ">
        {pages.map((page, index) => (
          <li key={index} className="p-5 hover:bg-tertiary">
            <a className="" href={page.path}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
};

export default Sidebar;
