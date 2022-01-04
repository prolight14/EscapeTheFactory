var EscapeTheFactory;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scenes/playScene.js":
/*!*****************************!*\
  !*** ./scenes/playScene.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super.call(this, "play") || this;
    }
    PlayScene.prototype.preload = function () {
    };
    PlayScene.prototype.create = function () {
        this.add.text(200, 200, "Hello World!!!");
    };
    PlayScene.prototype.update = function (time, delta) {
    };
    return PlayScene;
}(Phaser.Scene));
exports.default = PlayScene;
//# sourceMappingURL=playScene.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.js ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var playScene_1 = __webpack_require__(/*! ./scenes/playScene */ "./scenes/playScene.js");
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    disableContextMenu: true,
    scene: [
        playScene_1.default
    ],
};
exports.default = new Phaser.Game(config);
//# sourceMappingURL=index.js.map
})();

EscapeTheFactory = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=EscapeTheFactory.js.map