import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

function HomeItem({ item }) {
  const bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const itemPresent = bagItems.includes(item.id);
  // console.log("items in bag is ", itemPresent);
  function handleAddToBag() {
    dispatch(bagActions.addToBag(item.id));

    // console.log("item added to bag", item);
  }
  function handleRemoveFromBag() {
    dispatch(bagActions.removeFromBag(item.id));

    // console.log("item added to bag", item);
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemPresent ? (
        <button
          className="btn  btn-add-bag btn-danger "
          onClick={() => handleRemoveFromBag()}
        >
          Remove from Bag
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-success"
          onClick={() => handleAddToBag()}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
