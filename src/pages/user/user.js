import React, { Component } from 'react';
// import { Link } from 'react-router';
import './user.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: 'ssss',
      date: new Date(),
      title: '我的',
      showChange: true,
      bottomTab: [
        {
          title: '首页',
          page: '', 
          icons: '',
        },
        {
          title: '购物车',
          page: '', 
          icons: '',
        },
        {
          title: '我的',
          page: '', 
          icons: '',     
        }
      ]
    };
    this.tick = this.tick.bind(this);
    this.tabChange = this.tabChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  componentWillMount() {
    console.log(this);
    // this.timer = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() { // 更新时间
    this.setState({
      date: new Date(),
    });
  }
  handleToggleClick() {
    console.log(this.state.showChange);
    this.setState(prevState => ({
      showChange: !prevState.showChange,
    }));
  }
  tabChange(title) {
    if (this.state.title === title) return;
    console.log('tabChange',title);
    this.setState({
      title,
    });
  }
  render() {
    const state = this.state;
    return (
      <div className="box">
        <header onClick={this.handleToggleClick}>{state.title}</header>
        <footer>
          {
            state.bottomTab.map((item, index) => {
              return (
                <div key={index} onClick={this.tabChange.bind(this, item.title)}>
                  {/* <Link to="/user">{item.title}</Link> */}
                </div>
              )
            })
          }
        </footer>
      </div>
    );
  }
}

export default User;