export const ADD_TODO = 'ADD_TODO';
export const MOVE_TO_TODO = 'MOVE_TO_TODO';
export const MOVE_TO_PROGRESS = 'MOVE_TO_PROGRESS';
export const MOVE_TO_COMPLETED = 'MOVE_TO_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO'
export const MOVE_TO_PENDING = "MOVE_TO_PENDING"

export const moveToPending = (todoId) => (
    {
        type: MOVE_TO_PENDING,
        payload: todoId
    }
)
export const addTodos = (todos) => (
    {
        type: ADD_TODO,
        payload: todos
    }
)
export const moveToTodo = (todoId) => ({
    type: MOVE_TO_TODO,
    payload: todoId
});

export const moveToProgress = (todoId) => ({
    type: MOVE_TO_PROGRESS,
    payload: todoId
});

export const moveToCompleted = (todoId) => ({
    type: MOVE_TO_COMPLETED,
    payload: todoId
});
export const deleteCompletedTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})