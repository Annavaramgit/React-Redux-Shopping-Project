import {  createSlice } from '@reduxjs/toolkit'

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {
        //when hit addcart button this method (reducer) update state of cart with new data -->state of cart updates
        //here action automatically creates with name like cart/addCart  (no need to create action)
        addCart(state, action) {
            initialState.push(action.payload);
        }
    }
});

//this is exporting actions (methods in reducer)
export const {addCart} =CartSlice.actions;
//this is exporting reducer (which gives the state)
export default CartSlice.reducer;