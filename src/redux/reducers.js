
const initialState = {
    todos: [],
    changeId: null,
    useData: {
        data: ""
    }
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), data: action.payload.todo, status: 'pending' },
                ],
                // todos: state.todos.map((todo) => todo.id === action.payload ? {...todo, status: 'pending'} : todo)
                // todos: action.payload
            }
        case "MOVE_TO_PENDING":
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, status: 'pending' } : todo)
            }
        case "MOVE_TO_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, status: 'todo' } : todo)
            }
        case "MOVE_TO_PROGRESS":
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, status: 'in-progress' } : todo)
            }
        case "MOVE_TO_COMPLETED":
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, status: 'completed' } : todo)
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state
    }
};

export default todoReducer