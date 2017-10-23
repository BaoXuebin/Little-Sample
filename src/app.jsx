import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import Root from './containers/Root';
import Todo from './redux-demo/containers/Todo';
import storeConfigure from './redux-demo/storeConfigure';

const ReduxTodo = () => (
    <Provider store={storeConfigure()}>
        <Todo />
    </Provider>
);

ReactDOM.render(<ReduxTodo />, document.getElementById('root'));

// 热更新处理逻辑
if (module.hot) {
    module.hot.accept();
}
