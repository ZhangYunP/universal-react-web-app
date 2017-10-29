import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Nav extends PureComponent {
  render() {
    const {
      navLinkMap,
      lineHeight,
      height,
      navLinkFontSize,
      activedIndex,
      linkColor,
      activeLinkColor,
      handleActiveBar
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
                  onMouseEnter={(e) => { handleActiveBar(e, 'mouseenter', index); }}
                  onMouseLeave={(e) => { handleActiveBar(e, 'mouseleave', index); }}
                  onClick={(e) => { handleActiveBar(e, 'click', index); }}
                >
                  <Link
                    to={linkMap.path}
                    styleName='navbar-link'
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
