import React, { Component } from 'react';
import './Tabs.less';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: ['all', 'actived', 'completed'],
    }
    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearAllCompleted = this.clearAllCompleted.bind(this);
  }
  render() {
    return (
      <div className="helper">
        <span className="left">{this.props.unFinishedTodoLength || 0} items left</span>
        <div className="tabs">
          {
            this.state.states.map(state => {
              return(
                <span key={state} className={state === this.props.completed ? 'actived' : ''} onClick={() => this.toggleFilter(state)} >{state}</span>
              )
            })
          }  
      </div>
      <span className="clear" onClick={this.clearAllCompleted}> Clear completed </span>
    </div>
    )
  }
  toggleFilter(state) {
    this.props.toggle(state);
  }
  clearAllCompleted() {
    console.log('clear');
    this.props.clearTodos();
  }
}

export default Tabs;