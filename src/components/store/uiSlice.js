import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    initialState: { cartIsVisible: true},
    name: 'uiSlice',
    reducers: {
        toggle: (state) => {
            state.cartIsVisible = !state.cartIsVisible    // Internally it will not override it but it will
        }                                               // make it immutable
    }
})

export const actions = uiSlice.actions;

export default uiSlice;