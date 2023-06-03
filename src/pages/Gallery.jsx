import React, { useState } from "react";

import Layout from "../components/Layout";

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
            className="border-2 border-gray-300 w-full h-10 rounded-lg"
            type="text"
            placeholder="seacrh here.."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-6 mx-10">
          <button onClick={allItem}>All</button>
          <button onClick={() => animal("animal")}>Animal</button>
          <button onClick={() => art("art")}>Art</button>
          <button onClick={() => women("women")}>Women</button>
          <button onClick={() => flower("flower")}>Flower</button>
          <button onClick={() => film("film")}>Film</button>
          <button onClick={() => nature("nature")}>Nature</button>
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
                  <h3>{item.name}</h3>
                </div>
              );
            })}
        </div>
      </div>
      {/* <div className="container">
        <div className="grid lg:grid-cols-4 gap-6 justify-items-center md:grid-cols-2 sm:grid-cols-1 gap-6 m-10 ">
          {filter.map((value) => {
            return (
              <div className="col mt-3">
                <img src={value.url} className="img-fluid" alt="image" />
              </div>
            );
          })}
        </div>
      </div> */}
    </Layout>
  );
}

export default Gallery;
