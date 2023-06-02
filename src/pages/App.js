import React, { useState } from "react";

import Layout from "../components/Layout";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1665207052678-103915b0a03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1572085026482-c5fb67244218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1603467884696-122ad24579c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=579&q=80",
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
  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col gap-3 justify-center items-center bg-fixed bg-no-repeat bg-cover bg-center w-full relative group"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <h1 className="font-bold text-white text-6xl ">Gallery Art</h1>
        <p className="font-semibold text-rose-700 text-2xl">Search our image</p>
        <button className="w-32 h-8 bg-rose-700 rounded-full text-white hover:bg-rose-300">
          Search
        </button>
        <div className="flex justify-center absolute inset-x-0 bottom-0 text-white">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 min-h-full ">
        <p className="font-bold text-black text-4xl">Populer Images</p>
      </div>
      <div className="bg-black min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div className="bg-white min-h-screen bg-fixed bg-no-repeat bg-cover"></div>
    </Layout>
  );
}

export default App;
