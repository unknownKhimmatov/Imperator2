import {
    configureStore
} from "@reduxjs/toolkit";
import cart from "./slice/card"
import currentProduct from "./slice/currentProduct";
export const store = configureStore({
    reducer: {
        cart,
        currentProduct,
    },
});