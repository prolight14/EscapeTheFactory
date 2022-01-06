import Lifeform from "./Lifeform";


export default class Player extends Lifeform
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, "Player");

        this.keys = {
            a: scene.input.keyboard.addKey('a'), 
            d: scene.input.keyboard.addKey('d'),
            w: scene.input.keyboard.addKey('w'),
            s: scene.input.keyboard.addKey('s'),
            left: scene.input.keyboard.addKey("left"),
            right: scene.input.keyboard.addKey("right"),
            up: scene.input.keyboard.addKey("up"),
            down: scene.input.keyboard.addKey("down"),
            r: scene.input.keyboard.addKey("r"),
        };

        this.on("destroy", () =>
        {
            this.scene.scene.restart({
                loadType: "playerDeath",
                deathType: this.deathType
            });
        });

        this.controls = {
            left: () =>
            {
                return this.keys.a.isDown || this.keys.left.isDown;
            },
            right: () =>
            {
                return this.keys.d.isDown || this.keys.right.isDown;
            },
            up: () =>
            {
                return this.keys.w.isDown || this.keys.up.isDown;
            },
            down: () =>
            {
                return this.keys.s.isDown || this.keys.down.isDown;
            },
            activate: () =>
            {
                return this.keys.s.isDown || this.keys.down.isDown;
            },
        };
    }
    
    private keys: any;
 
    protected preUpdate(time: number, delta: number)
    {
        super.preUpdate(time, delta);

        if(this.keys.r.isDown)
        {
            this.dead = true;
            this.deathType = "restarted";
        }
    }
}