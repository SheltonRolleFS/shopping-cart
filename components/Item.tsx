/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Image from "next/image";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { add, increment, decrement } from "../redux/cart";

// Styling Import
import styles from "../styles/Item.module.css";

type Items = {
  id: number;
  name: string;
  image_url: string;
  price: number;
};

interface Iindex {
  index: number;
}

function Item({ id, name, image_url, price }: Items) {
  const [inCart, setInCart] = useState(false);
  const [item, setItem] = useState<Iindex>({ index: 0 });
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state);
  const { cart } = state;

  const addToCart = async (id: number, name: string, price: number) => {
    const itemData = {
      id,
      name,
      price,
      quantity: 1,
    };

    await dispatch(add(itemData));
    setInCart(true);
  };

  const update = async (type: string) => {
    switch (type) {
      case "increment":
        await dispatch(increment(id));
        break;
      case "decrement":
        if (cart[item.index].quantity === 1) {
          setInCart(false);
        }
        await dispatch(decrement(id));
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        setItem({ index: i });
      }
    }
  }, [cart]);

  return (
    <div className={styles.itemCard}>
      <Image
        src={image_url}
        alt="item-thumbnail"
        width="350px"
        height="500px"
      />
      <section>
        <h3>{name}</h3>
        <p>{`$${price.toFixed(2)}`}</p>
      </section>
      {!inCart ? (
        <button onClick={() => addToCart(id, name, price)}>Add To Cart</button>
      ) : (
        <div className={styles.actions}>
          <button onClick={() => update("decrement")}>-</button>
          <p>{cart[item.index].quantity}</p>
          <button onClick={() => update("increment")}>+</button>
        </div>
      )}
    </div>
  );
}

export default Item;
