import Player from "../GameObjects/Player";


export default class PlayScene extends Phaser.Scene
{
    constructor()
    {
        super("play");
    }

    public preload() 
    {
        this.load.image("Factory-extruded", "./assets/Levels/Tilesets/Factory-extruded.png");
        this.load.tilemapTiledJSON("Start", "./assets/Levels/Tilemaps/Start.json");
    }

    private player: Player;

    public create() 
    {
        const tilemap: Phaser.Tilemaps.Tilemap = this.add.tilemap("Start");
        const tileset: Phaser.Tilemaps.Tileset = tilemap.addTilesetImage("Factory-extruded"); 

        const floorLayer = tilemap.createLayer("Floor", tileset).setCollisionByProperty({ collides: true });

        const playerSpawnPoint = tilemap.findObject("Objects", obj => obj.name === "Player Spawn Point");
        this.player = new Player(this, playerSpawnPoint.x as number, playerSpawnPoint.y as number);

        this.physics.add.collider(this.player, floorLayer);
        this.physics.world.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
        this.physics.world.setBoundsCollision(true, true, true, false);

        const cam = this.cameras.main;
        cam.startFollow(this.player);
        cam.setZoom(2);
        cam.setBounds(0, 0, tilemap.widthInPixels, tilemap.heightInPixels);
    }

    public update(time: number, delta: number)
    {
        
    }
}