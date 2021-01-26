"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCep = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var CEP_API = 'https://brasilapi.com.br/api/cep/v1/';

var fetchCep = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cep) {
    var jsonPromisse, json, error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(CEP_API + cep);

          case 2:
            jsonPromisse = _context.sent;
            _context.next = 5;
            return jsonPromisse.json();

          case 5:
            json = _context.sent;
            error = json.errors && json.errors.length > 0;

            if (!error) {
              _context.next = 9;
              break;
            }

            throw {
              message: json.message
            };

          case 9:
            return _context.abrupt("return", json);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchCep(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchCep = fetchCep;