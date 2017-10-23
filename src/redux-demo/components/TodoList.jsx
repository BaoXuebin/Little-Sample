import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
    const _html = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);
    return (
        <Item.Group>
            {_html}
        </Item.Group>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default TodoList;
