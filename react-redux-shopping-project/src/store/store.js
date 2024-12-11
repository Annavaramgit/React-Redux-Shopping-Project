    import { configureStore } from "@reduxjs/toolkit";
    import CartSlice from './CartSlice'

    //for creating store we need to use configStore
    //configstore have one property called reduce in there we need mention the our slices
    const store = configureStore({
        reducer:{
            cart:CartSlice, //here mentioned my cartSlice;
        }
    })
    export default store