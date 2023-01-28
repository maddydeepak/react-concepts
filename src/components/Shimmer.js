import React from "react";
//import RestaurantCard from "./RestaurantCard";

const Shimmer = () => {
  return (
    <div className="">
      {Array(10)
        .fill("")
        .map((index) => (
          <div className="" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
