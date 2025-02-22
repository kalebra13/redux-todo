import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteCategory } from "../js/actions/index";
import { setActiveCategory } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    deleteCategory: category => {
      dispatch(deleteCategory(category.id));
    },
    setActiveCategory: category => {
      dispatch(setActiveCategory(category.id));
    }
  };
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

class ConnectedList extends Component {
  constructor(props) {
    super(props);

    this.toggleDeleteTodo = this.toggleDeleteTodo.bind(this);
    this.handleActiveCategory = this.handleActiveCategory.bind(this);
  }

  toggleDeleteTodo(category) {
    const { deleteCategory } = this.props;
    return function() {
      deleteCategory(category);
    };
  }

  handleActiveCategory(category) {
    const { setActiveCategory } = this.props;
    return function() {
      setActiveCategory(category);
    };
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="categoryList">
        {!categories.length ? (
          <div>There is no categories. Please, add one.</div>
        ) : (
          <div>
            {categories.map(category => (
              <div
                key={category.id}
                className="categoryGroup"
                onClick={this.handleActiveCategory(category)}
              >
                {category.title}
                <Button
                  type="button"
                  onClick={this.toggleDeleteTodo(category)}
                  className="deleteCategoryBtn"
                >
                  delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const ListCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default ListCategory;
