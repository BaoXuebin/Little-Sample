export const TodoActionConstants = {
    ADD: 'ADD',
    DEL: 'DEL',
    TOGGLE_FINISH: 'TOGGLE_FINISH'
};

// 添加待办事项
export const add = todoItem => ({
    type: TodoActionConstants.ADD,
    todoItem
});

// 删除待办事项
export const del = todoId => ({
    type: TodoActionConstants.DEL,
    todoId
});

// 切换是否完成
export const toggleFinish = todoId => ({
    type: TodoActionConstants.TOGGLE_FINISH,
    todoId
});
