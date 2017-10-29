import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from './nav';
import NavLogoContainer from './navLogoContainer';
import ActiveBar from './activeBar';
import { toggleShowStateActionCreator } from '../../../redux/modules/toggleShowState';
import './navbar.css';
/* eslint max-len: ["error", 200] */

class Navbar extends Component {
  constructor(props) {
    super(props);
    const { Height, Width, logoPadding } = this.props;
    this.activeLinkColor = '#00AAFF';
    this.linkColor = '#000';
    this.Width = parseInt(Width, 10);
    this.Height = parseInt(Height, 10);
    this.logoImgWidth = (this.Width - parseInt(logoPadding, 10)) + 'px';
    this.logoImgHeight = (this.Height - parseInt(logoPadding, 10)) + 'px';
    this.logoImgPos = (parseInt(logoPadding, 10) / 2) + 'px';
    this.activeBarHeight = 2;
    this.navbarSectionHeight = this.Height + this.activeBarHeight;
    this.handleActiveBar = this.handleActiveBar.bind(this);
  }

  handleActiveBar(e, showType, index) {
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    const { toggleShowState } = this.props;
    toggleShowState(showType, left, width, index);
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
      barWidth,
      finalPos,
      finalWidth,
      fromStorage
    } = this.props;
    return (
      <div styleName='navbar-main'>
        <NavLogoContainer
          title={title}
          navLogo={navLogo}
          lineHeight={Height}
          height={this.Height}
          width={this.Width}
          logoImgPos={this.logoImgPos}
          logoImgWidth={this.logoImgWidth}
          logoImgHeight={this.logoImgHeight}
        />
        <div styleName='navbar-nav-section' style={{ height: this.navbarSectionHeight }}>
          <Nav
            navLinkFontSize={navLinkFontSize}
            lineHeight={Height}
            navLinkMap={navLinkMap}
            height={this.Height}
            activedIndex={index}
            linkColor={this.linkColor}
            activeLinkColor={this.activeLinkColor}
            handleActiveBar={this.handleActiveBar}
          />
          <ActiveBar
            style={{
              height: this.activeBarHeight,
              top: this.Height,
              backgroundColor: this.activeLinkColor,
              width: fromStorage ? finalWidth : null,
              transform: fromStorage ? `matrix(1, 0, 0, 1, ${finalPos}, 0)` : null
            }}
            show={show}
            animates={{ etlf: { x: leftPos || 0, width: barWidth }, eflt: { x: finalPos || 0, width: finalWidth || 0 } }}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.toggleShowState.show,
    index: state.toggleShowState.index,
    leftPos: state.toggleShowState.leftPos,
    barWidth: state.toggleShowState.width,
    finalPos: state.toggleShowState.finalPos,
    finalWidth: state.toggleShowState.finalWidth,
    fromStorage: state.toggleShowState.fromStorage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      toggleShowState: toggleShowStateActionCreator
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
