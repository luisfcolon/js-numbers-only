"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * numbersOnly()
 * JS event for only allowing numbers and a few special characters
 * in a form input
 */
function numbersOnly(e) {
  const charCode = e.which; // We only want to allow certain special characters and numbers
  // for our currency input (0-9, tab, delete, left and right arrow)

  if (!e.shiftKey && (charCode === 8 || charCode === 37 || charCode === 39 || charCode === 9 || charCode >= 48 && charCode <= 58 || charCode >= 96 && charCode <= 105)) {
    return true;
  }

  e.preventDefault();
  return false;
}

var _default = numbersOnly;
exports.default = _default;
