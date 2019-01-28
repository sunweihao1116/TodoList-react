import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './home.less';
import Todo from '../../components/Todo/Todo';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class Home extends Component {
  componentWillMount() {
   
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="Home">
        <Header></Header>
        <Todo/>
        <Footer></Footer>
      </div>
    );
  }
  // Change(todoItem) {
  //   console.log(todoItem);
  //   let list = [];
  //   let sum = 0;
  //   this.state.list.forEach((item, i) => {
  //     if (item.id === todoItem.id) {
  //       item.status = todoItem.status;
  //     };
  //     if (item.status === 1) {
  //       sum++
  //     }
  //     list.push(item);
  //   });
  //   this.setState({
  //     list,
  //     sum,
  //   });
  // }
}

export default Home;