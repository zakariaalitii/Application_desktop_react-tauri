import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { useBaseProps } from 'rc-select';
import KeyCode from "rc-util/es/KeyCode";
import { SEARCH_MARK } from '../hooks/useSearchOptions';
export default (function (ref, options, fieldNames, activeValueCells, setActiveValueCells, onKeyBoardSelect) {
  var _useBaseProps = useBaseProps(),
      direction = _useBaseProps.direction,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      open = _useBaseProps.open;

  var rtl = direction === 'rtl';

  var _React$useMemo = React.useMemo(function () {
    var activeIndex = -1;
    var currentOptions = options;
    var mergedActiveIndexes = [];
    var mergedActiveValueCells = [];
    var len = activeValueCells.length; // Fill validate active value cells and index

    var _loop = function _loop(i) {
      // Mark the active index for current options
      var nextActiveIndex = currentOptions.findIndex(function (option) {
        return option[fieldNames.value] === activeValueCells[i];
      });

      if (nextActiveIndex === -1) {
        return "break";
      }

      activeIndex = nextActiveIndex;
      mergedActiveIndexes.push(activeIndex);
      mergedActiveValueCells.push(activeValueCells[i]);
      currentOptions = currentOptions[activeIndex][fieldNames.children];
    };

    // Fill validate active value cells and index
    for (var i = 0; i < len; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    } // Fill last active options


    // Fill last active options
    var activeOptions = options;

    for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
      activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.children];
    }

    return [mergedActiveValueCells, activeIndex, activeOptions];
  }, [activeValueCells, fieldNames, options]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
      validActiveValueCells = _React$useMemo2[0],
      lastActiveIndex = _React$useMemo2[1],
      lastActiveOptions = _React$useMemo2[2]; // Update active value cells and scroll to target element


  var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
    setActiveValueCells(next);
  }; // Same options offset


  var offsetActiveOption = function offsetActiveOption(offset) {
    var len = lastActiveOptions.length;
    var currentIndex = lastActiveIndex;

    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }

    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions[currentIndex];

      if (option && !option.disabled) {
        var value = option[fieldNames.value];
        var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  }; // Different options offset


  var prevColumn = function prevColumn() {
    if (validActiveValueCells.length > 1) {
      var nextActiveCells = validActiveValueCells.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      toggleOpen(false);
    }
  };

  var nextColumn = function nextColumn() {
    var _lastActiveOptions$la;

    var nextOptions = ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null || _lastActiveOptions$la === void 0 ? void 0 : _lastActiveOptions$la[fieldNames.children]) || [];
    var nextOption = nextOptions.find(function (option) {
      return !option.disabled;
    });

    if (nextOption) {
      var nextActiveCells = [].concat(_toConsumableArray(validActiveValueCells), [nextOption[fieldNames.value]]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };

  React.useImperativeHandle(ref, function () {
    return {
      // scrollTo: treeRef.current?.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode.UP:
          case KeyCode.DOWN:
            {
              var offset = 0;

              if (which === KeyCode.UP) {
                offset = -1;
              } else if (which === KeyCode.DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                offsetActiveOption(offset);
              }

              break;
            }

          case KeyCode.LEFT:
            {
              if (rtl) {
                nextColumn();
              } else {
                prevColumn();
              }

              break;
            }

          case KeyCode.RIGHT:
            {
              if (rtl) {
                prevColumn();
              } else {
                nextColumn();
              }

              break;
            }

          case KeyCode.BACKSPACE:
            {
              if (!searchValue) {
                prevColumn();
              }

              break;
            }
          // >>> Select

          case KeyCode.ENTER:
            {
              if (validActiveValueCells.length) {
                var option = lastActiveOptions[lastActiveIndex]; // Search option should revert back of origin options

                var originOptions = (option === null || option === void 0 ? void 0 : option[SEARCH_MARK]) || [];

                if (originOptions.length) {
                  onKeyBoardSelect(originOptions.map(function (opt) {
                    return opt[fieldNames.value];
                  }), originOptions[originOptions.length - 1]);
                } else {
                  onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
                }
              }

              break;
            }
          // >>> Close

          case KeyCode.ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  });
});