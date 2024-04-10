import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import CarouselDunne from "./CarouselDunne";
import Footer from "./Footer";

const Main = () => {
  

  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <main>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <Carousel slides={slides} />
        </div>
      </div>

      <div>
        <CarouselDunne/>
      </div>
      <div>
        <Footer/>
      </div>

      {/* <Outlet /> */}
    </main>
  );
};
export default Main;
