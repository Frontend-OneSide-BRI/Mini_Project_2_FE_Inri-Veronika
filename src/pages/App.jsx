import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Modal from "../components/Modal";

import { images } from "../utils/data";
import { slides } from "../utils/data";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

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
        <p className="font-semibold text-[#FDB827] text-2xl">
          Search our images
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="w-32 h-8 bg-[#CF7500] rounded-full text-white hover:bg-[#5e3b0d]"
        >
          About
        </button>

        <div className="flex justify-center absolute inset-x-0 bottom-0 text-white  hover:text-rose-300 ">
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

      <div className=" min-h-auto p-10 ">
        <p className="font-bold text-black text-4xl pb-5">populer pictures</p>
        <div className="grid lg:grid-cols-4 gap-6 justify-items-center md:grid-cols-2 sm:grid-cols-1">
          {images.map((item) => (
            <Card key={item.id} url={item.url} />
          ))}
        </div>
      </div>

      <div className="bg-sea min-h-screen bg-fixed bg-no-repeat bg-cover flex flex-row relative">
        <div className="w-1/2 bg-black grid justify-items-center content-center  ">
          <div className="flex-col w-3/5 h-64 absolute lg:top-42 lg:left-40 md:top-48 md:left-32 md:px-10">
            <h1 className="text-7xl font-bold mb-10  text-[#FDB827] ">
              We can help you make great photos!
            </h1>
            <p className="text-lg text-[#CF7500]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, aliquam quisquam error repudiandae earum accusantium
              facere facilis ea perspiciatis nemo quasi optio sit voluptatibus
              eaque, doloremque aut minima tenetur reprehenderit.
            </p>
          </div>
        </div>
        <div className="w-1/2 "></div>
      </div>
      <div className="bg-white min-h-screen p-10 ">
        <p className="font-bold text-black text-4xl mb-8">see other pictures</p>

        <div className="grid lg:grid-cols-4 gap-6 justify-items-center md:grid-cols-2 sm:grid-cols-1">
          {images.map((item) => (
            <Card key={item.id} url={item.url} className="" />
          ))}
        </div>
      </div>
      {/* <button onClick={() => setShowModal(true)}>modal</button> */}

      <Modal onClose={handleOnClose} visible={showModal} />

      <Footer />
    </Layout>
  );
}

export default App;
