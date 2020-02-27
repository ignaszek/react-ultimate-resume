"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactEmojiRender = require("react-emoji-render");

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _basics_front_styles = require("./basics_front_styles");

var useStyles = (0, _reactJss.createUseStyles)(_basics_front_styles.styles);

var BasicsFrontComponent = function BasicsFrontComponent(_ref) {
  var _data$currentCity;

  var data = _ref.data;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isMainTypographyTruncated = _useState2[0],
      setIsMainTypographyTruncated = _useState2[1];

  var mainTypographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = mainTypographyReference.current;

    if (element.offsetWidth < element.scrollWidth) {
      setIsMainTypographyTruncated(true);
    }
  }, [mainTypographyReference.current]);
  console.log({
    mainTypographyReference: mainTypographyReference,
    isMainTypographyTruncated: isMainTypographyTruncated
  });
  return _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement("div", {
    className: classes.texts
  }, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    ref: mainTypographyReference,
    classes: {
      container: (0, _classnames.default)(classes.mainTypography, isMainTypographyTruncated && classes.truncatedMainTypography)
    }
  }, data.summary), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    variant: "h4",
    component: "h3",
    classes: {
      container: classes.location
    }
  }, _react.default.createElement(_reactEmojiRender.Twemoji, {
    svg: true,
    text: "\uD83D\uDCCD"
  }), data === null || data === void 0 ? void 0 : (_data$currentCity = data.currentCity) === null || _data$currentCity === void 0 ? void 0 : _data$currentCity.name))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.front.action",
    defaultMessage: "More about me"
  }))));
};

var BasicsFront = BasicsFrontComponent;
exports.BasicsFront = BasicsFront;