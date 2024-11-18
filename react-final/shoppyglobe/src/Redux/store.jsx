// for access our product storage
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})

export default store;
