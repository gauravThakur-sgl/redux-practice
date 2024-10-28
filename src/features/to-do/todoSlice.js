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
        
    }
})

export const { addNotes, deleteNotes } = todoSlice.actions
export default todoSlice.reducer