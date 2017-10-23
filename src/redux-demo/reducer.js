import { TodoActionConstants } from './action';

const initState = {
    todos: [
        {
            id: 1508759772470,
            todoItem: '吃饭',
            finish: true
        },
        {
            id: 1508759775288,
            todoItem: '喂猫',
            finish: false
        }
    ]
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case TodoActionConstants.ADD: {
            const id = new Date().getTime();
            const todos = [ ...state.todos, { id, todoItem: action.todoItem, finish: false }];
            return Object.assign({}, state, { todos });
        }
        case TodoActionConstants.DEL: {
            const todos = state.todos.filter(todo => todo.id !== action.todoId);
            return Object.assign({}, state, { todos });
        }
        case TodoActionConstants.TOGGLE_FINISH: {
            const todos = Object.assign([], state.todos);
            todos.forEach(todo => {
                if (todo.id === action.todoId) {
                    todo.finish = !todo.finish;
                }
            });
            return Object.assign({}, state, { todos });
        }
        default:
            return state;
    }
};

export default reducer;
