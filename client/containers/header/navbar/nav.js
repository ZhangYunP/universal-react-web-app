import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatch } from '../../../redux/modules/toggleShowState';
import './navbar.css';

class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e, index) {
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    this.props.enterNav(left, width, index);
  }

  handleClick(e, index) {
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    this.props.clickNav(left, width, index);
  }

  handleLocation(left, width, index) {
    this.props.locationNav(left, width, index);
  }

  handleMouseLeave() {
    this.props.leaveNav();
  }

  componentDidMount() {
    const currentPath = window.location.pathname;
    const { navLinkMap } = this.props;
    let index = 0;
    let id = '';
    navLinkMap.every((navMap, i) => {
      if (navMap.path === currentPath) {
        id = navMap.name;
        index = i;
        return false;
      }
      return true;
    });
    if (id !== '') {
      const target = document.querySelector('#' + id);
      const targetLeft = target.offsetLeft;
      const targetWidth = target.offsetWidth;
      this.handleLocation(targetLeft, targetWidth, index);
    }
  }

  render() {
    const {
      navLinkMap,
      lineHeight,
      height,
      navLinkFontSize,
      activedIndex,
      linkColor,
      activeLinkColor
    } = this.props;
    return (
      <nav styleName='navbar-nav'>
        <ul styleName='nav-ul'>
          {
            navLinkMap.map((linkMap, index) => {
              return (
                <li
                  styleName='nav-li'
                  key={index}
                  onMouseLeave={this.handleMouseLeave}
                  onMouseEnter={(e) => { this.handleMouseEnter(e, index); }}
                  onClick={(e) => { this.handleClick(e, index); }}
                >
                  <Link
                    to={linkMap.path}
                    styleName='navbar-link'
                    id={linkMap.name}
                    style={{
                      height,
                      lineHeight,
                      fontSize: navLinkFontSize,
                      color: activedIndex === index ? activeLinkColor : linkColor
                    }}
                  >
                    {linkMap.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

export default connect(null, mapDispatch(['enterNav', 'clickNav', 'locationNav', 'leaveNav']))(Nav);
