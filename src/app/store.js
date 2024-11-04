import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import multiplyReducer from '../features/multiplay/multiplySlice'
import todoReducer from '../features/to-do/todoSlice'

export default configureStore({
    // name: 'counter',
    // initialState: {
    //     value: 0
    // },
    reducer: {
        counter: counterReducer,
        multiply: multiplyReducer,
        todo: todoReducer
    }
})

