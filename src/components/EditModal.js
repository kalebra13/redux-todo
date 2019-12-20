import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { toggleModalClose } from "../js/actions/index";

function mapStateToProps(state) {
  return { isOpen: state.isOpenEditModal };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModalClose: () => dispatch(toggleModalClose())
  };
}

class ConnectedEditModal extends Component {
  handleClose = () => {
    this.props.toggleModalClose();
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
