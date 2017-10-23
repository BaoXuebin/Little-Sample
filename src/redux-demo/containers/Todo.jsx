import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import storeConfigure from '../storeConfigure';
import '../styles/todo.less';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todos = [
            {
                id: '1',
                header: '测试'
            }
        ];
    }
    render() {
        return (
            <Provider store={storeConfigure()}>
                <div className="todo-container">
                    <TodoInput />
                    <Divider />
                    <TodoList todos={this.todos} />
                </div>
            </Provider>
        );
    }
}

export default Todo;
