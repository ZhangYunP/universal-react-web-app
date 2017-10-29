webpackJsonp([1],{

/***/ "./client/constants/index.js":
/*!***********************************!*\
  !*** ./client/constants/index.js ***!
  \***********************************/
/*! exports provided: projectName, PLUS, MINUS, TIMES, DIVIDE, ENSUREFIRSTNUMBER, ENSURESECONDNUMBER, FETCHSUCESS, FETCHERROR, SWITCHTYPE, ENTERNAV, LEAVENAV, CLICKNAV */
/*! exports used: CLICKNAV, DIVIDE, ENSUREFIRSTNUMBER, ENSURESECONDNUMBER, ENTERNAV, FETCHERROR, FETCHSUCESS, LEAVENAV, MINUS, PLUS, SWITCHTYPE, TIMES, projectName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return projectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TIMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ENSUREFIRSTNUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ENSURESECONDNUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCHSUCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCHERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SWITCHTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ENTERNAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LEAVENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLICKNAV; });
var projectName = __webpack_require__(/*! ../../package.json */ "./package.json").name;

var PLUS = '@' + projectName + '/counter/PLUS';
var MINUS = '@' + projectName + '/counter/MINUS';
var TIMES = '@' + projectName + '/counter/TIMES';
var DIVIDE = '@' + projectName + '/counter/DIVIDE';
var ENSUREFIRSTNUMBER = '@' + projectName + '/ensureNumber/ENSUREFIRSTNUMBER';
var ENSURESECONDNUMBER = '@' + projectName + '/ensureNumber/ENSURESECONDNUMBER';
var FETCHSUCESS = '@' + projectName + '/asyncFetchData/FETCHSUCESS';
var FETCHERROR = '@' + projectName + '/asyncFetchData/FETCHERROR';
var SWITCHTYPE = '@' + projectName + '/switchCounterType/SWITCHTYPE';
var ENTERNAV = '@' + projectName + '/toggleShowState/ENTERNAV';
var LEAVENAV = '@' + projectName + '/toggleShowState/LEAVENAV';
var CLICKNAV = '@' + projectName + '/toggleShowState/CLICKNAV';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(projectName, 'projectName', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(PLUS, 'PLUS', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(MINUS, 'MINUS', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(TIMES, 'TIMES', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(DIVIDE, 'DIVIDE', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(ENSUREFIRSTNUMBER, 'ENSUREFIRSTNUMBER', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(ENSURESECONDNUMBER, 'ENSURESECONDNUMBER', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(FETCHSUCESS, 'FETCHSUCESS', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(FETCHERROR, 'FETCHERROR', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(SWITCHTYPE, 'SWITCHTYPE', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(ENTERNAV, 'ENTERNAV', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(LEAVENAV, 'LEAVENAV', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');

  __REACT_HOT_LOADER__.register(CLICKNAV, 'CLICKNAV', '/home/polo/src/myapp/universal_react_web_app/client/constants/index.js');
}();

;

/***/ }),

/***/ "./client/containers/animates/index.js":
/*!*********************************************!*\
  !*** ./client/containers/animates/index.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animates;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint max-len: 0 */
var defaultOptions = {
  enterDuration: 0.3,
  leaveDuration: 0.2,
  enterTo: {
    ease: __WEBPACK_IMPORTED_MODULE_0_gsap__["Bounce"].easeOut
  }
};

function withPageTransition(Animation) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = Object.assign(options, defaultOptions);
  return function (_Component) {
    _inherits(NormalAnimation, _Component);

    function NormalAnimation() {
      _classCallCheck(this, NormalAnimation);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    NormalAnimation.prototype.componentWillEnter = function componentWillEnter(animates) {
      var el = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.transitionComponent);
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo(el, options.enterDuration, Object.assign({}, options.enterFrom, _extends({}, animates.eflt)), Object.assign({}, options.enterTo, _extends({}, animates.etlf)));
    };

    NormalAnimation.prototype.componentWillLeave = function componentWillLeave(animates) {
      var el = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.transitionComponent);
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo(el, options.leaveDuration, Object.assign({}, options.leaveFrom, _extends({}, animates.etlf)), Object.assign({}, options.leaveTo, _extends({}, animates.eflt)));
    };

    NormalAnimation.prototype.render = function render() {
      var _this2 = this;

      var _props = this.props,
          show = _props.show,
          style = _props.style,
          animates = _props.animates,
          rest = _objectWithoutProperties(_props, ['show', 'style', 'animates']);

      var enterTime = options.enterDuration * 1000;
      var exitTime = options.leaveDuration * 1000;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default.a,
        {
          'in': show,
          timeout: { enter: enterTime, exit: exitTime },
          onEnter: function onEnter() {
            _this2.componentWillEnter.call(_this2, animates);
          },
          onExit: function onExit() {
            _this2.componentWillLeave.call(_this2, animates);
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Animation, _extends({ ref: function ref(compontent) {
            return _this2.transitionComponent = compontent;
          }, style: style }, rest))
      );
    };

    return NormalAnimation;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
}

function animates(Component) {
  var _arguments = arguments;

  return typeof arguments[0] === 'function' ? withPageTransition(Component) : function (Component) {
    return withPageTransition(Component, _arguments[0]);
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', '/home/polo/src/myapp/universal_react_web_app/client/containers/animates/index.js');

  __REACT_HOT_LOADER__.register(withPageTransition, 'withPageTransition', '/home/polo/src/myapp/universal_react_web_app/client/containers/animates/index.js');

  __REACT_HOT_LOADER__.register(animates, 'animates', '/home/polo/src/myapp/universal_react_web_app/client/containers/animates/index.js');
}();

;

/***/ }),

/***/ "./client/containers/firstPage.js":
/*!****************************************!*\
  !*** ./client/containers/firstPage.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var First = function First() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'this is one page'
  );
};

var _default = First;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(First, 'First', '/home/polo/src/myapp/universal_react_web_app/client/containers/firstPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/firstPage.js');
}();

;

/***/ }),

/***/ "./client/containers/header/header.css":
/*!*********************************************!*\
  !*** ./client/containers/header/header.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./header.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/header.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./header.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/header.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./header.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/header.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/containers/header/index.js":
/*!*******************************************!*\
  !*** ./client/containers/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ogMeta__ = __webpack_require__(/*! ../ogMeta */ "./client/containers/ogMeta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar__ = __webpack_require__(/*! ./navbar */ "./client/containers/header/navbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navLinkMap__ = __webpack_require__(/*! ./navLinkMap */ "./client/containers/header/navLinkMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_css__ = __webpack_require__(/*! ./header.css */ "./client/containers/header/header.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__header_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





// import navImg from './navbar/logo.png';


var Header = function Header(_ref) {
  var style = _ref.style,
      navbarSize = _ref.navbarSize,
      rest = _objectWithoutProperties(_ref, ['style', 'navbarSize']);

  var nav = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    _extends({ className: 'client-containers-header-___header__page-header___4AMDa', style: style }, rest),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__navbar__["a" /* default */], {
      navLinkMap: __WEBPACK_IMPORTED_MODULE_3__navLinkMap__["a" /* default */],
      title: 'demo'
      // navLogo={navImg}
      , Width: navbarSize,
      Height: navbarSize,
      navLinkFontSize: '16px',
      logoPadding: '15px'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ogMeta__["a" /* default */], null)
  );
  return nav;
};

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/index.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navLinkMap.js":
/*!************************************************!*\
  !*** ./client/containers/header/navLinkMap.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var navLinkMap = [{
  path: '/home',
  name: 'HOME'
}, {
  path: '/one',
  name: 'ONE'
}, {
  path: '/two',
  name: 'REDIRECT'
}, {
  path: '/three',
  name: 'THREE'
}, {
  path: '/four',
  name: 'FOUR'
}];

var _default = navLinkMap;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(navLinkMap, 'navLinkMap', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navLinkMap.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navLinkMap.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navbar/activeBar.js":
/*!******************************************************!*\
  !*** ./client/containers/header/navbar/activeBar.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animates__ = __webpack_require__(/*! ../../animates */ "./client/containers/animates/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_css__ = __webpack_require__(/*! ./navbar.css */ "./client/containers/header/navbar/navbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__navbar_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ActiveBar = function (_Component) {
  _inherits(ActiveBar, _Component);

  function ActiveBar() {
    _classCallCheck(this, ActiveBar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ActiveBar.prototype.render = function render() {
    var style = this.props.style;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'client-containers-header-navbar-___navbar__navbar-active-bar___2dZjZ', style: style });
  };

  return ActiveBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1__animates__["a" /* default */])(ActiveBar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ActiveBar, 'ActiveBar', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/activeBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/activeBar.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navbar/index.js":
/*!**************************************************!*\
  !*** ./client/containers/header/navbar/index.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(/*! ./nav */ "./client/containers/header/navbar/nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navLogoContainer__ = __webpack_require__(/*! ./navLogoContainer */ "./client/containers/header/navbar/navLogoContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activeBar__ = __webpack_require__(/*! ./activeBar */ "./client/containers/header/navbar/activeBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_toggleShowState__ = __webpack_require__(/*! ../../../redux/modules/toggleShowState */ "./client/redux/modules/toggleShowState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_css__ = __webpack_require__(/*! ./navbar.css */ "./client/containers/header/navbar/navbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__navbar_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/* eslint max-len: ["error", 200] */

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var _this$props = _this.props,
        Height = _this$props.Height,
        Width = _this$props.Width,
        logoPadding = _this$props.logoPadding;

    _this.activeLinkColor = '#00AAFF';
    _this.linkColor = '#000';
    _this.Width = parseInt(Width, 10);
    _this.Height = parseInt(Height, 10);
    _this.logoImgWidth = _this.Width - parseInt(logoPadding, 10) + 'px';
    _this.logoImgHeight = _this.Height - parseInt(logoPadding, 10) + 'px';
    _this.logoImgPos = parseInt(logoPadding, 10) / 2 + 'px';
    _this.activeBarHeight = 2;
    _this.navbarSectionHeight = _this.Height + _this.activeBarHeight;
    _this.handleActiveBar = _this.handleActiveBar.bind(_this);
    return _this;
  }

  Navbar.prototype.handleActiveBar = function handleActiveBar(e, showType, index) {
    var left = e.target.offsetLeft;
    var width = e.target.offsetWidth;
    var toggleShowState = this.props.toggleShowState;

    toggleShowState(showType, left, width, index);
  };

  Navbar.prototype.render = function render() {
    var _props = this.props,
        Height = _props.Height,
        navLogo = _props.navLogo,
        title = _props.title,
        navLinkFontSize = _props.navLinkFontSize,
        navLinkMap = _props.navLinkMap,
        show = _props.show,
        index = _props.index,
        leftPos = _props.leftPos,
        barWidth = _props.barWidth,
        finalPos = _props.finalPos,
        finalWidth = _props.finalWidth,
        fromStorage = _props.fromStorage;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: '' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__navLogoContainer__["a" /* default */], {
        title: title,
        navLogo: navLogo,
        lineHeight: Height,
        height: this.Height,
        width: this.Width,
        logoImgPos: this.logoImgPos,
        logoImgWidth: this.logoImgWidth,
        logoImgHeight: this.logoImgHeight
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'client-containers-header-navbar-___navbar__navbar-nav-section___1xROP', style: { height: this.navbarSectionHeight } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__nav__["a" /* default */], {
          navLinkFontSize: navLinkFontSize,
          lineHeight: Height,
          navLinkMap: navLinkMap,
          height: this.Height,
          activedIndex: index,
          linkColor: this.linkColor,
          activeLinkColor: this.activeLinkColor,
          handleActiveBar: this.handleActiveBar
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__activeBar__["a" /* default */], {
          style: {
            height: this.activeBarHeight,
            top: this.Height,
            backgroundColor: this.activeLinkColor,
            width: fromStorage ? finalWidth : null,
            transform: fromStorage ? 'matrix(1, 0, 0, 1, ' + finalPos + ', 0)' : null
          },
          show: show,
          animates: { etlf: { x: leftPos || 0, width: barWidth }, eflt: { x: finalPos || 0, width: finalWidth || 0 } }
        })
      )
    );
  };

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* bindActionCreators */])({
    toggleShowState: __WEBPACK_IMPORTED_MODULE_6__redux_modules_toggleShowState__["b" /* toggleShowStateActionCreator */]
  }, dispatch));
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Navbar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navbar, 'Navbar', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/index.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navbar/nav.js":
/*!************************************************!*\
  !*** ./client/containers/header/navbar/nav.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_css__ = __webpack_require__(/*! ./navbar.css */ "./client/containers/header/navbar/navbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__navbar_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Nav = function (_PureComponent) {
  _inherits(Nav, _PureComponent);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Nav.prototype.render = function render() {
    var _props = this.props,
        navLinkMap = _props.navLinkMap,
        lineHeight = _props.lineHeight,
        height = _props.height,
        navLinkFontSize = _props.navLinkFontSize,
        activedIndex = _props.activedIndex,
        linkColor = _props.linkColor,
        activeLinkColor = _props.activeLinkColor,
        handleActiveBar = _props.handleActiveBar;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'client-containers-header-navbar-___navbar__navbar-nav___LSQc-' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'client-containers-header-navbar-___navbar__nav-ul___1pSOP' },
        navLinkMap.map(function (linkMap, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              className: 'client-containers-header-navbar-___navbar__nav-li___2BzNL',
              key: index,
              onMouseEnter: function onMouseEnter(e) {
                handleActiveBar(e, 'mouseenter', index);
              },
              onMouseLeave: function onMouseLeave(e) {
                handleActiveBar(e, 'mouseleave', index);
              },
              onClick: function onClick(e) {
                handleActiveBar(e, 'click', index);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
              {
                to: linkMap.path,
                className: 'client-containers-header-navbar-___navbar__navbar-link___1bOsK',
                style: {
                  height: height,
                  lineHeight: lineHeight,
                  fontSize: navLinkFontSize,
                  color: activedIndex === index ? activeLinkColor : linkColor
                }
              },
              linkMap.name
            )
          );
        })
      )
    );
  };

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var _default = Nav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/nav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/nav.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navbar/navLogoContainer.js":
/*!*************************************************************!*\
  !*** ./client/containers/header/navbar/navLogoContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_css__ = __webpack_require__(/*! ./navbar.css */ "./client/containers/header/navbar/navbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navbar_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NavLogoContainer = function (_PureComponent) {
  _inherits(NavLogoContainer, _PureComponent);

  function NavLogoContainer() {
    _classCallCheck(this, NavLogoContainer);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  NavLogoContainer.prototype.render = function render() {
    var _props = this.props,
        width = _props.width,
        lineHeight = _props.lineHeight,
        height = _props.height,
        navLogo = _props.navLogo,
        title = _props.title,
        logoImgWidth = _props.logoImgWidth,
        logoImgHeight = _props.logoImgHeight,
        logoImgPos = _props.logoImgPos;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'client-containers-header-navbar-___navbar__navbar-logo-section___2iq8z', style: { height: height } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: '/', className: 'client-containers-header-navbar-___navbar__navbar-banner___3DivZ', style: { width: width, height: height } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
          src: navLogo,
          alt: 'logo',
          className: '',
          width: logoImgWidth,
          height: logoImgHeight,
          style: { top: logoImgPos, left: logoImgPos }
        })
      ),
      title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'client-containers-header-navbar-___navbar__navbar-word___16Ee2', style: { lineHeight: lineHeight } },
        title
      ) : null
    );
  };

  return NavLogoContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var _default = NavLogoContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavLogoContainer, 'NavLogoContainer', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/navLogoContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/header/navbar/navLogoContainer.js');
}();

;

/***/ }),

/***/ "./client/containers/header/navbar/navbar.css":
/*!****************************************************!*\
  !*** ./client/containers/header/navbar/navbar.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./navbar.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/navbar/navbar.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../../node_modules/css-loader??ref--5-1!./navbar.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/navbar/navbar.css", function() {
			var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!./navbar.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/navbar/navbar.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/containers/home/home.css":
/*!*****************************************!*\
  !*** ./client/containers/home/home.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./home.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/home/home.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./home.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/home/home.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./home.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/home/home.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/containers/home/index.js":
/*!*****************************************!*\
  !*** ./client/containers/home/index.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_asyncFetchData__ = __webpack_require__(/*! ../../redux/modules/asyncFetchData */ "./client/redux/modules/asyncFetchData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_modules_counter__ = __webpack_require__(/*! ../../redux/modules/counter */ "./client/redux/modules/counter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redux_modules_switchCounterType__ = __webpack_require__(/*! ../../redux/modules/switchCounterType */ "./client/redux/modules/switchCounterType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_modules_ensureNumber__ = __webpack_require__(/*! ../../redux/modules/ensureNumber */ "./client/redux/modules/ensureNumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_css__ = __webpack_require__(/*! ./home.css */ "./client/containers/home/home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__home_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var calcMethods = {
  PLUS: '+',
  MINUS: '-',
  TIMES: '*',
  DIVIDE: '/'
};
var methods = Object.keys(calcMethods);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.activeBtn = _this.activeBtn.bind(_this);
    _this.scrollTop = _this.scrollTop.bind(_this);
    return _this;
  }

  Home.fetchdata = function fetchdata(store) {
    return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_modules_asyncFetchData__["a" /* asyncFetchDataActionCreator */])());
  };

  Home.prototype.componentDidMount = function componentDidMount() {
    this.props.fetchdata();
  };

  Home.prototype.handleNumberChange = function handleNumberChange(e, isFirst) {
    var ensurenum = this.props.ensurenum;

    var currentValue = e.target.value;
    var number = parseFloat(currentValue);
    ensurenum(number, isFirst);
  };

  Home.prototype.activeBtn = function activeBtn(e) {
    var switchtype = this.props.switchtype;

    var btnType = e.target.value;
    switchtype(btnType);
  };

  Home.prototype.scrollTop = function scrollTop() {
    __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenLite"].to(window, 1000, { scrollTo: 0 });
  };

  Home.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        count = _props.count,
        calc = _props.calc,
        type = _props.type,
        number1 = _props.number1,
        number2 = _props.number2,
        data = _props.data;

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      { className: 'client-containers-home-___home__page-home___2QVsr' },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'form',
        { className: '' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'div',
          { className: '' },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
            type: 'text',
            className: '',
            onChange: function onChange(e) {
              _this2.handleNumberChange.call(_this2, e, true);
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            { style: { display: 'inline-block' } },
            methods.map(function (method, index) {
              var backgroundColor = type === method ? 'red' : 'white';
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
                type: 'button',
                className: '',
                value: method,
                key: index,
                onClick: _this2.activeBtn,
                style: { backgroundColor: backgroundColor }
              });
            })
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
            type: 'text',
            className: '',
            onChange: function onChange(e) {
              _this2.handleNumberChange.call(_this2, e, false);
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
            type: 'button',
            className: '',
            onClick: function onClick() {
              calc(type, number1, number2);
            },
            value: 'submit'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        null,
        'current number: ',
        count
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { className: '' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          null,
          'fetchdata: ',
          JSON.stringify(data)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'button',
        { className: 'client-containers-home-___home__btn-back-top___Y6u66', onClick: this.scrollTop },
        'toTop'
      )
    );
  };

  return Home;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

Home.propTypes = {
  count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  calc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  ensurenum: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  switchtype: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  number1: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  number2: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

Home.defaultProps = {
  count: 0
};

function mapStateToProps(state) {
  return {
    data: state.asyncFetchData.data,
    count: state.counter.count,
    type: state.switchCounterType.method,
    number1: state.ensureNumber.one,
    number2: state.ensureNumber.two
  };
}

function mapDispatchToProps(dispatch) {
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4_redux__["b" /* bindActionCreators */])({
    fetchdata: __WEBPACK_IMPORTED_MODULE_6__redux_modules_asyncFetchData__["a" /* asyncFetchDataActionCreator */],
    calc: __WEBPACK_IMPORTED_MODULE_7__redux_modules_counter__["a" /* counterActionCreator */],
    ensurenum: __WEBPACK_IMPORTED_MODULE_9__redux_modules_ensureNumber__["b" /* ensureNumberActionCreator */],
    switchtype: __WEBPACK_IMPORTED_MODULE_8__redux_modules_switchCounterType__["b" /* switchCounterTypeActionCreator */]
  }, dispatch));
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Home);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(calcMethods, 'calcMethods', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');

  __REACT_HOT_LOADER__.register(methods, 'methods', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');

  __REACT_HOT_LOADER__.register(Home, 'Home', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/home/index.js');
}();

;

/***/ }),

/***/ "./client/containers/index.js":
/*!************************************!*\
  !*** ./client/containers/index.js ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(/*! ../routes */ "./client/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__normalize_css__ = __webpack_require__(/*! ./normalize.css */ "./client/containers/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__normalize_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
      null,
      Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["a" /* renderRoutes */])(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])
    );
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/home/polo/src/myapp/universal_react_web_app/client/containers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/index.js');
}();

;

/***/ }),

/***/ "./client/containers/layout/index.js":
/*!*******************************************!*\
  !*** ./client/containers/layout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__(/*! ../header */ "./client/containers/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scollToTop__ = __webpack_require__(/*! ../scollToTop */ "./client/containers/scollToTop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_css__ = __webpack_require__(/*! ./layout.css */ "./client/containers/layout/layout.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__layout_css__);







var Layout = function Layout(props) {
  var currentKey = props.location.pathname.split('/')[1] || '/';
  var timeout = { enter: 300, exit: 200 };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4__scollToTop__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: '' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
        style: { height: '55px', backgroundColor: '#FFF', borderBottom: '1px solid #d9d4d4' },
        navbarSize: '55px'
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_transition_group__["TransitionGroup"],
        { component: 'main', className: 'client-containers-layout-___layout__page-main___Ub6bV' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_transition_group__["CSSTransition"],
          { key: currentKey, timeout: timeout, styleNames: 'fade', appear: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'client-containers-layout-___layout__page-main-inner___2tRaT' },
            Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["a" /* renderRoutes */])(props.route.routes)
          )
        )
      )
    )
  );
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, 'Layout', '/home/polo/src/myapp/universal_react_web_app/client/containers/layout/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/layout/index.js');
}();

;

/***/ }),

/***/ "./client/containers/layout/layout.css":
/*!*********************************************!*\
  !*** ./client/containers/layout/layout.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./layout.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/layout/layout.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./layout.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/layout/layout.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./layout.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/layout/layout.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/containers/normalize.css":
/*!*****************************************!*\
  !*** ./client/containers/normalize.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!./normalize.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/normalize.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../node_modules/css-loader??ref--5-1!./normalize.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/normalize.css", function() {
			var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!./normalize.css */ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/normalize.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./client/containers/notFound.js":
/*!***************************************!*\
  !*** ./client/containers/notFound.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



var NotFound = function NotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          '404 : Not Found'
        )
      );
    } });
};

var _default = NotFound;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/home/polo/src/myapp/universal_react_web_app/client/containers/notFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/notFound.js');
}();

;

/***/ }),

/***/ "./client/containers/ogMeta.js":
/*!*************************************!*\
  !*** ./client/containers/ogMeta.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var OgMeta = function (_Component) {
  _inherits(OgMeta, _Component);

  function OgMeta() {
    _classCallCheck(this, OgMeta);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  OgMeta.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: this.props.title }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: this.props.url }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: this.props.image }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:description', content: this.props.description })
    );
  };

  return OgMeta;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = OgMeta;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OgMeta, 'OgMeta', '/home/polo/src/myapp/universal_react_web_app/client/containers/ogMeta.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/ogMeta.js');
}();

;

/***/ }),

/***/ "./client/containers/scollToTop.js":
/*!*****************************************!*\
  !*** ./client/containers/scollToTop.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ScrollToTop.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  };

  ScrollToTop.prototype.render = function render() {
    return this.props.children;
  };

  return ScrollToTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["withRouter"])(ScrollToTop);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', '/home/polo/src/myapp/universal_react_web_app/client/containers/scollToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/scollToTop.js');
}();

;

/***/ }),

/***/ "./client/containers/secondPage.js":
/*!*****************************************!*\
  !*** ./client/containers/secondPage.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



var Second = function Second() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 302;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Redirect */], { from: '/two', to: '/one' });
    } });
};

var _default = Second;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Second, 'Second', '/home/polo/src/myapp/universal_react_web_app/client/containers/secondPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/secondPage.js');
}();

;

/***/ }),

/***/ "./client/containers/thridPage.js":
/*!****************************************!*\
  !*** ./client/containers/thridPage.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Thrid = function Thrid(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'this is three page'
  );
};

var _default = Thrid;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Thrid, 'Thrid', '/home/polo/src/myapp/universal_react_web_app/client/containers/thridPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/containers/thridPage.js');
}();

;

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_configureStore__ = __webpack_require__(/*! ./redux/configureStore */ "./client/redux/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__(/*! ./containers */ "./client/containers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_hot_loader__);






// import registerServiceWorker from './registerServiceWorker';

var env = "development" || 'development';

var initialState = window.__INITIAL_STATE__;

var store = Object(__WEBPACK_IMPORTED_MODULE_3__redux_configureStore__["a" /* default */])(initialState);

var rootElement = document.getElementById('root');

var renderComponent = function renderComponent(App) {
  if (env === 'development') {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["hydrate"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_hot_loader__["AppContainer"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null)
      )
    ), rootElement);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["hydrate"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
      { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null)
    ), rootElement);
  }
};

renderComponent(__WEBPACK_IMPORTED_MODULE_4__containers__["default"]);

if (module.hot && env === 'development') {
  module.hot.accept(/*! ./containers */ "./client/containers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__(/*! ./containers */ "./client/containers/index.js"); (function () {
    renderComponent(__WEBPACK_IMPORTED_MODULE_4__containers__["default"]);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

// registerServiceWorker();

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(env, 'env', '/home/polo/src/myapp/universal_react_web_app/client/index.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/index.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/home/polo/src/myapp/universal_react_web_app/client/index.js');

  __REACT_HOT_LOADER__.register(rootElement, 'rootElement', '/home/polo/src/myapp/universal_react_web_app/client/index.js');

  __REACT_HOT_LOADER__.register(renderComponent, 'renderComponent', '/home/polo/src/myapp/universal_react_web_app/client/index.js');
}();

;

/***/ }),

/***/ "./client/redux/configureStore.js":
/*!****************************************!*\
  !*** ./client/redux/configureStore.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_exenv__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_exenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_exenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_remote_redux_devtools__ = __webpack_require__(/*! remote-redux-devtools */ "./node_modules/remote-redux-devtools/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_remote_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_remote_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules__ = __webpack_require__(/*! ./modules */ "./client/redux/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__persistStore_config__ = __webpack_require__(/*! ./persistStore.config */ "./client/redux/persistStore.config.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var env = "development" || 'development';

var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];

function configureStore(initState) {
  var enhancerArgs = [__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */].apply(undefined, middleware), Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* autoRehydrate */])()];

  var composeEnhancers = Object(__WEBPACK_IMPORTED_MODULE_4_remote_redux_devtools__["composeWithDevTools"])({});

  var enhancer = composeEnhancers.apply(undefined, enhancerArgs);

  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_5__modules__["default"], initState, enhancer);

  if (__WEBPACK_IMPORTED_MODULE_2_exenv__["canUseDOM"]) {
    Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["b" /* persistStore */])(store, _extends({}, __WEBPACK_IMPORTED_MODULE_6__persistStore_config__["a" /* persistConfig */]), function () {
      console.log('rehydration complete');
    });
  }

  if (env === 'development' && module.hot) {
    var acceptCallback = function acceptCallback() {
      var nextRootReducer = __webpack_require__(/*! ./modules/index */ "./client/redux/modules/index.js").default;
      store.replaceReducer(nextRootReducer);
    };
    module.hot.accept(/*! ./modules */ "./client/redux/modules/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_5__modules__ = __webpack_require__(/*! ./modules */ "./client/redux/modules/index.js"); (acceptCallback)(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  }

  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(env, 'env', '/home/polo/src/myapp/universal_react_web_app/client/redux/configureStore.js');

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/home/polo/src/myapp/universal_react_web_app/client/redux/configureStore.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/home/polo/src/myapp/universal_react_web_app/client/redux/configureStore.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/asyncFetchData.js":
/*!************************************************!*\
  !*** ./client/redux/modules/asyncFetchData.js ***!
  \************************************************/
/*! exports provided: default, asyncFetchDataActionCreator */
/*! exports used: asyncFetchDataActionCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = asyncFetchData;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncFetchDataActionCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ../../constants */ "./client/constants/index.js");



var initialState = {
  data: {},
  err: ''
};

function asyncFetchData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* FETCHSUCESS */]:
      return Object.assign({}, state, { data: action.data });
    case __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* FETCHERROR */]:
      return Object.assign({}, state, { err: action.err });
    default:
      return state;
  }
}

var asyncFetchDataActionCreator = function asyncFetchDataActionCreator() {
  return function (dispatch) {
    return fetch('https://route.showapi.com/1438-2', { mode: 'cors' }).then(function (res) {
      return res.json();
    }).then(function (json) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* FETCHSUCESS */],
        data: json
      });
    }).catch(function (e) {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* FETCHERROR */],
        err: e
      });
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/asyncFetchData.js');

  __REACT_HOT_LOADER__.register(asyncFetchData, 'asyncFetchData', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/asyncFetchData.js');

  __REACT_HOT_LOADER__.register(asyncFetchDataActionCreator, 'asyncFetchDataActionCreator', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/asyncFetchData.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/counter.js":
/*!*****************************************!*\
  !*** ./client/redux/modules/counter.js ***!
  \*****************************************/
/*! exports provided: default, counterActionCreator */
/*! exports used: counterActionCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = counter;
/* harmony export (immutable) */ __webpack_exports__["a"] = counterActionCreator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ../../constants */ "./client/constants/index.js");

/* eslint no-param-reassign: 0 */
var initialState = {
  count: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLUS */]:
      return Object.assign({}, state, { count: action.number1 + action.number2 });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* MINUS */]:
      return Object.assign({}, state, { count: action.number1 - action.number2 });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* TIMES */]:
      return Object.assign({}, state, { count: action.number1 * action.number2 });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* DIVIDE */]:
      return Object.assign({}, state, { count: action.number1 / action.number2 });
    default:
      return state;
  }
}

function counterActionCreator(type, number1, number2) {
  return function (dispatch) {
    type = '@' + __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* projectName */] + '/counter/' + type;
    dispatch({
      type: type,
      number1: number1,
      number2: number2
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/counter.js');

  __REACT_HOT_LOADER__.register(counter, 'counter', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/counter.js');

  __REACT_HOT_LOADER__.register(counterActionCreator, 'counterActionCreator', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/counter.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/ensureNumber.js":
/*!**********************************************!*\
  !*** ./client/redux/modules/ensureNumber.js ***!
  \**********************************************/
/*! exports provided: default, ensureNumberActionCreator */
/*! exports used: default, ensureNumberActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ensureNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = ensureNumberActionCreator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ../../constants */ "./client/constants/index.js");


var initialState = {
  one: 0,
  two: 0
};

function ensureNumber() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ENSUREFIRSTNUMBER */]:
      return Object.assign({}, state, { one: action.number });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* ENSURESECONDNUMBER */]:
      return Object.assign({}, state, { two: action.number });
    default:
      return state;
  }
}

function ensureNumberActionCreator(number, isFirst) {
  return function (dispatch) {
    var type = isFirst ? __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ENSUREFIRSTNUMBER */] : __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* ENSURESECONDNUMBER */];
    return dispatch({
      type: type,
      number: number
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/ensureNumber.js');

  __REACT_HOT_LOADER__.register(ensureNumber, 'ensureNumber', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/ensureNumber.js');

  __REACT_HOT_LOADER__.register(ensureNumberActionCreator, 'ensureNumberActionCreator', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/ensureNumber.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/index.js":
/*!***************************************!*\
  !*** ./client/redux/modules/index.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter__ = __webpack_require__(/*! ./counter */ "./client/redux/modules/counter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ensureNumber__ = __webpack_require__(/*! ./ensureNumber */ "./client/redux/modules/ensureNumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asyncFetchData__ = __webpack_require__(/*! ./asyncFetchData */ "./client/redux/modules/asyncFetchData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__switchCounterType__ = __webpack_require__(/*! ./switchCounterType */ "./client/redux/modules/switchCounterType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toggleShowState__ = __webpack_require__(/*! ./toggleShowState */ "./client/redux/modules/toggleShowState.js");







var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
  counter: __WEBPACK_IMPORTED_MODULE_1__counter__["b" /* default */],
  ensureNumber: __WEBPACK_IMPORTED_MODULE_2__ensureNumber__["a" /* default */],
  asyncFetchData: __WEBPACK_IMPORTED_MODULE_3__asyncFetchData__["b" /* default */],
  switchCounterType: __WEBPACK_IMPORTED_MODULE_4__switchCounterType__["a" /* default */],
  toggleShowState: __WEBPACK_IMPORTED_MODULE_5__toggleShowState__["a" /* default */]
});

var _default = rootReducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootReducer, 'rootReducer', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/index.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/switchCounterType.js":
/*!***************************************************!*\
  !*** ./client/redux/modules/switchCounterType.js ***!
  \***************************************************/
/*! exports provided: default, switchCounterTypeActionCreator */
/*! exports used: default, switchCounterTypeActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchCounterType;
/* harmony export (immutable) */ __webpack_exports__["b"] = switchCounterTypeActionCreator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ../../constants */ "./client/constants/index.js");


var initialState = {
  method: ''
};

function switchCounterType() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* SWITCHTYPE */]:
      return Object.assign({}, state, { method: action.method });
    default:
      return state;
  }
}

function switchCounterTypeActionCreator(method) {
  return function (dispatch) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* SWITCHTYPE */],
      method: method
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/switchCounterType.js');

  __REACT_HOT_LOADER__.register(switchCounterType, 'switchCounterType', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/switchCounterType.js');

  __REACT_HOT_LOADER__.register(switchCounterTypeActionCreator, 'switchCounterTypeActionCreator', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/switchCounterType.js');
}();

;

/***/ }),

/***/ "./client/redux/modules/toggleShowState.js":
/*!*************************************************!*\
  !*** ./client/redux/modules/toggleShowState.js ***!
  \*************************************************/
/*! exports provided: default, toggleShowStateActionCreator */
/*! exports used: default, toggleShowStateActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleShowState;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleShowStateActionCreator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ../../constants */ "./client/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_persist_constants__ = __webpack_require__(/*! redux-persist/constants */ "./node_modules/redux-persist/es/constants.js");



var initialState = {
  show: false,
  hold: false
};
/* eslint no-case-declarations: 0 */
/* eslint no-param-reassign: 0 */
function toggleShowState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  //  console.log(state); state一直在变，为这个reduce上次返回的state
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ENTERNAV */]:
      return Object.assign({}, state, {
        show: true,
        leftPos: action.left,
        width: action.width,
        index: action.index
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* LEAVENAV */]:
      return Object.assign({}, state, {
        show: false,
        finalPos: state.hold ? state.finalPos : 0,
        finalWidth: state.hold ? state.finalWidth : 0,
        index: state.hold ? state.clickedIndex : -1
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* CLICKNAV */]:
      return Object.assign({}, state, {
        hold: true,
        finalPos: action.left,
        finalWidth: action.width,
        index: action.index,
        clickedIndex: action.index
      });
    case __WEBPACK_IMPORTED_MODULE_1_redux_persist_constants__["b" /* REHYDRATE */]:
      var incoming = action.payload.toggleShowState;
      if (incoming) return Object.assign({}, state, incoming, { fromStorage: true });
      return state;
    default:
      return state;
  }
}

function toggleShowStateActionCreator(showType, left, width, index) {
  if (showType === 'mouseenter') {
    showType = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ENTERNAV */];
  } else if (showType === 'click') {
    showType = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* CLICKNAV */];
  } else {
    showType = __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* LEAVENAV */];
  }
  return function (dispatch) {
    dispatch({
      type: showType,
      left: left,
      width: width,
      index: index
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/toggleShowState.js');

  __REACT_HOT_LOADER__.register(toggleShowState, 'toggleShowState', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/toggleShowState.js');

  __REACT_HOT_LOADER__.register(toggleShowStateActionCreator, 'toggleShowStateActionCreator', '/home/polo/src/myapp/universal_react_web_app/client/redux/modules/toggleShowState.js');
}();

;

/***/ }),

/***/ "./client/redux/persistStore.config.js":
/*!*********************************************!*\
  !*** ./client/redux/persistStore.config.js ***!
  \*********************************************/
/*! exports provided: persistConfig */
/*! exports used: persistConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return persistConfig; });
var persistConfig = {
  whitelist: ['toggleShowState']
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(persistConfig, 'persistConfig', '/home/polo/src/myapp/universal_react_web_app/client/redux/persistStore.config.js');
}();

;

/***/ }),

/***/ "./client/routes/index.js":
/*!********************************!*\
  !*** ./client/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_layout__ = __webpack_require__(/*! ../containers/layout */ "./client/containers/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_home__ = __webpack_require__(/*! ../containers/home */ "./client/containers/home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_firstPage__ = __webpack_require__(/*! ../containers/firstPage */ "./client/containers/firstPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_secondPage__ = __webpack_require__(/*! ../containers/secondPage */ "./client/containers/secondPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_thridPage__ = __webpack_require__(/*! ../containers/thridPage */ "./client/containers/thridPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_notFound__ = __webpack_require__(/*! ../containers/notFound */ "./client/containers/notFound.js");







var routes = [{
  component: __WEBPACK_IMPORTED_MODULE_0__containers_layout__["a" /* default */],
  routes: [{
    path: '/',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_1__containers_home__["a" /* default */]
  }, {
    path: '/home',
    component: __WEBPACK_IMPORTED_MODULE_1__containers_home__["a" /* default */]
  }, {
    path: '/one',
    component: __WEBPACK_IMPORTED_MODULE_2__containers_firstPage__["a" /* default */]
  }, {
    path: '/two',
    component: __WEBPACK_IMPORTED_MODULE_3__containers_secondPage__["a" /* default */]
  }, {
    path: '/three',
    component: __WEBPACK_IMPORTED_MODULE_4__containers_thridPage__["a" /* default */]
  }, {
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_5__containers_notFound__["a" /* default */]
  }]
}];
var _default = routes;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/home/polo/src/myapp/universal_react_web_app/client/routes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/polo/src/myapp/universal_react_web_app/client/routes/index.js');
}();

;

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/header.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"importLoaders":1,"localIdentName":"[path]___[name]__[local]___[hash:base64:5]"}!./client/containers/header/header.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".client-containers-header-___header__page-header___4AMDa{\n  \n}\n", ""]);

// exports
exports.locals = {
	"page-header": "client-containers-header-___header__page-header___4AMDa"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/header/navbar/navbar.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"importLoaders":1,"localIdentName":"[path]___[name]__[local]___[hash:base64:5]"}!./client/containers/header/navbar/navbar.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".client-containers-header-navbar-___navbar__navbar-nav-section___1xROP,.client-containers-header-navbar-___navbar__navbar-logo-section___2iq8z{\n  display: inline-block;\n  float: left;\n}\n\n.client-containers-header-navbar-___navbar__navbar-nav-section___1xROP{\n  margin-left: 120px;\n  overflow: hidden;\n  position: relative;\n}\n\n.client-containers-header-navbar-___navbar__navbar-banner___3DivZ{\n  position: relative;\n  display: inline-block;\n  height: 100%;\n}\n\n.client-containers-header-navbar-___navbar__navbar-banner___3DivZ img{\n  position: absolute;\n  background-size: cover;\n}\n\n.client-containers-header-navbar-___navbar__navbar-word___16Ee2{\n  font-size: 20px;\n  vertical-align: top;\n  display: inline-block;\n}\n\n.client-containers-header-navbar-___navbar__navbar-nav___LSQc-{\n  position: relative;\n}\n\n.client-containers-header-navbar-___navbar__navbar-nav-section___1xROP .client-containers-header-navbar-___navbar__nav-ul___1pSOP{\n  -webkit-padding-start: 0px;\n}\n\n.client-containers-header-navbar-___navbar__nav-li___2BzNL{\n  display: inline-block;\n  list-style: none;\n  margin-right: 20px;\n}\n\n.client-containers-header-navbar-___navbar__navbar-link___1bOsK{\n  text-decoration: none;\n  display: inline-block;\n  color: #241D1D;\n}\n\n.client-containers-header-navbar-___navbar__navbar-active-bar___2dZjZ{\n  display: inline-block;\n  position: absolute;\n}\n", ""]);

// exports
exports.locals = {
	"navbar-nav-section": "client-containers-header-navbar-___navbar__navbar-nav-section___1xROP",
	"navbar-logo-section": "client-containers-header-navbar-___navbar__navbar-logo-section___2iq8z",
	"navbar-banner": "client-containers-header-navbar-___navbar__navbar-banner___3DivZ",
	"navbar-word": "client-containers-header-navbar-___navbar__navbar-word___16Ee2",
	"navbar-nav": "client-containers-header-navbar-___navbar__navbar-nav___LSQc-",
	"nav-ul": "client-containers-header-navbar-___navbar__nav-ul___1pSOP",
	"nav-li": "client-containers-header-navbar-___navbar__nav-li___2BzNL",
	"navbar-link": "client-containers-header-navbar-___navbar__navbar-link___1bOsK",
	"navbar-active-bar": "client-containers-header-navbar-___navbar__navbar-active-bar___2dZjZ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/home/home.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"importLoaders":1,"localIdentName":"[path]___[name]__[local]___[hash:base64:5]"}!./client/containers/home/home.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".client-containers-home-___home__page-home___2QVsr{\n  height: 2000px;\n  position: relative;\n}\n.client-containers-home-___home__btn-back-top___Y6u66{\n  position: absolute;\n  bottom: 0\n}\n", ""]);

// exports
exports.locals = {
	"page-home": "client-containers-home-___home__page-home___2QVsr",
	"btn-back-top": "client-containers-home-___home__btn-back-top___Y6u66"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/layout/layout.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"importLoaders":1,"localIdentName":"[path]___[name]__[local]___[hash:base64:5]"}!./client/containers/layout/layout.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "bodyhtml {\n  margin:0;\n}\n\na {\n  cursor: pointer;\n}\n\nul {\n  margin: 0;\n}\n\n.client-containers-layout-___layout__fade-appear___3by38,\n.client-containers-layout-___layout__fade-enter___5y3id {\n  opacity: 0;\n}\n\n.client-containers-layout-___layout__fade-appear-active___3N8cn,\n.client-containers-layout-___layout__fade-enter-active___1-AOV {\n  transition: opacity .3s linear;\n  opacity: 1;\n}\n\n.client-containers-layout-___layout__fade-exit___285EF {\n  transition: transform .2s linear;\n  opacity: 1;\n}\n\n.client-containers-layout-___layout__fade-exit-active___dVJtL {\n  opacity: 0;\n}\n\n.client-containers-layout-___layout__page-main___Ub6bV {\n  position: relative;\n  width: 100%;\n  margin: 0px auto;\n}\n\n.client-containers-layout-___layout__page-main-inner___2tRaT {\n  position: absolute;\n  width: 100%;\n  top:0;\n  left:0;\n  padding:80px 20px 20px 20px;\n}\n", ""]);

// exports
exports.locals = {
	"fade-appear": "client-containers-layout-___layout__fade-appear___3by38",
	"fade-enter": "client-containers-layout-___layout__fade-enter___5y3id",
	"fade-appear-active": "client-containers-layout-___layout__fade-appear-active___3N8cn",
	"fade-enter-active": "client-containers-layout-___layout__fade-enter-active___1-AOV",
	"fade-exit": "client-containers-layout-___layout__fade-exit___285EF",
	"fade-exit-active": "client-containers-layout-___layout__fade-exit-active___dVJtL",
	"page-main": "client-containers-layout-___layout__page-main___Ub6bV",
	"page-main-inner": "client-containers-layout-___layout__page-main-inner___2tRaT"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"importLoaders\":1,\"localIdentName\":\"[path]___[name]__[local]___[hash:base64:5]\"}!./client/containers/normalize.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"importLoaders":1,"localIdentName":"[path]___[name]__[local]___[hash:base64:5]"}!./client/containers/normalize.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v6.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"name":"universal_react_web_app","version":"1.0.0","main":"index.js","author":"polo","license":"MIT","scripts":{"start":"npm run pack && nodemon index.js","noderun":"NODE_ENV=production node index.js --isssl=true","localpack":"npm_config_islocal=true NODE_ENV=development webpack-dev-server --config ./webpackConfig/webpack.config.js","pack":"NODE_ENV=development webpack --config ./webpackConfig/webpack.config.js"},"browserslist":[">1%","last 2 versions","Firefox ESR","not ie < 9"],"dependencies":{"@alicloud/sms-sdk":"^1.0.2","babel-core":"^6.26.0","babel-plugin-react-css-modules":"^3.3.2","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.0","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-register":"^6.26.0","core.js":"^0.4.2","css-modules-require-hook":"^4.2.2","es6-promise":"^4.1.1","exenv":"^1.2.2","gsap":"^1.20.2","ioredis":"^3.1.4","isomorphic-fetch":"^2.2.1","joi":"^11.0.3","koa":"^2.3.0","koa-body":"^2.3.0","koa-compose":"^4.0.0","koa-compress":"^2.0.0","koa-helmet":"^3.2.0","koa-ratelimit":"^4.0.0","koa-router":"^7.2.1","koa-session":"^5.5.0","koa-static":"^4.0.1","marko":"^4.4.28","mime":"^2.0.3","mockjs":"^1.0.1-beta3","moment":"^2.18.1","mysql2":"^1.4.2","nodemailer":"^4.0.1","object-assign":"^4.1.1","path-to-regexp":"^2.0.0","promise":"^8.0.1","prop-types":"^15.5.10","react":"^16.0.0","react-dom":"^16.0.0","react-helmet":"^5.2.0","react-redux":"^5.0.6","react-router":"^4.2.0","react-router-config":"^1.0.0-beta.4","react-router-dom":"^4.2.2","react-transition-group":"^2.2.1","redux":"^3.7.2","redux-persist":"^4.10.1","redux-thunk":"^2.2.0","request":"^2.81.0","request-promise":"^4.2.1","sequelize":"^4.8.4","serialize-javascript":"^1.4.0","spdy":"^3.4.7","uuid":"^3.1.0","verror":"^1.10.0","winston":"^2.3.1","winston-daily-rotate-file":"^1.4.6","yargs":"^8.0.2"},"devDependencies":{"autoprefix":"^1.0.1","babel-eslint":"7","babel-loader":"^7.1.2","case-sensitive-paths-webpack-plugin":"^2.1.1","css-loader":"^0.28.7","eslint":"^4.6.1","eslint-config-airbnb-base":"^12.0.0","eslint-loader":"^1.9.0","eslint-plugin-import":"2.7.0","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-react":"^7.3.0","eventsource-polyfill":"^0.9.6","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.5","friendly-errors-webpack-plugin":"^1.6.1","html-loader":"^0.5.1","html-webpack-harddisk-plugin":"^0.1.0","html-webpack-plugin":"^2.30.1","inline-chunk-manifest-html-webpack-plugin":"^1.1.1","koa-reload":"^1.0.3","koa-webpack":"^1.0.0","less":"^2.7.2","less-loader":"^4.0.5","optimize-css-assets-webpack-plugin":"^3.2.0","postcss-flexbugs-fixes":"^3.2.0","postcss-loader":"^2.0.6","preload-webpack-plugin":"^2.0.0","rap-node-plugin":"^0.2.2","react-dev-utils":"^4.1.0","react-hot-loader":"next","remote-redux-devtools":"^0.5.12","rimraf":"^2.6.1","script-ext-html-webpack-plugin":"^1.8.5","style-loader":"^0.18.2","sw-precache-webpack-plugin":"^0.11.4","uglifyjs-webpack-plugin":"^0.4.6","url-loader":"^0.6.2","webpack":"3.5.5","webpack-dev-server":"^2.7.1","webpack-merge":"^4.1.0"}}

/***/ }),

/***/ "./webpackConfig/client.polyfills.js":
/*!*******************************************!*\
  !*** ./webpackConfig/client.polyfills.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// global entry add 'babel-polyfill' or .babelrc plugins add 'transfrom-runtime' option
if (typeof Promise === 'undefined') {
  window.Promise = __webpack_require__(/*! promise/lib/es6-extensions.js */ "./node_modules/promise/lib/es6-extensions.js");
}

if (typeof Set === 'undefined') {
  window.Map = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
  window.Set = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
}

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

Object.assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************!*\
  !*** multi eventsource-polyfill react-hot-loader/patch webpack-hot-middleware/client?reload=true ./webpackConfig/client.polyfills.js ./client/index.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! eventsource-polyfill */"./node_modules/eventsource-polyfill/dist/browserify-eventsource.js");
__webpack_require__(/*! react-hot-loader/patch */"./node_modules/react-hot-loader/patch.js");
__webpack_require__(/*! webpack-hot-middleware/client?reload=true */"./node_modules/webpack-hot-middleware/client.js?reload=true");
__webpack_require__(/*! /home/polo/src/myapp/universal_react_web_app/webpackConfig/client.polyfills.js */"./webpackConfig/client.polyfills.js");
module.exports = __webpack_require__(/*! /home/polo/src/myapp/universal_react_web_app/client/index.js */"./client/index.js");


/***/ })

},[0]);
//# sourceMappingURL=index.js.map