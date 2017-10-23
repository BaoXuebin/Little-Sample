import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './containers/Root';
import Todo from './redux-demo/containers/Todo';

ReactDOM.render(<Todo />, document.getElementById('root'));

// 热更新处理逻辑
if (module.hot) {
    module.hot.accept();
}
