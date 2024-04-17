import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Header;
