import React from "react";
//import RestaurantCard from "./RestaurantCard";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
