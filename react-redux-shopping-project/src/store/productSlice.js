import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import StatusCode from '../Utils/StatusCode';

const initialState = {
    data: [],
    status: StatusCode.IDLE,//for based on status(pending,fullfill,rejecetd) handle/show something in ui
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    //reducers are for synchrnous operations ,if we want do/handle asynchrnous operations there is extraReducers
    reducers: {
        /*
        fetchProductsUsingApi(state, action) {
            state.data = action.payload;
        }*/
    },
    //for asynchronous opetaions(createAsyncThunk ) we have to use this
    extraReducers: (builder) => {
        builder
            /*promise data is three states pedning,fullfill,rejected->we can habndle based on the state
              suppose pending means not completed api then handle show some in ui like loading
              if rejected like error handle etc..*/
            .addCase(getProductsUsingApi.pending, (state, action) => {
                state.status = StatusCode.LOADING

            })
            .addCase(getProductsUsingApi.fulfilled, (state, action) => {
                state.status = StatusCode.IDLE; // means executed sucessfully
                state.data = action.payload;
            })
            .addCase(getProductsUsingApi.rejected, (state, action) => {
                state.status = StatusCode.ERROR;
            })
    }
});


export const { fetchProductsUsingApi } = productSlice.actions;//this is exporting actions (methods in reducer)
export default productSlice.reducer;//this is exporting reducer (which gives the state)


//for asynchrnous operations we using this (extraReducers used ,and createAsyncThunk)
//this is called by ui(product comp in useEffect hook)
export const getProductsUsingApi = createAsyncThunk('products/get', async () => { // products/get is action 
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
})

/*this will call api to fetch-products
and we are calling this from ui,
and this will dispatch action to redux(means this will call reducer action(fetchProductsUsingApi))*/
//for reducers this used(synchrnous operations)
/*
export function getProductsUsingApi() {
    return async function getProductsThunk(dispatch, getState) {
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        dispatch(fetchProductsUsingApi(result));
    }
      
}*/