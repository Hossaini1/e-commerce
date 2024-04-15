import '../styles/carousel.css'
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carousel() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/833185/pexels-photo-833185.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1386897/pexels-photo-1386897.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="  p-[2rem] ">
      <div className=" max-w-[1400px] w-full md:w-[68vw] m-auto py-2 relative group">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto max-h-[700px]   object-center rounded-2xl duration-500"
        />
        <h2>sdfasdfs</h2>

        <div className="hidden group-hover:block absolute top-[50%] -left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft className="text-primary" onClick={prevSlide} size={40} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer text-primary">
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-purple-400' : ''}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}