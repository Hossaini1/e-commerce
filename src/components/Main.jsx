import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Main = () => {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  );
};
export default Main;
