import { RootStateOrAny, useSelector } from "react-redux";

import styles from "../styles/Cart.module.css";

const Cart = () => {
  let cartTotal: number = 0;
  const state = useSelector((state: RootStateOrAny) => state);
  const { cart } = state;

  return (
    <section className={styles.cart}>
      <div className={styles.cartTotal}>
        <h4>Total:</h4>
        <p>{cartTotal}</p>
      </div>
      {cart.length === 0 ? null : (
        <div>
          {cart.map((item: any) => {
            const itemTotal = item.quantity * item.price;
            cartTotal += itemTotal;
            return (
              <div key={item.id} className={styles.cartItem}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.quantity}</p>
                </div>
                <p>{itemTotal}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Cart;
