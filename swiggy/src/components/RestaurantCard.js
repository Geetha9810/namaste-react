import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, cloudinaryImageId, avgRating, locality } =
    resData?.info;
  // console.log(props);

  return (
    // <div className="res-card" style={{ backgroundColor: "green;" }}>
    <div className="m-4 p-4 w-[370px] h-[400px]  bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="w-[350px] h-[200px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>
        {"⭐"}
        {avgRating}
      </h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{locality}</h4>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

export default RestaurantCard;
