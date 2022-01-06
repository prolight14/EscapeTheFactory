"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playScene_1 = require("./Scenes/playScene");
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: 0x494949,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 800
            }
        }
    },
    disableContextMenu: true,
    scene: [
        playScene_1.default
    ],
};
exports.default = new Phaser.Game(config);
//# sourceMappingURL=index.js.map