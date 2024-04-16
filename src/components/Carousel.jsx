import '../styles/carousel.css'
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Carousel() {
  const slides = [
    {
      product:'Blouse & Shirts',
      url: "https://wallpaperaccess.com/full/1272041.jpg",
      category: 'blousesshirts'

    },
    {
      product:'Women Cloths',
      url: "https://c4.wallpaperflare.com/wallpaper/174/310/462/model-poses-wedding-wallpaper-preview.jpg",
      category: 'maternityclothes'
    },
    {
      product:'Shoes',
      url: "https://images.pexels.com/photos/6567744/pexels-photo-6567744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: 'shoes'
    },
    {
      product:'Mantel & Jacke',
      url: "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: 'womensjackets'
    },
    {
      product:'Pants & Jeans',
      url: "https://images.pexels.com/photos/932403/pexels-photo-932403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: 'pantsjeans'
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
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className=" p-8  md:mt-12 sm:h-auto ">
      <div className=" max-w-[1400px] w-full md:w-[67vw] m-auto py-2 relative group">
       <div className='relative'>
       <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto max-h-[700px] object-center rounded-2xl duration-500"
        />
      
       </div>
       <div className='shadow-[0_0_10px] sm:rounded-xl sm:text-center sm:top-4 sm:left-3 sm:w-[12rem] sm:h-36 sm:p-4 md:w-[26rem] md:h-80 absolute md:bottom-[430px] md:left-7 md:top-7 md:rounded-3xl max-w-full sm:bg-tertiaryLight md:bg-tertiary flex justify-center items-center flex-col md:gap-5'>
          <h2 className='sm:text-4xl sm:pb-1 text-primary font-bold md:text-7xl'>Sale 20%</h2>
          <h4 className='sm:text-xl font-bold sm:text-primary sm:pb-2 md:text-3xl  text-primary'>{slides[currentIndex].product}</h4>
          <Link to={`/${slides[currentIndex].category}`} className='shadow-[0_0_7px] hover:bg-secondaryDark hover:text-primary  sm:text-sm text-secondaryDark duration-700 md:text-2xl font-bold border-none bg-primary md:p-2 md:w-44 rounded-3xl sm:px-3 ease-in-out sm:py-[0.15rem] cursor-pointer'>Buy it</Link>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -left-4  bg-secondary text-2xl rounded-full md:p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft className="text-primary " onClick={prevSlide} size={40} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -right-4 text-2xl rounded-full md:p-2 bg-secondary text-white cursor-pointer text-primary">
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
        <div className="flex  justify-center md:py-2 ">
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