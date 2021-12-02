import Item from "../components/Item";
import Nav from "../components/Nav";
import Cart from "../components/Cart";

import { data } from "../Data/StoreData";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className={styles.content}>
        <div className={styles.items}>
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
        </div>
        <Cart />
      </div>
    </>
  );
};

export default Home;
