import Item from "../components/Item";
import Nav from "../components/Nav";
import Cart from "../components/Cart";

import { data } from "../Data/StoreData";

const Home = () => {
  return (
    <>
      <Nav />
      {data.map((d) => {
        return (
          <Item
            key={d.id}
            id={d.id}
            name={d.name}
            image_url={d.image_url}
            price={d.price}
          />
        );
      })}
      <Cart />
    </>
  );
};

export default Home;
