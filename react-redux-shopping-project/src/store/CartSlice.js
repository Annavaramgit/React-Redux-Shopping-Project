import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //when hit addcart button then this method (reducer) update state of cart with new data -->state of cart updates
        //here action automatically creates with name like cart/addCart  (no need to create action)
        addCart(state, action) {
            state.push(action.payload);
        },
        removeItemFromCart(state, action) {
            /*what ever item id and action item id same then only it will fail ,
            remaining(not equal) items are return and satys on cart comp*/
           
            return state.filter(item => item.id !== action.payload);
        }
    }
});

//this is exporting actions (methods in reducer)
export const { addCart,removeItemFromCart } = CartSlice.actions;
//this is exporting reducer (which gives the state)
export default CartSlice.reducer;