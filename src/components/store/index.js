import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartItems from "./cartSlice";

const store = configureStore({
  reducer: { visible: uiSlice.reducer, items: cartItems.reducer },
});

export default store;
