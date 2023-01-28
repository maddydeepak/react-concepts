import React from "react";
import ReactDOM from "react-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, costForTwo, cloudinaryImageId }) => {
  return (
    <div className="bg-pink-50 shadow-lg p-2 m-2 h-auto w-44 rounded-sm">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="text-md font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
