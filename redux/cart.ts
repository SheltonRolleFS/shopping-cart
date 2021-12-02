import { createSlice } from "@reduxjs/toolkit";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

let initialState: Item[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    increment: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload === state[i].id) {
          state[i].quantity += 1;
        }
      }
    },
    decrement: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload === state[i].id) {
          state[i].quantity -= 1;
        }
      }
    },
  },
});

export const { add, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
