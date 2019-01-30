webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/ItemCard.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/ItemCard.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 18px auto;\n  width: 700px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  padding: 12px;\n  font-size: 18px;\n  box-shadow: 1px 1px 5px #0000002c;\n  text-align: left;\n  background-color: rgba(110, 134, 199, 0.3); }\n\n.card .title {\n  margin: 0; }\n\n.card .company {\n  margin: 4px 0;\n  font-weight: 200;\n  font-size: 14px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/ItemCard.css":
/*!**************************!*\
  !*** ./src/ItemCard.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./ItemCard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/ItemCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./ItemCard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/ItemCard.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./ItemCard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/ItemCard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/ItemCard.js":
/*!*************************!*\
  !*** ./src/ItemCard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCard.css */ "./src/ItemCard.css");
/* harmony import */ var _ItemCard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ItemCard_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ada/nartal/repos/NataliaArtal/repos/e-commerce/client/src/ItemCard.js";



var ItemCard = function ItemCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.company.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.email));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ }),

/***/ "./src/ItemList.js":
/*!*************************!*\
  !*** ./src/ItemList.js ***!
  \*************************/
/*! exports provided: Food, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
/* harmony import */ var _home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ItemCard */ "./src/ItemCard.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");





var _jsxFileName = "/home/ada/nartal/repos/NataliaArtal/repos/e-commerce/client/src/ItemList.js";




var ItemList =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ItemList, _React$Component);

  function ItemList(props) {
    var _this;

    Object(_home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemList);

    _this = Object(_home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ItemList).call(this, props));

    _this.handleOnChange = function (event) {
      _this.setState({
        searchTerm: event.target.value
      });
    };

    _this.buscarProductos = function () {
      ;
    };

    _this.state = {
      searchTerm: ''
    };
    return _this;
  }

  Object(_home_ada_nartal_repos_NataliaArtal_repos_e_commerce_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "input",
        placeholder: "Nunca dejes de buscar",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.buscarProductos,
        className: "boton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Buscar")), this.props.users && this.props.users.filter(function (user) {
        return user.name.toLowerCase().includes(_this2.state.searchTerm.toLowerCase());
      }).map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ItemCard__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
          key: user.id
        }, user, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }));
      }));
    }
  }]);

  return ItemList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var Food = function Food() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Favorite Food: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: "igloo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./src/UserCard.js":
false

})
//# sourceMappingURL=main.c36d7d4dcd134359a617.hot-update.js.map