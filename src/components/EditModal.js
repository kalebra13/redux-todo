import React  from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { changeActiveTitle, toggleModalSave, toggleModalClose } from "../js/actions/index";

const EditModal = ({isOpenEditModal, activeTodoTitle, changeActiveTitle, toggleModalSave, toggleModalClose}) => (
    isOpenEditModal ? (
        <div className="modalOverlay">
            <div className="modalBody">
                <h4 className="editTodoHeadline">Edit ToDo</h4>
                <Input
                    type="text"
                    margin="dense"
                    placeholder="Enter new to-do title"
                    required
                    value={activeTodoTitle}
                    onChange={e => changeActiveTitle(e.target.value)}
                />
                <Button className="saveEditBtn" onClick={toggleModalSave}>
                    Save
                </Button>
                <Button onClick={toggleModalClose}>Close</Button>
            </div>
        </div>
    ) : null
);

const mapStateToProps = state => (
    {
        isOpenEditModal: state.isOpenEditModal,
        activeTodoTitle: state.activeTodoTitle,
    }
);

const mapDispatchToProps = dispatch => (
    {
        changeActiveTitle: (title) => dispatch(changeActiveTitle(title)),
        toggleModalSave: () => dispatch(toggleModalSave()),
        toggleModalClose: () => dispatch(toggleModalClose()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
