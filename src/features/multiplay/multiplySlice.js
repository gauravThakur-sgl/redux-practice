import { createSlice } from "@reduxjs/toolkit";

export const multiplySlice = createSlice({
    name: 'multiply',
    initialState: {
        value: 1
    },
    reducers: {
        multiplyByTwo : state => {
            state.value *= 2
        },
        multiplyByFour : state => {
            state.value *= 4
        },
        decreaseByTenK: state => {
            state.value -= 10000
        }
    }
})

export const { multiplyByTwo, multiplyByFour, decreaseByTenK } = multiplySlice.actions
export default multiplySlice.reducer