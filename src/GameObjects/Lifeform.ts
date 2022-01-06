import GameObject from "./GameObject";


export default class Lifeform extends GameObject
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number)
    {
        super(scene, x, y, texture, frame); 

        scene.physics.add.existing(this);

        this.setMaxVelocity(170, 1000).setDragX(320).setCollideWorldBounds(true).setScale(0.5);
    }

    protected dead: boolean = false;
    protected deathType: string = "";

    protected controls: {
        left: () => boolean;
        right: () => boolean;
        up: () => boolean;
        down: () => boolean;
        activate: () => boolean;
    };

    private move()
    {
        if(this.controls.left())
        {
            this.setAccelerationX(-320);
        }
        if(this.controls.right())
        {
            this.setAccelerationX(320);
        }
        if(!this.controls.left() && !this.controls.right())
        {
            this.setAccelerationX(0);
        }

        const inAir = !this.body.blocked.down;

        if(!inAir)
        {
            if(this.controls.up())
            {
                this.setVelocityY(-330);
            }
        }

        if(this.y > this.scene.physics.world.bounds.height)
        {
            this.dead = true;
            this.deathType = "fellOffLevel";
        }

        if(this.dead)
        {
            this.destroy(true);
        }
    }

    protected preUpdate(time: number, delta: number) 
    {
        super.preUpdate(time, delta);

        this.move();
    }
}