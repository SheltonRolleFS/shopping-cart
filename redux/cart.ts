import { createSlice } from '@reduxjs/toolkit';

type Item = {
    id: number,
    name: string,
    price: number
}

let initialState: Item[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;