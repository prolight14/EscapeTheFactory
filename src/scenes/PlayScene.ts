

export default class PlayScene extends Phaser.Scene
{
    constructor()
    {
        super("play");
    }

    public preload() 
    {

    }

    public create() 
    {
        this.add.text(200, 200, "Hello World!!!");
    }

    public update(time: number, delta: number)
    {
        
    }
}