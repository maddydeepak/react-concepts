import React from "react";
import { IMG_CDN_URL } from "../constants";
import discount from "../assets/img/discount.png";

const MenuHeader = ({ restaurant }) => {
  return (
    <div className="w-full bg-gray-800 flex text-white">
      <img
        className="p-10 h-72"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
      />
      <div className="mx-16 mt-12 w-96">
        <div className="text-3xl ">{restaurant?.name}</div>

        <div className="">
          {restaurant?.area} , {restaurant?.city}
        </div>
        <div className="flex mt-6">
          <div className="p-3">
            <div className="font-bold">
              ⭐ {restaurant?.avgRating === 0 ? "0.0" : restaurant?.avgRating}
            </div>
            <div className="text-sm">{restaurant?.totalRatingsString}</div>
          </div>
          <div className="border border-y-0 p-3">
            <div className="font-bold">
              {restaurant?.sla?.deliveryTime} minutes
            </div>
            <div className="text-sm">Delivery Time</div>
          </div>
          <div className="p-3">
            <div className="font-bold">₹ {restaurant?.costForTwo / 100}</div>
            <div className="text-sm">Cost for two</div>
          </div>
        </div>
      </div>
      <div className="mx-50 mt-24 border border-white p-3 h-32 w-80">
        {restaurant?.aggregatedDiscountInfo?.descriptionList?.map((item) => {
          return (
            <div className="m-1 flex" key={item.meta}>
              <img className="h-6 mx-1" src={discount} />
              {item.meta}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuHeader;
