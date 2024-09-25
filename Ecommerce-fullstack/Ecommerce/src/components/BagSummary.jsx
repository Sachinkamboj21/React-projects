import { useSelector } from "react-redux";

function BagSummary() {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const filteredItem = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const Convenience_Fee = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  filteredItem.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
    // console.log("price is", item.current_price);
  });
  finalPayment = totalMRP - totalDiscount + Convenience_Fee;
  // console.log("price is ",totalMRP);
  const bagSummary = {
    totalItem: bagItemIds.length,
    totalMRP: totalMRP,
    totalDiscount: totalDiscount,
    finalPayment: finalPayment,
  };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{Convenience_Fee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
