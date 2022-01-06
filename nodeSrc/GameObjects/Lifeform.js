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
var GameObject_1 = require("./GameObject");
var Lifeform = (function (_super) {
    __extends(Lifeform, _super);
    function Lifeform(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.dead = false;
        _this.deathType = "";
        scene.physics.add.existing(_this);
        _this.setMaxVelocity(170, 1000).setDragX(320).setCollideWorldBounds(true).setScale(0.5);
        return _this;
    }
    Lifeform.prototype.move = function () {
        if (this.controls.left()) {
            this.setAccelerationX(-320);
        }
        if (this.controls.right()) {
            this.setAccelerationX(320);
        }
        if (!this.controls.left() && !this.controls.right()) {
            this.setAccelerationX(0);
        }
        var inAir = !this.body.blocked.down;
        if (!inAir) {
            if (this.controls.up()) {
                this.setVelocityY(-330);
            }
        }
        if (this.y > this.scene.physics.world.bounds.height) {
            this.dead = true;
            this.deathType = "fellOffLevel";
        }
        if (this.dead) {
            this.destroy(true);
        }
    };
    Lifeform.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
        this.move();
    };
    return Lifeform;
}(GameObject_1.default));
exports.default = Lifeform;
//# sourceMappingURL=Lifeform.js.map