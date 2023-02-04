import React from "react";
import ReactDOM from "react-dom";

const FoodItem = ({ name }) => {
  console.log(name);
  return (
    <div className="bg-gray-200 border border-gray-300 shadow-xl p-2 m-2 h-64 w-52 rounded-md">
      <h3 className="my-2 text-sm font-bold">{name}</h3>
    </div>
  );
};

export default FoodItem;
