import React, { PureComponent } from 'react';
import './navbar.css';

export default class NavLogoContainer extends PureComponent {
  render() {
    const {
      width, lineHeight, height, navLogo, title, logoImgWidth, logoImgHeight, logoImgPos
    } = this.props;
    return (
      <div styleName='navbar-logo-section' style={{ height }}>
        <a href="/" styleName='navbar-banner' style={{ width, height }}>
          <img
            src={navLogo}
            alt="logo"
            styleName='navbar-img'
            width={logoImgWidth}
            height={logoImgHeight}
            style={{ top: logoImgPos, left: logoImgPos }}
          />
        </a>
        {
          title ? (
              <span styleName='navbar-word' style={{ lineHeight }}>
                {title}
              </span>
            ) : null
        }
      </div>
    );
  }
}
