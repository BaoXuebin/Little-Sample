import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import { add, del, toggleFinish } from '../action';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import '../styles/todo.less';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleToggleFinish = this.handleToggleFinish.bind(this);
    }

    handleAddTodo(todoItem) {
        this.props.dispatch(add(todoItem));
    }

    handleDeleteTodo(todoId) {
        this.props.dispatch(del(todoId));
    }

    handleToggleFinish(todoId) {
        this.props.dispatch(toggleFinish(todoId));
    }

    render() {
        const { todos } = this.props;
        return (
            <div className="todo-container">
                <TodoInput onAdd={this.handleAddTodo} />
                <Divider />
                <TodoList todos={todos} onDelete={this.handleDeleteTodo} onToggleFinish={this.handleToggleFinish} />
            </div>
        );
    }
}

Todo.propTypes = {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape()).isRequired
};


function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(Todo);
