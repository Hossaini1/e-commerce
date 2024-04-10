import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

/* const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
]; */

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex justify-center mt-24">
      <div
        className="grid bg-secondaryDark lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
        style={{ height: "40rem", width: "80%" }}
      >
        <div
          className="bg-tertiary text-primary self-center m-5 text-center rounded-xl shadow-2xl pt-24"
          style={{ height: "35rem" }}
        >
          <h1 className="text-8xl m-2 font-bold">SALES</h1>
          <h3 className="text-4xl m-2 pt-10 font-semibold">Up to</h3>
          <h5 className="text-8xl m-2 pt-10 font-extrabold">50%</h5>
        </div>
        <div className="overflow-hidden relative rounded-xl shadow-2xl m-10">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => {
              return <img src={s} />;
            })}
          </div>

          <div className="absolute top-0 h-full w-full justify-between items-center flex text-primary px-10 text-3xl">
            <button onClick={previousSlide}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>
          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-3 h-3 ${
                    i == current ? "bg-primary" : "bg-secondary"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
