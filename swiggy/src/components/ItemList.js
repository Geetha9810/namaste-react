import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-s">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3">
            <div className="absolute ">
              <button
                className="p-2 my-32 mx-16 rounded-lg inline-block end-px mb-auto bg-white text-green-500 shadow-lg font-bold"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
