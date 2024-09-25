import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

function Home() {
  const items = useSelector((state) => state.items);
  // console.log("GOT Items", items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
