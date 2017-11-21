import React, { PureComponent } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { renderRoutes } from 'react-router-config';
import Header from '../header';
import ScrollToTop from '../helper/scollToTop';
import './layout.css';

class Root extends PureComponent {
  constructor(props) {
    super(props);
    this.timeout = { enter: 300, exit: 200 };
  }
  render() {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    return (
      <ScrollToTop>
        <div styleName='page-container'>
          <Header
            style={{ height: '55px', backgroundColor: '#FFF', borderBottom: '1px solid #d9d4d4' }}
            navbarSize='55px'
          />
          <TransitionGroup component="main" styleName="page-main">
            <CSSTransition key={currentKey} timeout={this.timeout} classNames="fade">
              <section styleName="page-main-inner">
                {renderRoutes(this.props.route.routes)}
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </ScrollToTop>
    );
  }
}

export default Root;
