import React from "react";

function Card({ url }) {
  return (
    <div className="w-72 h-54 bg-white shadow-md rounded-xl border-2 border-gray-300 ">
      <div className="overflow-hidden rounded-xl bg-cover">
        <img
          className="hover:scale-125 ease-in duration-150 w-full h-56 "
          src={url}
        />
      </div>
    </div>
  );
}

export default Card;
