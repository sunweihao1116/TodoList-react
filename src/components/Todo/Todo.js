import React, { Component } from 'react';
import './Todo.less';
import Item from '../Item/item';
import Tabs from '../Tabs/Tabs';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      content: '',
      todos: [],
      todos_show: [],
      completed: 'all',
      length: '0',
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.typeChange = this.typeChange.bind(this);
    this.allChange = this.allChange.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }
  render() {
    return (
      <div id="Todo">
        <input type="text" className="add-input" value={this.state.content} onChange={(e) => this.handleChange(e)} placeholder="接下来做什么" onKeyDown={(e) => this.addTodo(e)} />
        <div className="items">
          { 
            this.state.todos_show.map(todo => {
              return (
                <Item
                todo={todo} 
                key={todo.id} 
                typeChange={this.typeChange}
                deleteTodo={this.deleteTodo}
                />
              ) 
            })
          }
        </div>
        <div className="tab">
          <Tabs 
            toggle={this.toggle}
            completed={this.state.completed}
            unFinishedTodoLength={this.state.length}
            clearTodos={this.clearTodos}
          />
        </div>
      </div>
    )
  }
  allChange(todos) { // 切换公用
    let todos_show = todos.filter(item => { return item.completed === this.state.completed; });
    if (this.state.completed === 'all') { todos_show = todos; };
    const length = this.state.todos.length - this.state.todos.filter(item => { return item.completed === 'completed'; }).length;
    this.setState({ todos, todos_show, length, });
  }
  typeChange(id, completed) { // 状态切换
    let todos = this.state.todos;
    todos.forEach(item => { if (item.id === id) { item.completed = completed; } });
    this.allChange(todos);
  }
  addTodo(event) { // 添加列表
    if (event.keyCode === 13 && this.state.content) {
      let todos = this.state.todos;
      const content = this.state.content;
      const count = this.state.count + 1;
      todos.push({
        id: count,
        content,
        completed: 'actived',
      });
      this.allChange(todos);
      this.setState({ count, content: '' });
    }
  }
  deleteTodo(id) {
    const todos = this.state.todos;
    todos.forEach((item, index) => { if (id === item.id) { todos.splice(index, 1); } });
    this.allChange(todos);
  }
  clearTodos() {
    this.setState({ count: 0, todos: [], todos_show: [], length: 0 });
  }
  toggle(completed) { // 列表切换
    let todos = this.state.todos;
    let todos_show = todos.filter(item => { return item.completed === completed; });
    if (completed === 'all') { todos_show = todos; };
    const length = this.state.todos.length - this.state.todos.filter(item => { return item.completed === 'completed'; }).length;
    this.setState({ todos_show, length, completed });
  }
  handleChange(e) { // inputValue监听
    this.setState({ content: e.target.value });
  }
}
export default Todo;