import React from 'react';
import OgMeta from '../ogMeta';
import Navbar from './navbar';
import navLinkMap from './navLinkMap';
// import navImg from './navbar/logo.png';
import './header.css';

const Header = ({ style, navbarSize, ...rest }) => {
  const nav = (
    <header styleName='page-header' style={style} {...rest}>
      <Navbar
        navLinkMap={navLinkMap}
        title='demo'
        // navLogo={navImg}
        Width={navbarSize}
        Height={navbarSize}
        navLinkFontSize='16px'
        logoPadding='15px'
      />
      <OgMeta />
    </header>
  );
  return nav;
};

export default Header;
