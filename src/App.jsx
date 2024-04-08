import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import Carousel from "./components/Carousel";

const App = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <>
      <Header />
      <Main />

      <div>
        <Carousel slides={slides} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" />
          <Route path="" />
          <Route path="" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
