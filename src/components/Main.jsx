import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Store from "../store/Context";
import Carousel from "./Carousel";
import CarouselDunne from "./CarouselDunne";

const Main = () => {
  const { handleClickToSeeMore } = Store();

  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <main className="grid grid-cols-4">
      <Sidebar />
      <Carousel slides={slides} />
      <CarouselDunne />

      <Outlet />

      {/* <button
        className="text-center bg-tertiary text-primaryDark px-3 py-2 font-bold rounded-t-2xl "
        onClick={handleClickToSeeMore}
      >
        See more
      </button> */}
    </main>
  );
};
export default Main;
