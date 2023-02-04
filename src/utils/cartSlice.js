import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
