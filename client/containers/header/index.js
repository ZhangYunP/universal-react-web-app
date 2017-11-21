import React from 'react';
import OgMeta from '../helper/ogMeta';
import Navbar from './navbar';
import navLinkMap from './navLinkMap';
import navImg from './navbar/logo.png';
import './header.css';

const Header = ({ style, navbarSize, ...rest }) => {
  const nav = (
    <header styleName='page-header' style={style} {...rest}>
      <Navbar
        navLinkMap={navLinkMap}
        title='demo'
        Height={navbarSize}
        navLinkFontSize='16px'
        navLogo={navImg}
        logoWidth={navbarSize}
        logoPadding='15px'
      />
      <OgMeta />
    </header>
  );
  return nav;
};

export default Header;
