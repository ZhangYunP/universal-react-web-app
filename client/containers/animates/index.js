import { TweenMax, Bounce } from 'gsap';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Transition from 'react-transition-group/Transition';
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint max-len: 0 */
const defaultOptions = {
  enterDuration: 0.3,
  leaveDuration: 0.2,
  enterTo: {
    ease: Bounce.easeOut
  }
};

function withPageTransition(Animation, options = {}) {
  options = Object.assign(options, defaultOptions);
  return class NormalAnimation extends Component {
    componentWillEnter(animates) {
      const el = findDOMNode(this.transitionComponent);
      TweenMax.fromTo(
        el,
        options.enterDuration,
        Object.assign({}, options.enterFrom, { ...animates.eflt }),
        Object.assign({}, options.enterTo, { ...animates.etlf })
      );
    }

    componentWillLeave(animates) {
      const el = findDOMNode(this.transitionComponent);
      TweenMax.fromTo(
        el,
        options.leaveDuration,
        Object.assign({}, options.leaveFrom, { ...animates.etlf }),
        Object.assign({}, options.leaveTo, { ...animates.eflt })
      );
    }

    render() {
      const {
        show, style, animates, ...rest
      } = this.props;
      const enterTime = options.enterDuration * 1000;
      const exitTime = options.leaveDuration * 1000;
      return (
        <Transition
          in={show}
          timeout={{ enter: enterTime, exit: exitTime }}
          onEnter={() => { this.componentWillEnter.call(this, animates); }}
          onExit={() => { this.componentWillLeave.call(this, animates); }}
          >
          <Animation ref={compontent => this.transitionComponent = compontent} style={style} {...rest} />
        </Transition>
      );
    }
  };
}

export default function animates(Component) {
  return typeof arguments[0] === 'function'
    ? withPageTransition(Component)
    : Component => withPageTransition(Component, arguments[0]);
}
