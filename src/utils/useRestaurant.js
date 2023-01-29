import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurantDetails(json.data);
  }
  return restaurantDetails;
};

export default useRestaurant;
