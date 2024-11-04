import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        editingId: null
    }
    
    // {
    //     id: null,
    //     text: ""
    // }
    ,
    reducers: {
        addNotes: (state, action) => {
            // state.todos.push(
            //     action.payload
            // )
            // const maxId = state.reduce((max, todo) => 
            //     todo.id > max ? todo.id : max, -1
            //     )
            const nextId = state.todos.length === 0 ? 0 : state.todos[state.todos.length - 1].editingId + 1;
            const todo = {
                editingId: nextId + 1,
                text: action.payload.text
            };
            state.todos.push(todo)
        },
        deleteNotes: (state, action) => {
            state.todos =  state.todos.filter(todo => todo.id !== action.payload)
        },
        deleteAllNotes: (state) => {
            state.todos = [];
            state.editingId = null
        },
        updateNote: (state, action) => {
            const { id, text } = action.payload;
            const note = state.todos.find(todo => todo.id === id)
            if (note) {
                note.text = text
            }
            state.editingId = null;
        },
        setEditingId: (state, action) => {
            state.editingId = action.payload
        }
    }
})
export const { addNotes, deleteNotes, deleteAllNotes, updateNote, setEditingId } = todoSlice.actions
export default todoSlice.reducer

//folder structure - actions,reducers,store,interfaces 
// actions - contains all the actions - type,payload - ADD_NEW_NOTE, payload:data
// reducers - action,state=> type of action ,...state funcitonality
//store - reducer , dispatch - to use the action 