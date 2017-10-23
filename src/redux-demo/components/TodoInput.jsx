import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const TodoInput = () => (
    <div>
        <Input focus placeholder='Search...' fluid />
        <br />
        <Button color="green" content="添加" fluid />
    </div>
);

export default TodoInput;
