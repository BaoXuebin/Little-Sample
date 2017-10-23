import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Checkbox, Icon, Grid } from 'semantic-ui-react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    }

    handleClick() {
        const { todo } = this.props;
        this.props.onDelete(todo.id);
    }

    handleChangeCheckBox() {
        const { todo } = this.props;
        this.props.onToggleFinish(todo.id);
    }

    render() {
        const { todo } = this.props;
        const finishClass = todo.finish ? 'finish' : '';
        return (
            <Item style={{ margin: '1rem 0' }}>
                <Item.Content>
                    <Grid>
                        <Grid.Column width={14}>
                            <Checkbox defaultChecked={todo.finish} className={finishClass} label={todo.todoItem} onChange={this.handleChangeCheckBox} />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icon name="close" color="grey" link onClick={this.handleClick} />
                        </Grid.Column>
                    </Grid>
                </Item.Content>
            </Item>
        );
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.shape().isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleFinish: PropTypes.func.isRequired
};

export default TodoListItem;
