import logo from "./logo.svg";
import styles from "./App.module.css";
import React from "react";
import Button from "./ui/Button";
import AddTodo from "./todo/AddTodo";
import ListTodo from "./todo/ListTodo";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todo: []
    }
  }

  onFirstButtonClickHandler = () => {
    console.log("First Button clicked");
  };

  onSecondButtonClickHandler = () => {
    console.log("Second  Button clicked");
  };

  addTodoHandler = (taskName, endDate) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000000),
      taskName: taskName,
      endDate: endDate
    }

    this.setState((prevState) => {
      return {
        todo: [...prevState.todo, newTodo]
      }
    })
  } 

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todo: prevState.todo.filter(todo => todo.id !== id)
      }
    })
  }



  render() {
    return (
      <>
      <AddTodo addTodo={this.addTodoHandler}></AddTodo>
      <ListTodo todo={this.state.todo} deleteTodo={this.deleteTodo}></ListTodo>
      </>
    );
  }
}

export default App;
