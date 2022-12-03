import styles from "./ListTodo.module.css";
import React from "react";
import Button from "../ui/Button";

class ListTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return this.props.todo.map((todo) => {
      return (
        <div>
          <p>{todo.taskName}</p>
          <p>{todo.endDate}</p>
          <Button eventHandler={() => {this.props.deleteTodo(todo.id)}   }>Delete todo</Button>
        </div>
      );
    });
  }
}

export default ListTodo;
