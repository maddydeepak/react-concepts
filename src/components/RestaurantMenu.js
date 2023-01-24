import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  });
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurantDetails(json.data);
  }
  return (
    <>
      <h1>{restaurantDetails.name}</h1>
      <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} />
      <h2>Area: {restaurantDetails.area}</h2>
      <h2>City: {restaurantDetails.city}</h2>
      <h2>Cost for Two: {restaurantDetails.costForTwo} INR</h2>
      <ul>
        {Object.values(restaurantDetails?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
