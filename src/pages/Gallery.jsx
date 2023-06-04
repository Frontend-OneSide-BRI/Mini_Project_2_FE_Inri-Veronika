import React, { useState } from "react";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

import { images } from "../utils/data";

function Gallery() {
  const [seacrh, setSearch] = useState("");
  const [filter, setFilter] = useState(images);

  const allItem = () => {
    const allimages = images.filter((value) => {
      return value;
    });
    setFilter(allimages);
  };

  const animal = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };
  const flower = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };
  const women = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };
  const art = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };
  const nature = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };
  const film = (categoryItem) => {
    const allimages = images.filter((value) => {
      return value.category == categoryItem;
    });
    setFilter(allimages);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="m-10">
          <input
            id="searchInput"
            className="border-2 border-[#FDB827] w-full h-10 rounded-lg"
            type="text"
            placeholder=" seacrh here.."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="grid lg:grid-cols-7 gap-6 mx-10 justify-around  justify-items-center md:grid-cols-2 sm:grid-cols-1">
          <button
            onClick={allItem}
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            All
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => animal("animal")}
          >
            Animal
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => art("art")}
          >
            Art
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => women("women")}
          >
            Women
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => flower("flower")}
          >
            Flower
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => film("film")}
          >
            Film
          </button>
          <button
            className="border-solid border-2 border-[#FDB827] w-40 h-10 rounded-full hover:border-[#CF7500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => nature("nature")}
          >
            Nature
          </button>
        </div>
        <div className="grid lg:grid-cols-4 justify-items-center md:grid-cols-2 sm:grid-cols-1 gap-6 m-10 ">
          {filter
            .filter((item) => {
              if (seacrh == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(seacrh.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <div className="">
                  <img src={item.url} alt="" className="rounded-lg w-80 h-72" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Gallery;
