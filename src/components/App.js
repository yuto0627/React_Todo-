import React, { Component } from 'react';
import './App.css';
import Button from "./Button"; //追加(Button.js呼び出し)
import Form from "./Form"
import TodoList from "./TodoList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>ReactでToDoアプリを実装</h3>
        <Form />
        <Button name="追加" />
        <TodoList />
      </div>
    );
  }
}

export default App;