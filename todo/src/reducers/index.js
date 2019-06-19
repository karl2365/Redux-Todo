import { ADD_NEW_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const initialState = {
    todos: [
        {value:'Go to Store',
        completed: false},
        {value: 'Code Redux', 
        completed: false},
        {value:'Eat',
        completed: false},
        {value: 'Sleep',
        completed: false}]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const newTodo = { value: action.payload, completed: false };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (action.payload === index) {
                        return{
                            ...todo,
                            completed: !todo.completed
                        }
                    }else{
                        return todo;
                    }
                })
            }
        case DELETE_TODO:

            return{
                ...state,
                todos: state.todos.filter(todo => todo !== state.todos[action.payload] )
            }
            
        default:
            return state;
    }
}