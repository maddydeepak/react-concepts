import React from "react";
import ReactDOM from "react-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="bg-gray-200 border border-gray-300 shadow-xl p-2 m-2 h-auto w-44 rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="my-2 text-sm font-bold">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h5 className="my-1 text-sm">{costForTwoString}</h5>
    </div>
  );
};

export default RestaurantCard;
