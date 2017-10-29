import React, { Component } from 'react';
import animates from '../../animates';
import './navbar.css';

class ActiveBar extends Component {
  render() {
    const { style } = this.props;
    return (<span styleName='navbar-active-bar' style={style}></span>);
  }
}

export default animates(ActiveBar);
