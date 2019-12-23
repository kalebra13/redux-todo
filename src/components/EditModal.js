import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { toggleModalClose } from "../js/actions/index";

function mapStateToProps(state) {
  return {
    isOpen: state.isOpenEditModal,
    activeTodoID: state.activeTodoID,
    activeTodoTitle: state.activeTodoTitle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModalClose: () => dispatch(toggleModalClose())
  };
}

class ConnectedEditModal extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.activeTodoTitle !== state.prevActiveTodoTitle) {
      return {
        prevActiveTodoTitle: props.activeTodoTitle
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  state = {};

  handleClose = () => {
    this.props.toggleModalClose();
  };
  handleChange = e => {
    this.setState({
      prevActiveTodoTitle: e.target.value
    });
    console.log(this.state);
  };
  render() {
    const { isOpen } = this.props;
    return (
      <div
        className={
          isOpen ? "modalOverlay modalOpened" : "modalOverlay modalClosed"
        }
      >
        <div className="modalBody">
          <h4 className="editTodoHeadline">Edit ToDo</h4>
          <Input
            type="text"
            margin="dense"
            placeholder="Enter new to-do title"
            required
            value={this.state.prevActiveTodoTitle}
            onChange={this.handleChange}
          ></Input>
          <Button className="saveEditBtn" onClick={this.handleClose}>
            Save
          </Button>
          <Button onClick={this.handleClose}>Close</Button>
        </div>
      </div>
    );
  }
}

const EditModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEditModal);

export default EditModal;
