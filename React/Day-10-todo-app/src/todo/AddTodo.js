import React from "react";
import Button from "../ui/Button";
import styles from "./AddTodo.module.css";

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: {
        value: "",
      },

      todoDate: {
        value: "",
      },
    };
  }

  todoTextChangeHandler = (event) => {
    this.setState({
      todoText: {
        value: event.target.value,
      },
    });
  };

  todoLastDateChangeHandler = (event) => {
    this.setState({
      todoDate: {
        value: event.target.value,
      },
    });
  };

  addTodoHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    if (this.state.todoDate.length === 0 || this.state.todoText.length === 0) {
      return;
    }

    this.props.addTodo(this.state.todoText.value, this.state.todoDate.value);

    this.setState({
      todoText: { value: "" },
      todoDate: { value: "" },
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.addTodoHandler}>
          <input
            type="text"
            onChange={this.todoTextChangeHandler}
            value={this.state.todoText.value}

            required
          />
          <input
            type="date"
            onChange={this.todoLastDateChangeHandler}
            value={this.state.todoDate.value}

            required
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </>
    );
  }
}

export default AddTodo;
