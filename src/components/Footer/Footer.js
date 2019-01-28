import React, { Component } from 'react';
import './Footer.less';

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      author: 'swh1116',
    }
  }
  render() {
    return (
      <div id="footer">
        <span>written by {this.state.author}</span>
      </div>
    )
  }
}
export default Footer;