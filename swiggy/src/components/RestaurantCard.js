import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, locality } =
    resData?.info;
  // console.log(props);

  return (
    // <div className="res-card" style={{ backgroundColor: "green;" }}>
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
