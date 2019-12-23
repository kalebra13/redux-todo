import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { toggleModalClose } from "../js/actions/index";

class ConnectedEditModal extends Component {
  state = {
    todoTitle: null
  };

  componentWillReceiveProps(nextProps){
    if (!this.props.activeTodoTitle && nextProps.activeTodoTitle !== this.props.activeTodoTitle){
      this.setState({todoTitle: nextProps.activeTodoTitle });
    }
  }

  handleChange = e => {
    this.setState({
      todoTitle: e.target.value
    });
    console.log(this.state);
  };

  handleClose = () => {
    this.props.toggleModalClose(this.state.todoTitle);
  };

  render() {
    const { activeTodoID } = this.props;
    const {todoTitle} = this.state;

    return (
      <div
        className={
          activeTodoID ? "modalOverlay modalOpened" : "modalOverlay modalClosed"
        }
      >
        <div className="modalBody">
          <h4 className="editTodoHeadline">Edit ToDo</h4>
          <Input
            type="text"
            margin="dense"
            placeholder="Enter new to-do title"
            required
            // value={this.state.prevActiveTodoTitle}
            value={todoTitle}
            onChange={this.handleChange}
          />
          <Button className="saveEditBtn" onClick={this.handleClose}>
            Save
          </Button>
          <Button onClick={this.handleClose}>Close</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
    {
        // isOpen: state.isOpenEditModal,
        activeTodoID: state.activeTodoID,
        activeTodoTitle: state.activeTodoTitle
    }
);

const mapDispatchToProps = dispatch => (
    {
        toggleModalClose: (title) => dispatch(toggleModalClose(title))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEditModal)
