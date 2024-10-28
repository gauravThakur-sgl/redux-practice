import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addNotes: (state, action) => {
            state.todos.push(action.payload)
            // return state.todos
        },
        deleteNotes: (state, action) => {
            // for(let i = 1; i <= state.todos.length; i++){
            //     // if(i !== index){
            //     //     state.todos.pop(action.payload)
            //     // }

            //     state.todos.pop(action.payload)
            // }
            state.todos.pop(action.payload)
            // state.todos.pop(action.payload)
        },
        deleteAllNotes: (state, action) => {
            while(state.todos.length > 0){
                state.todos.pop(action.payload)
            }
        }
    }
})

export const { addNotes, deleteNotes, deleteAllNotes } = todoSlice.actions
export default todoSlice.reducer