import React from "react";
import ReactDOM from "react-dom";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, cloudinaryImageId, price }) => {
  console.log(name);
  return (
    <>
      <div className="bg-gray-200 border border-gray-300 shadow-xl p-2 m-2 w-52 rounded-md">
        <h3 className="my-2 text-sm font-bold">{name}</h3>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <span>
          <span className="font-bold m-2"> Price: </span>
          <span>₹ {price / 100}</span>
        </span>
      </div>
    </>
  );
};

export default FoodItem;
