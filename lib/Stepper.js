'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto'
  }
};

function Stepper(_ref) {
  var activeStep = _ref.activeStep;
  var steps = _ref.steps;
  var activeColor = _ref.activeColor;
  var completeColor = _ref.completeColor;
  var defaultColor = _ref.defaultColor;
  var circleFontColor = _ref.circleFontColor;
  var activeTitleColor = _ref.activeTitleColor;
  var completeTitleColor = _ref.completeTitleColor;
  var defaultTitleColor = _ref.defaultTitleColor;
  var size = _ref.size;
  var circleFontSize = _ref.circleFontSize;
  var titleFontSize = _ref.titleFontSize;
  var circleTop = _ref.circleTop;
  var titleTop = _ref.titleTop;

  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      'div',
      { style: styles.stepper },
      steps.map(function (step, index) {
        return _react2.default.createElement(_Step2.default, {
          key: index,
          width: 100 / steps.length,
          title: step.title,
          href: step.href,
          onClick: step.onClick,
          active: index === activeStep,
          completed: index < activeStep,
          first: index === 0,
          isLast: index === steps.length - 1,
          index: index,
          activeColor: activeColor,
          completeColor: completeColor,
          defaultColor: defaultColor,
          circleFontColor: circleFontColor,
          activeTitleColor: activeTitleColor,
          completeTitleColor: completeTitleColor,
          defaultTitleColor: defaultTitleColor,
          size: size,
          circleFontSize: circleFontSize,
          titleFontSize: titleFontSize,
          circleTop: circleTop,
          titleTop: titleTop
        });
      })
    )
  );
}

Stepper.defaultProps = {
  activeStep: 0
};

Stepper.propTypes = {
  activeStep: _react.PropTypes.number,
  steps: _react.PropTypes.array,
  activeColor: _react.PropTypes.string,
  completeColor: _react.PropTypes.string,
  defaultColor: _react.PropTypes.string,
  activeTitleColor: _react.PropTypes.string,
  completeTitleColor: _react.PropTypes.string,
  defaultTitleColor: _react.PropTypes.string,
  circleFontColor: _react.PropTypes.string,
  size: _react.PropTypes.number,
  circleFontSize: _react.PropTypes.number,
  titleFontSize: _react.PropTypes.number,
  circleTop: _react.PropTypes.number,
  titleTop: _react.PropTypes.number
};

exports.default = Stepper;