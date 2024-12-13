import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import productSlice from './productSlice'
//for creating store we need to use configStore
//configstore have one property called reducer in there we need mention the our slices
const store = configureStore({

    reducer: {
        cart: CartSlice, //here mentioned my cartSlice;
        product: productSlice,
    }
});
export default store