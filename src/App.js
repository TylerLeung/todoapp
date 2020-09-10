import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Make Website'},
      {id: 2, content: 'Finish Assignment'}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random() * 10;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todos => {
      return todos.id !== id
    })
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center purple-text text-lighten-3">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>  
    )
  }
}

export default App;
