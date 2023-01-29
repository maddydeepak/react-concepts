import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return (
    <>
      <div className="flex">
        <div className="m-1">
          <h2 className="font-bold text-lg m-2">{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>
            {restaurant?.area}, {restaurant?.city}
          </h3>
          <h3>Ratings: {restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div className="mx-2">
          <h1 className="text-red-500">Menu</h1>
          <ul className="">
            {restaurant?.menu?.items &&
              Object.values(restaurant?.menu?.items).map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
