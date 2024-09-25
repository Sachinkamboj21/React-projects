import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function Bag() {
  const bagItem = useSelector((store) => store.bag);
  console.log("items in the bag are ", bagItem);
  const items = useSelector((store) => store.items);
  // console.log("items in the bag are ",items);
  // const filteredItems = items.filter(items => items.id == bagItem[0]);
  const filteredItems = items.filter((items) =>
    bagItem.map((bagItem) => bagItem).includes(items.id)
  );
  console.log("filtered items are", filteredItems);

  // const item = {
  //   id: "001",
  //   image: "images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: {
  //     stars: 4.5,
  //     count: 1400,
  //   },
  // };
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {/* { item.filter( bagItem)} */}
            {filteredItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bag;
