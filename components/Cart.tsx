/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import styles from "../styles/Cart.module.css";

interface Itotal {
  cart: number;
}

const Cart = () => {
  const [total, setTotal] = useState<Itotal>({ cart: 0 });
  const state = useSelector((state: RootStateOrAny) => state);
  const { cart } = state;

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const itemTotal = cart[i].price * cart[i].quantity;
      total += itemTotal;
    }
    setTotal({ cart: total });
  }, [cart]);

  return (
    <section className={styles.cart}>
      <div className={styles.cartTotal}>
        <h4>Total:</h4>
        <p>{`$${total.cart}`}</p>
      </div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item: any) => {
            return (
              <div key={item.id} className={styles.cartItem}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.quantity}</p>
                </div>
                <p>{`$${item.quantity * item.price}`}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Cart;
