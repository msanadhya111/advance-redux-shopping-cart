import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    cartNumber: 0,
  },
  reducers: {
    increment: (state, action) => {
      const actionAttr = action.payload;
      let itemsExists = false;
      state.items.forEach((item) => {
        if (item.id === actionAttr.id) {
          itemsExists = !itemsExists;
          item.quantity++;
          item.totalPrice = item.totalPrice + actionAttr.price;
          state.cartNumber++;
        }
      });
      if (!itemsExists) {
        state.cartNumber++;
        const item = {
          id: actionAttr.id,
          quantity: 1,
          totalPrice: actionAttr.price,
          price: actionAttr.price,
          title: actionAttr.title,
        };
        state.items.push(item);
      }
    },
    decrement: (state, action) => {
      const actionAttr = action.payload;
      state.items.forEach((item) => {
        if (item.id === actionAttr.id) {
          item.quantity--;
          item.totalPrice = item.totalPrice - actionAttr.price;
          state.cartNumber--;
        }
      });
    },
  },
});

export const actions = cartItems.actions;

export default cartItems;
