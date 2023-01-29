import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState();

  useEffect(() => {
    fetchRestaurants();
  }, []);
  async function fetchRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.48919128402566&lng=77.5014628842473&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline. Please check internet connection.</h1>;
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50">
        <input
          type="text"
          className=""
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border border-green-900 mx-2 px-1 bg-gray-400 rounded-md"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          <span className="text-sm">Search</span>
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Found! </h1>
        ) : (
          filteredRestaurants?.map((item) => (
            <Link to={"/restaurant/" + item?.data?.id} key={item?.data?.id}>
              <RestaurantCard {...item?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
