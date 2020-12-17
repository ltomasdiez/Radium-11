import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import Axios from 'axios';
import Buildings from './mocks/buildings';

class App extends Component {
  state={
    todos:Buildings
  }
  componentDidMount(){
    Axios.get(Buildings)
      .then(res=>this.setState({todos:res.data}));
  }
  //TOGGLE COMPLETE
  //markComplete=(id)=>{
  //  this.setState({todos: this.state.todos.map(todo=>{
  //    if(todo.id===id){
  //      todo.completed=!todo.completed;
  //      console.log(todo.completed);
  //    }
  //    return todo;
  //  })})
  //}
  //Delete ToDo
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  //Add Todo
  addTodo=(title)=>{
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
      .then(res=> this.setState({
        todos:[...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              <Todos todos={this.state.todos} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
