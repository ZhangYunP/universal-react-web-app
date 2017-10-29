import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { renderRoutes } from 'react-router-config';
import Header from '../header';
import ScrollToTop from '../scollToTop';
import './layout.css';


const Layout = (props) => {
  const currentKey = props.location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };
  return (
    <ScrollToTop>
      <div styleName='page-container'>
        <Header
          style={{ height: '55px', backgroundColor: '#FFF', borderBottom: '1px solid #d9d4d4' }}
          navbarSize='55px'
        />
        <TransitionGroup component="main" styleName="page-main">
          <CSSTransition key={currentKey} timeout={timeout} styleNames="fade">
            <section styleName="page-main-inner">
              {renderRoutes(props.route.routes)}
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </ScrollToTop>
  );
};

export default Layout;
