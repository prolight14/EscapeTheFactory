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
var Player_1 = require("../GameObjects/Player");
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super.call(this, "play") || this;
    }
    PlayScene.prototype.preload = function () {
        this.load.image("Factory-extruded", "./assets/Levels/Tilesets/Factory-extruded.png");
        this.load.tilemapTiledJSON("Start", "./assets/Levels/Tilemaps/Start.json");
    };
    PlayScene.prototype.create = function () {
        var tilemap = this.add.tilemap("Start");
        var tileset = tilemap.addTilesetImage("Factory-extruded");
        var floorLayer = tilemap.createLayer("Floor", tileset).setCollisionByProperty({ collides: true });
        var playerSpawnPoint = tilemap.findObject("Objects", function (obj) { return obj.name === "Player Spawn Point"; });
        this.player = new Player_1.default(this, playerSpawnPoint.x, playerSpawnPoint.y);
        this.physics.add.collider(this.player, floorLayer);
        this.physics.world.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
        this.physics.world.setBoundsCollision(true, true, true, false);
        var cam = this.cameras.main;
        cam.startFollow(this.player);
        cam.setZoom(2);
        cam.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
    };
    PlayScene.prototype.update = function (time, delta) {
    };
    return PlayScene;
}(Phaser.Scene));
exports.default = PlayScene;
//# sourceMappingURL=playScene.js.map