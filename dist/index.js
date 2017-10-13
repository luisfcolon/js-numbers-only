"use strict";function numbersOnly(e){var t=e.which;return!e.shiftKey&&(8===t||37===t||39===t||9===t||t>=48&&t<=58||t>=96&&t<=105)||(e.preventDefault(),!1)}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=numbersOnly;var _index=require("./index"),_index2=_interopRequireDefault(_index);describe("numbersOnly()",function(){it("does not allow the user to hit the shift key",function(){var e={shiftKey:!0,which:42,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!1)}),it("does not allow the user to enter in anything but numbers",function(){var e={shiftKey:!1,which:200,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!1)}),it("allows the user to use the delete key",function(){var e={shiftKey:!1,which:8,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)}),it("allows the user to use the tab key",function(){var e={shiftKey:!1,which:9,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)}),it("allows the user to use the left arrow key",function(){var e={shiftKey:!1,which:37,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)}),it("allows the user to use the right arrow key",function(){var e={shiftKey:!1,which:39,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)}),it("allows the user to enter a keyboard number",function(){var e={shiftKey:!1,which:50,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)}),it("allows the user to enter a numpad number",function(){var e={shiftKey:!1,which:100,preventDefault:jest.fn(function(){})};expect((0,_index2.default)(e)).toEqual(!0)})});