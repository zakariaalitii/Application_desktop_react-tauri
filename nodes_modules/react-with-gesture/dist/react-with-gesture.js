'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';
var defaultProps = {
  touch: true,
  mouse: true,
  passive: {
    passive: true
  },
  onAction: undefined,
  onDown: undefined,
  onUp: undefined,
  onMove: undefined
};
var initialState = {
  event: undefined,
  args: undefined,
  temp: undefined,
  target: undefined,
  time: undefined,
  xy: [0, 0],
  delta: [0, 0],
  initial: [0, 0],
  previous: [0, 0],
  direction: [0, 0],
  local: [0, 0],
  lastLocal: [0, 0],
  velocity: 0,
  distance: 0,
  down: false,
  first: true,
  shiftKey: false
};

function handlers(set, props, args) {
  if (props === void 0) {
    props = {};
  }

  // Common handlers
  var handleUp = function handleUp(event, shiftKey) {
    set(function (state) {
      var newProps = _extends({}, state, {
        down: false,
        first: false
      });

      var temp = props.onAction && props.onAction(newProps);
      if (props.onUp) props.onUp(newProps);
      return _extends({}, newProps, {
        event: event,
        shiftKey: shiftKey,
        lastLocal: state.local,
        temp: temp || newProps.temp
      });
    });
  };

  var handleDown = function handleDown(event) {
    var _ref = event.touches ? event.touches[0] : event,
        target = _ref.target,
        pageX = _ref.pageX,
        pageY = _ref.pageY,
        shiftKey = _ref.shiftKey;

    set(function (state) {
      var lastLocal = state.lastLocal || initialState.lastLocal;

      var newProps = _extends({}, initialState, {
        event: event,
        target: target,
        args: args,
        lastLocal: lastLocal,
        shiftKey: shiftKey,
        local: lastLocal,
        xy: [pageX, pageY],
        initial: [pageX, pageY],
        previous: [pageX, pageY],
        down: true,
        time: Date.now(),
        cancel: function cancel() {
          stop();
          requestAnimationFrame(function () {
            return handleUp(event);
          });
        }
      });

      var temp = props.onAction && props.onAction(newProps);
      if (props.onDown) props.onDown(newProps);
      return _extends({}, newProps, {
        temp: temp
      });
    });
  };

  var handleMove = function handleMove(event) {
    var _ref2 = event.touches ? event.touches[0] : event,
        pageX = _ref2.pageX,
        pageY = _ref2.pageY,
        shiftKey = _ref2.shiftKey;

    set(function (state) {
      var time = Date.now();
      var x_dist = pageX - state.xy[0];
      var y_dist = pageY - state.xy[1];
      var delta_x = pageX - state.initial[0];
      var delta_y = pageY - state.initial[1];
      var distance = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
      var len = Math.sqrt(x_dist * x_dist + y_dist * y_dist);
      var scalar = 1 / (len || 1);

      var newProps = _extends({}, state, {
        event: event,
        time: time,
        shiftKey: shiftKey,
        xy: [pageX, pageY],
        delta: [delta_x, delta_y],
        local: [state.lastLocal[0] + pageX - state.initial[0], state.lastLocal[1] + pageY - state.initial[1]],
        velocity: len / (time - state.time),
        distance: distance,
        direction: [x_dist * scalar, y_dist * scalar],
        previous: state.xy,
        first: false
      });

      var temp = props.onAction && props.onAction(newProps);
      if (props.onMove) props.onMove(newProps);
      return _extends({}, newProps, {
        temp: temp || newProps.temp
      });
    });
  };

  var onDown = function onDown(e) {
    if (props.mouse) {
      window.addEventListener(mouseMove, handleMove, props.passive);
      window.addEventListener(mouseUp, onUp, props.passive);
    }

    if (props.touch) {
      window.addEventListener(touchMove, handleMove, props.passive);
      window.addEventListener(touchEnd, onUp, props.passive);
    }

    handleDown(e);
  };

  var stop = function stop() {
    if (props.mouse) {
      window.removeEventListener(mouseMove, handleMove, props.passive);
      window.removeEventListener(mouseUp, onUp, props.passive);
    }

    if (props.touch) {
      window.removeEventListener(touchMove, handleMove, props.passive);
      window.removeEventListener(touchEnd, onUp, props.passive);
    }
  };

  var onUp = function onUp(e) {
    var shiftKey = e.shiftKey;
    stop();
    handleUp(e, shiftKey);
  };

  var output = {};
  var capture = props.passive.capture ? 'Capture' : '';

  if (props.mouse) {
    output["onMouseDown" + capture] = onDown;
  }

  if (props.touch) {
    output["onTouchStart" + capture] = onDown;
  }

  return output;
}

var Gesture =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Gesture, _React$Component);

  function Gesture(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = initialState;

    var set = _this.setState.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (props.onAction) {
      _this._state = initialState;

      set = function set(cb) {
        return _this._state = cb(_this._state);
      };
    }

    _this.handlers = handlers(set, props);
    return _this;
  }

  var _proto = Gesture.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        children = _this$props.children,
        className = _this$props.className;
    return React.createElement("div", _extends({}, this.handlers, {
      style: _extends({
        display: 'contents'
      }, style),
      className: className
    }), children(this.state));
  };

  return Gesture;
}(React.Component);

Gesture.defaultProps = defaultProps;

var withGesture = function withGesture(config) {
  return function (Wrapped) {
    return function (props) {
      return React.createElement(Gesture, _extends({}, config, {
        children: function children(gestureProps) {
          return React.createElement(Wrapped, _extends({}, props, gestureProps));
        }
      }));
    };
  };
};

function useGesture(props) {
  var _React$useState = React.useState(initialState),
      state = _React$useState[0],
      set = _React$useState[1];

  var transientState = React.useRef(initialState);
  if (typeof props === 'function') props = {
    onAction: props
  };
  props = _extends({}, defaultProps, props);

  var _React$useState2 = React.useState(function () {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return handlers(props.onAction ? function (cb) {
        return transientState.current = cb(transientState.current);
      } : set, props, args);
    };
  }),
      spread = _React$useState2[0];

  return props.onAction ? spread : [spread, state];
}

exports.withGesture = withGesture;
exports.Gesture = Gesture;
exports.useGesture = useGesture;
