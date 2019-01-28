import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './item.less';

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.modelChange = this.modelChange.bind(this);
  }
  render() {
    return (
        <div className={ this.props.todo.completed === 'completed' ? 'completed todo-item' : 'todo-item' }>
          <input type="checkbox" className="toggle" onChange={this.modelChange} checked={this.props.todo.completed === 'completed'}/>
          <label> {this.props.todo.content}</label>
          <button className="destroy" onClick={this.deleteTodo}> </button>
        </div>
    )
  }
  deleteTodo() { // 删除
    this.props.deleteTodo(this.props.todo.id);
  }
  modelChange() {
    const completed = this.props.todo.completed === 'completed' ? 'actived' : 'completed';
    // console.log(state_update);
    this.props.typeChange(this.props.todo.id, completed)
  }
};

export default Item;