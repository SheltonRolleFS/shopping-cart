import { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const Cart = () => {
  let cartTotal: number = 0;
  const state = useSelector((state: RootStateOrAny) => state);
  const { cart } = state;

  return (
    <section>
      {cart.length === 0 ? null : (
        <div>
          {cart.map((item: any) => {
            const itemTotal = item.quantity * item.price;
            cartTotal += itemTotal;
            return (
              <div key={item.id}>
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
      <div>
        <h4>Total:</h4>
        <p>{cartTotal}</p>
      </div>
    </section>
  );
};

export default Cart;
