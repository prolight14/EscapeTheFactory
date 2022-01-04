"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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