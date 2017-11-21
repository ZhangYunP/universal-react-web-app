import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './nav';
import NavLogoContainer from './navLogoContainer';
import ActiveBar from './activeBar';
import { mapState } from '../../../redux/modules/toggleShowState';
import './navbar.css';
/* eslint max-len: ["error", 200] */
/* eslint no-nested-ternary: 0 */

class Navbar extends Component {
  constructor(props) {
    super(props);
    const { Height, logoWidth, logoPadding } = this.props;
    this.linkColor = '#000';
    this.activeBarHeight = 2;
    this.defaultLocation = 'HOME';
    this.activeLinkColor = '#00AAFF';
    this.logoWidth = parseInt(logoWidth, 10);
    this.Height = parseInt(Height, 10);
    this.logoImgWidth = (this.logoWidth - parseInt(logoPadding, 10)) + 'px';
    this.logoImgHeight = (this.Height - parseInt(logoPadding, 10)) + 'px';
    this.logoImgPos = (parseInt(logoPadding, 10) / 2) + 'px';
    this.activeBarTop = this.Height - this.activeBarHeight;
  }

  static propTypes = {
    show: PropTypes.bool,
    index: PropTypes.number,
    leftPos: PropTypes.number,
    width: PropTypes.number,
    finalPos: PropTypes.number,
    finalWidth: PropTypes.number,
    title: PropTypes.string,
    Height: PropTypes.string,
    logoWidth: PropTypes.string,
    logoPadding: PropTypes.string,
    navLinkFontSize: PropTypes.string,
    navLinkMap: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }))
  }

  static defaultProps = {
    Height: '55px',
    logWidth: '55px',
    logoPadding: '10px',
    navLinkFontSize: '16px',
    show: false
  }

  render() {
    const {
      Height,
      navLogo,
      title,
      navLinkFontSize,
      navLinkMap,
      show,
      index,
      leftPos,
      width,
      finalPos,
      finalWidth,
      locationPos,
      locationWidth,
      isFirst
    } = this.props;

    return (
      <div styleName='navbar-main'>
        <NavLogoContainer
          title={title}
          navLogo={navLogo}
          lineHeight={Height}
          height={this.Height}
          width={this.logoWidth}
          logoImgPos={this.logoImgPos}
          logoImgWidth={this.logoImgWidth}
          logoImgHeight={this.logoImgHeight}
        />
        <div styleName='navbar-nav-section' style={{ height: this.Height }}>
          <Nav
            navLinkFontSize={navLinkFontSize}
            lineHeight={Height}
            navLinkMap={navLinkMap}
            height={this.Height}
            activedIndex={index}
            linkColor={this.linkColor}
            activeLinkColor={this.activeLinkColor}
          />
          <ActiveBar
            style={{
              height: this.activeBarHeight,
              top: this.activeBarTop,
              backgroundColor: this.activeLinkColor,
              width: isFirst ? locationWidth : finalWidth,
              left: isFirst ? locationPos : 0
            }}
            show={show}
            animates={{ etlf: { x: leftPos || 0, width }, eflt: { x: finalPos || 0, width: finalWidth || 0 } }}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapState([
  'show',
  'index',
  'leftPos',
  'width',
  'isFirst',
  'finalPos',
  'finalWidth',
  'locationPos',
  'locationWidth'
]))(Navbar);
