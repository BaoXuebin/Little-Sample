import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const text = this.text.inputRef.value;
        if (text) {
            this.props.onAdd(text);
        }
        this.text.inputRef.value = '';
    }

    render() {
        return (
            <div>
                <Input focus placeholder="Enter" fluid ref={(text) => { this.text = text; }} />
                <br />
                <Button color="green" content="添加" fluid onClick={this.handleClick} />
            </div>
        );
    }
}

TodoInput.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default TodoInput;
