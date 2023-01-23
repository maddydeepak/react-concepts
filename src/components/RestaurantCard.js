import React from "react";
import ReactDOM from "react-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cuisines, costForTwo, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
