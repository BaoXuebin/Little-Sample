import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

const TodoListItem = ({ todo }) => (
    <Checkbox label={todo.header} onChange={(e, a) => console.log(a.checked)} />
);

TodoListItem.propTypes = {
    todo: PropTypes.shape().isRequired
};

export default TodoListItem;
