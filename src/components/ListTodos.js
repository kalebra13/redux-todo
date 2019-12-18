import React, { Component } from "react";
import { connect } from "react-redux";
import { Checkbox, Box, Button, Typography } from "@material-ui/core";
import { toggleTodoStatus } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    toggleTodoStatus: todo => dispatch(toggleTodoStatus(todo))
  };
}

function mapStateToProps(state) {
  return { activeCategoryID: state.activeCategory, todos: state.todos };
}

class ConnectedListTodos extends Component {
  constructor(props) {
    super(props);

    this.handleTodoStatus = this.handleTodoStatus.bind(this);
  }
  handleTodoStatus(todo) {
    const { toggleTodoStatus } = this.props;
    todo.isDone = !todo.isDone;
    return function() {
      toggleTodoStatus(todo);
    };
  }
  render() {
    const { activeCategoryID, todos } = this.props;
    const filteredTodos = todos.filter(
      todo => todo.categoryID === activeCategoryID
    );

    return (
      <div>
        {activeCategoryID === null ? (
          <Box display="flex">
            <Typography className="noActiveCategoryHeadline">
              There is no active category. Please, choose one.
            </Typography>
          </Box>
        ) : !filteredTodos.length && activeCategoryID ? (
          <Box display="flex">
            <Typography className="noActiveCategoryHeadline">
              There is no todos yet.
            </Typography>
          </Box>
        ) : (
          <>
            {filteredTodos.map(todo => (
              <div className="todoList" key={todo.todoID}>
                <Box>
                  <Checkbox
                    onClick={this.handleTodoStatus(todo)}
                    color="default"
                  ></Checkbox>
                  <Typography className="todoTitle">
                    {todo.todoTitle}
                  </Typography>
                </Box>
                <Button color="default"> EDIT </Button>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedListTodos);

export default ListTodos;
