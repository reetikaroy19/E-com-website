import { createSlice } from "@reduxjs/toolkit";


// for initial state for our product

const initialState = {
    products: [],
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       setProducts(state, action) {
           state.products = action.payload
       }
    },
})

export const {setProducts} = ProductSlice.actions;
export default ProductSlice.reducer