import 'isomorphic-fetch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { TweenLite } from 'gsap';
import * as ActionTypes from '../../constants';
import fetchApiSaga from '../../redux/sagas';
import { counterActionCreator } from '../../redux/modules/counter';
import { startFetch } from '../../redux/modules/asyncFetchData';
import { switchCounterTypeActionCreator } from '../../redux/modules/switchCounterType';
import { ensureNumberActionCreator } from '../../redux/modules/ensureNumber';
import './home.css';

const calcMethods = {
  PLUS: '+',
  MINUS: '-',
  TIMES: '*',
  DIVIDE: '/'
};

const methods = Object.keys(calcMethods);

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.activeBtn = this.activeBtn.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  static componentWillFetch() {
    return fetchApiSaga;
  }

  componentDidMount() {
    // this.props.startFetch();
  }

  handleNumberChange(e, isFirst) {
    const { ensurenum } = this.props;
    const currentValue = e.target.value;
    const number = parseFloat(currentValue);
    ensurenum(number, isFirst);
  }

  activeBtn(e) {
    const { SWITCH_TYPE } = this.props;
    const btnType = e.target.value;
    SWITCH_TYPE(btnType);
  }

  scrollTop() {
    TweenLite.to(window, 1000, { scrollTo: 0 });
  }

  render() {
    console.log('home rendered');
    const {
      count,
      calc,
      type,
      number1,
      number2,
      data
    } = this.props;
    return (
      <div styleName='page-home'>
        <form styleName='page-calc'>
          <div styleName='btn-inline-groups'>
            <input
              type='text'
              styleName='btn-default'
              onChange={e => { this.handleNumberChange.call(this, e, true); }}
            />
            <div style={{ display: 'inline-block' }}>
              {methods.map((method, index) => {
                const backgroundColor = type === method ? 'red' : 'white';
                return (
                  <input
                    type='button'
                    styleName='btn-default'
                    value={method}
                    key={index}
                    onClick={ this.activeBtn }
                    style={{ backgroundColor }}
                  />
                );
              })}
            </div>
            <input
              type='text'
              styleName='btn-default'
              onChange={e => { this.handleNumberChange.call(this, e, false); }}
            />
            <input
              type='button'
              styleName='btn-submit'
              onClick={() => { calc(type, number1, number2); }}
              value='submit'
            />
          </div>
        </form>
        <p>current number: {count}</p>
        <hr/>
        <div styleName="page-fetch-show">
          <p>fetchdata: {JSON.stringify(data)}</p>
        </div>
        <button styleName='btn-back-top' onClick={this.scrollTop}>toTop</button>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  calc: PropTypes.func.isRequired,
  ensurenum: PropTypes.func.isRequired,
  SWITCH_TYPE: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  number1: PropTypes.number.isRequired,
  number2: PropTypes.number.isRequired,
  data: PropTypes.object
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
  return {
    ...bindActionCreators({
      startFetch,
      calc: counterActionCreator,
      ensurenum: ensureNumberActionCreator,
      SWITCH_TYPE: switchCounterTypeActionCreator
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
