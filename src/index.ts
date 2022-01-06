import PlayScene from "./Scenes/playScene";

let config: Phaser.Types.Core.GameConfig = {
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
        PlayScene
    ],
}

export default new Phaser.Game(config);