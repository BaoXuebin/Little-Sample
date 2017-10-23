import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggleFinish }) => {
    let _html = '暂无待办事项';
    if (todos.length > 0) {
        _html = todos.map(todo => <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} onToggleFinish={onToggleFinish} />);
    }
    return (
        <Item.Group>
            {_html}
        </Item.Group>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onDelete: PropTypes.func,
    onToggleFinish: PropTypes.func
};
TodoList.defaultProps = {
    onDelete: () => {},
    onToggleFinish: () => {}
};

export default TodoList;
